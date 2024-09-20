import React from "react";
import { Link } from "react-router-dom";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link> - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
