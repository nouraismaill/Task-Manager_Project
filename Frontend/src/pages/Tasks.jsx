import React, { useEffect, useState } from "react";
import { BASE_URL } from "../config";

const Tasks = () => {
  const [userData, setUserData] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage

        const res = await fetch(`${BASE_URL}/user/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Attach token in request
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setUserData(data.user); // Store user data in state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading once the data is fetched
      }
    };

    fetchUserData(); // Call the function to fetch user data
  }, []); // Empty dependency array means this will run once when component mounts

  if (loading) return <div>Loading...</div>; // Show loading state
  if (error) return <div>Error: {error}</div>; // Show error state

  return (
    <div>
      <h1 className="text-lg mt-8 mx-8 border-b-gray-300">
        Welcome {userData?.username} {/* Display username from fetched data */}
      </h1>
    </div>
  );
};

export default Tasks;
