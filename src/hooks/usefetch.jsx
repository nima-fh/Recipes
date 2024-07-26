import { useState, useEffect } from "react";

const Usefetch = (url) => {
  const [data, setdata] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setdata(json);
      } catch (err) {
        setError(err.message);
      }

      setIsloading(false);
    };
    fetchData();
  }, [url]);
  return { data, isloading, error };
};
export default Usefetch;
