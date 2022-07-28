import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect } from "react";

import { useFetch } from "../hooks/useFetch";

const Blog = () => {
  let [searchParams, setSearchParams] = useSearchParams("");


  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <h2>CARGANDO</h2>;
  }

  if (error !== "") {
    return <h2>Error: {error} </h2>;
  }

  const handleChange = (e) => {
    let filtro = e.target.value;

    if (filtro) {
      setSearchParams({ filtro });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      <h1>BLOG</h1>

      <input
        className="form-control mb-2"
        type="text"
        value={searchParams.get("filtro") || ""}
        onChange={handleChange}
      />

      {data.filter((item) => {
        let filter = searchParams.get("filtro");
        if(!filter) return true;

        let title = item.title.toLowerCase();
        return title.includes(filter.toLowerCase());
        
      }).map((item) => (
        <Link to={`/blog/${item.id}`}>
          <h3 key={item.id}>
            {" "}
            {item.id} : {item.title}
          </h3>
        </Link>
      ))}
    </>
  );
};

export default Blog;
