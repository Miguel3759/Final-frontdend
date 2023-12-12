import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>Solucionamos los problemas de tu empresa creando increibles paginas web.</p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      ></img>
       <img
        className={styles.webImage}
        src={require("../assets/gruposwf.jpg")}
      ></img>
      <button type="submit"
      >Enviar
      </button>
    </div>
  );
};

export default Services;
