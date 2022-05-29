import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json.data);
        setLoading(false);

        //vi sætter loading til false fordi vi har fået fetch allerede
      } catch (error) {
        setError(error);
        setLoading(false);
        //vi sætter loading til false fordi de kommer error, så vi får ingen fetch, ingen data
      }
    };
    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
