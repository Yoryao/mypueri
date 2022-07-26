import { Link } from "react-router-dom"
import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {

    const {data, error, loading } = useFetch("https://jsonplaceholder.typicode.com/posts")

    if(loading){
        return <h2>CARGANDO</h2>
    }

    if(error !== ""){
        return <h2>Error: {error} </h2>
     }

    
    return (
        <>
           {
                data.map(item => (

                    <Link to={`/blog/${item.id}`}>

                        <h3 key={item.id}> {item.id} : {item.title}</h3>
                        </Link>
                   ))
            }
        
        </>

        
    );
}

export default Blog