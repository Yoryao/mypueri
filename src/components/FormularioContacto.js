import React, { useEffect, useState } from "react";

const FormularioContacto = () => {
  const initialState = {
    nombre: "",
    bebe: "",
    edad: "",
    telefono: "",
    mail: "",
  };

  const [consulta, setConsulta] = useState(initialState);
  const [pendientes, setPendientes] = useState([]);

  const { nombre, bebe, edad, telefono, mail } = consulta;

  useEffect(() => {
    sessionStorage.setItem("consultas", JSON.stringify(pendientes))
  
  }, [pendientes])
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setPendientes([...pendientes, consulta]);

    setConsulta(initialState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setConsulta((old) => ({
      ...old,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Formulario de Contacto</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingresa Tu Nombre"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control mb-2 "
          placeholder="Ingresa el nombre de tu bebe"
          name="bebe"
          value={bebe}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control mb-2 m-8"
          placeholder="Ingresa la edad de tu bebe"
          name="edad"
          value={edad}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control width:50px mb-2 m-8"
          placeholder="Ingresa tu telefono"
          name="telefono"
          value={telefono}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-control width:50px mb-2 m-8"
          placeholder="Ingresa tu mail"
          name="mail"
          value={mail}
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
    </>
  );
};

export default FormularioContacto;
