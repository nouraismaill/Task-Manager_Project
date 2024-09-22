import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";
import ListCard from "./listCard";

function TaskList({ refreshTasks, setRefreshTasks }) {
  const [tasks, setTasks] = useState([]);
  const [sharedTasks, setSharedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTaskData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/task/get`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch tasks");
      }

      const { allTasks, sharedTasks } = await res.json();
      setTasks(allTasks || []);

      setSharedTasks(sharedTasks || []);
      console.log(allTasks);
      console.log(sharedTasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskData();
    if (refreshTasks) {
      setRefreshTasks(false);
    }
  }, [refreshTasks]);
  const handleDelete = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`${BASE_URL}/task/delete/${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

      fetchTaskData();
    } catch (error) {
      console.log("Error deleting task:", error);
    }
  };

  const handleEdit = async (taskId, newDescription, newStatus) => {
    try {
      const response = await fetch(`${BASE_URL}/task/edit/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          description: newDescription,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error("Error updating task");
      }

      const result = await response.json();
      console.log(result.message);

      // Refresh task list after editing
      fetchTaskData();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleShare = async (taskId, sharedWithUserId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/task/share`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ taskId, sharedWithUserId }),
      });

      if (!response.ok) {
        throw new Error("Error sharing the task");
      }

      const result = await response.json();
      toast.success(result.message);
      console.log(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) return <div className="mx-10">Loading...</div>;

  return (
    <div className="flex flex-col  mt-[-50px] ml-[-8px] mr-8 ">
      {tasks.length === 0 && sharedTasks.length === 0 ? (
        <div className="text-end mr-[300px] text-gray-500  my-10">
          No tasks available. Please add a task to get started.
        </div>
      ) : (
        <>
          {tasks.map((task, index) => (
            <ListCard
              key={task.id}
              index={index + 1}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onShare={handleShare}
            />
          ))}

          {sharedTasks.map((task, index) => (
            <>
              <h2 className="mx-8 mt-5 text-gray-700 font-bold">
                Shared Tasks
              </h2>
              <ListCard
                key={task.id}
                index={index + 1}
                task={task}
                viewOnly={true}
              />
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default TaskList;
