import { useState, useEffect } from "react";
const apiUrl = "https://marianoarias.soy/ruleta/backend/api";
import axios from "axios";

type Data = string;

function useFetch(url: Data) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const urlOk = apiUrl + url;
        const response = await axios.get(urlOk);
        const json = await response.data;
        setData(json);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
