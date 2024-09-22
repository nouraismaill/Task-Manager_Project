import React, { useEffect, useState } from "react";
import TaskList from "../components/Tasks/TaskList";
import { BASE_URL } from "../config";

const Tasks = () => {
  const [userData, setUserData] = useState(null);
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("Open");
  const [refreshTasks, setRefreshTasks] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${BASE_URL}/user/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setUserData(data.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/task/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: taskDescription,
          status: taskStatus,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add task");
      }

      const result = await res.json();
      console.log("Task added:", result);

      setTaskDescription("");
      setRefreshTasks(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div class="flex flex-col px-[0px] lg:flex-row">
      <div class="lg:w-1/6 w-full lg:h-screen bg-[#fafafa]   top-0 mb-5 p-4">
        <h1 className="lg:text-lg mt-8 mx-0 border-b  pl-4 md:text-lg ">
          Welcome {userData?.username}{" "}
        </h1>
      </div>
      <div className="w-full">
        <div className=" mt-[-50px] mx-10  lg:mt-0 grid grid-col-4 mb-[50px] sm:justify-between gap-12">
          <div className="addtask lg:mx-[-25px]  md:mx-0 px-0  mx-[-40px] ">
            {" "}
            <form onSubmit={handleAddTask}>
              <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="flex flex-col rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200  "
                name="task"
                placeholder="Add your task"
              />
              <div className=" flex flex-col">
                <button
                  type="submit"
                  class="rounded-lg relative ml-8 w-36 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                >
                  <span class="text-[#fafafa] font-semibold ml-8 transform group-hover:translate-x-20 transition-all duration-300">
                    Add Task
                  </span>
                  <span class="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
                    <svg
                      class="svg w-8 text-white"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="12" x2="12" y1="5" y2="19"></line>
                      <line x1="5" x2="19" y1="12" y2="12"></line>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="sm:pr-[220px]   lg:mx-[-25px] lg:-mr-19  md:pr-[px] mt-[-60px]  sm:mx-18  ">
            <ul className="grid grid-cols-4 gap-5 justify-between text-white font-bold rounded-md shadow-sm items-center mx-[48px] px-10 bg-[#22C55E]  w-full p-4   ">
              <li>
                <h5>#</h5>
              </li>
              <li className="mx-[-10px]">
                <h5>Task</h5>
              </li>
              <li className=" mx-1">
                <h5>Status</h5>
              </li>
              <li className=" mx-[60px] ">
                <h5>Action</h5>
              </li>
            </ul>
          </div>
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-0 px-4 sm:px-7 lg:px-0">
            <TaskList
              refreshTasks={refreshTasks}
              setRefreshTasks={setRefreshTasks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
