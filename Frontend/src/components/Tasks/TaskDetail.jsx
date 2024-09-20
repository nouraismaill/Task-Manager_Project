import React from "react";

const TaskDetail = ({ task }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-bold mb-2">{task.title}</h3>
      <p className="mb-4">{task.description}</p>
      <p className="text-gray-600">Status: {task.status}</p>
      <p className="text-gray-600">
        Created At: {new Date(task.createdAt).toLocaleDateString()}
      </p>
      <p className="text-gray-600">
        Last Updated: {new Date(task.updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TaskDetail;
