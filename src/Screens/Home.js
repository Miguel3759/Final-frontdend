import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
          Expande tu <br />
          <b>negocio</b>
        </p>
        <p>
          Con la mejor <br />
          <b>presencia online</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Pongase en contacto
        </Link>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Obtenga una cotizacion
        </Link>
      </div>
    </div>
  );
};

export default Home;
