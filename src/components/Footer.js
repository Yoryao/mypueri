import React, { Fragment, useState } from "react";

const Footer = () => {
  
  const [footerColor, setFooterColor] = useState(false);
  const [color, setColor] = useState("");

  const cambiarColor = () => {
    console.log("Cambiar Color fx");
    setFooterColor(!footerColor);
    {footerColor ? setColor("Blanco") : setColor("Negro") }
  };

  return (
    <Fragment>
      <h3>
        Soy el Footer color: {color}
      </h3>
      <button onClick={cambiarColor}>Cambiar Color</button>
    </Fragment>
  );
};

export default Footer;
