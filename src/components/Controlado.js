import React, { useState } from "react";

const Controlado = () => {
  const [consulta, setConsulta] = useState({
    nombre: "",
    apellido: "",
    bebe: "",
    servicio: "",
    embarazada: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellido } = consulta;

    if (!nombre.trim() || !apellido.trim()) {
      setError(true);
      console.log(error);
      return;
    }

    setError(false);

    console.log("no hubo error!");
  };

  const PintarError = () => {
    return (
    <div className="alert alert-danger">LLENA LOS CAMPOS!</div>
    )
  };

  const handleChange = (e) => {
    setConsulta({
      ...consulta,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <>
<h1>Errores?</h1>
    
      {error && <PintarError />}

      
    <form id="formulario" onSubmit={handleSubmit}>

      <input
        type="text"
        className="form-control width:50px mb-2 m-8"
        placeholder="Ingresa Tu Nombre"
        name="nombre"
        onChange={handleChange}
        value={consulta.nombre}
      />
      <input
        type="text"
        className="form-control width:50px mb-2 m-8"
        placeholder="Ingresa Tu Apellido"
        name="apellido"
        onChange={handleChange}
        value={consulta.apellido}
      />
      <input
        type="text"
        className="form-control width:50px mb-2 m-8"
        placeholder="Ingresa El nombre de tu bebe"
        name="bebe"
        onChange={handleChange}
        value={consulta.bebe}
      />
      <select
        className="form-control mn-10"
        name="servicio"
        onChange={handleChange}
        value={consulta.servicio}
      >
        <option value="lactancia">Lactancia</option>
        <option value="prenatal">PreNatal</option>
      </select>

      <div className="input-group-text">
        <input
          className="form-check-input mt-0"
          type="checkbox"
          name="embarazada"
          checked={consulta.embarazada}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-danger">
        Enviar
      </button>
    </form>
    
</>
  );
};

export default Controlado;
