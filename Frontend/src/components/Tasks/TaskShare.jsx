import React, { useState } from "react";

function TaskShare({ onShare }) {
  const [email, setEmail] = useState("");

  const handleShare = (e) => {
    e.preventDefault();
    onShare(email);
    setEmail(""); // Clear the input field after sharing
  };

  return (
    <form className="task-share" onSubmit={handleShare}>
      <label>Share Task With:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="User Email"
        required
      />
      <button type="submit">Share Task</button>
    </form>
  );
}

export default TaskShare;
