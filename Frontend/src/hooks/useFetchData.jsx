import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token"); // Get token from localStorage

        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request headers
          },
        });

        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message || "Failed to fetch");
        }

        setData(result.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
