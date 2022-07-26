import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const Post = () => {
  let params = useParams();

  const { data, error, loading } = useFetch(`
    https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (loading) {
    return <h2>CARGANDO</h2>;
  }

  if (error !== "") {
    return <h2>Error: {error} </h2>;
  }

  return (
    <>
      
        <h3 key={data.id}>
          {data.body}
        </h3>
      
    </>
  );
};

export default Post;
