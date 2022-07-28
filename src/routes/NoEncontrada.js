import { Link } from "react-router-dom"
import React from 'react'

const NoEncontrada = () => {
  return (
    <>
        <h1>404</h1>
        <Link to="/" className="btn btn-success">VOLVER</Link>
    </>
  )
};

export default NoEncontrada;