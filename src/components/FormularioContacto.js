import React from "react";
import { useRef } from "react";

const FormularioContacto = () => {

        const formulario = useRef(null);

        const handleSubmit= e =>{
            e.preventDefault();
            console.log("procesando...")

            const datos = new FormData(formulario.current)

            const objetoDatos = Object.fromEntries([...datos.entries()]);

            const { nombre ,  apellido, bebe, servicio} = objetoDatos;
            console.log("Tu nombre:" + nombre)
            console.log("Tu apellido:" + apellido)
            console.log("Tu bebe:" + bebe)
            console.log("Tu servicio:" + servicio)




            
        }
        
    
  return (
    <>
        <h1>Formulario de Contacto</h1>
        
        <form id="formulario" ref={formulario} onSubmit={handleSubmit}>

            <input type="text" className="form-control width:50px mb-2 m-8" placeholder="Ingresa Tu Nombre" name="nombre" />
            <input type="text" className="form-control width:50px mb-2 m-8" placeholder="Ingresa Tu Apellido" name="apellido" />
            <input type="text" className="form-control width:50px mb-2 m-8" placeholder="Ingresa El nombre de tu bebe" name="bebe" />
{/*             
            <input type="text" className="form-control width:50px mb-2 m-8" placeholder="Ingresa su fecha de nacimiento" name="nacimiento"/> */}
            <select className="form-control mn-10" 
                    name="serviciossss" 
                    defaultValue="DEFAULTI">
                <option value="lactancia">Lactancia</option>
                <option value="prenatal">PreNatal</option>
            </select>

            <button type="submit" className="btn btn-danger">Enviar</button>

            
        </form>

       
    </>
  );
};

export default FormularioContacto;
