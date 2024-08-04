import { useState, useEffect } from "react";
import { json } from "react-router-dom";

const Usefetch = (url, method = "GET") => {
  const [data, setdata] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      Headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const fetchData = async (fetchoptions) => {
      setIsloading(true);
      try {
        const response = await fetch(url, { ...fetchoptions });
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
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }
  }, [url, method, options]);
  return { data, isloading, error, postData };
};
export default Usefetch;
