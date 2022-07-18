import React, { useState } from "react";

const Controlado = () => {
  const [consulta, setConsulta] = useState({
    nombre: "",
    apellido: "",
    bebe: "",
    servicio: ""
    
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Procesando");
    console.log(consulta);
  };

  return (
    <form id="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control width:50px mb-2 m-8"
        placeholder="Ingresa Tu Nombre"
        name="nombre"
        onChange={e => setConsulta({nombre: e.target.value})}
      />

      <input
        type="text"
        className="form-control width:50px mb-2 m-8"
        placeholder="Ingresa Tu Apellido"
        name="apellido"
        onChange={e => setConsulta({apellido: e.target.value})}

      />
      <input
        type="text"
        className="form-control width:50px mb-2 m-8"
        placeholder="Ingresa El nombre de tu bebe"
        name="bebe"
        onChange={e => setConsulta({bebe: e.target.value})}

      />
      <select className="form-control mn-10" name="servicios">
        <option value="lactancia">Lactancia</option>
        <option value="prenatal">PreNatal</option>
      </select>

      <button type="submit" className="btn btn-danger">
        Enviar
      </button>
    </form>
  );
};

export default Controlado;
