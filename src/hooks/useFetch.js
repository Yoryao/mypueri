import { useEffect, useState } from "react";

import React from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setError("Error de Servidor"))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
