import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Banner.module.css"; // Importa los estilos CSS
import React from "react";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const MySwiper = () => {
  return (
    <div className={styles.sectionHero}>
      <div className={styles.content}>
        <div className={styles["block-hero"]}>
          <div className={styles.subtitle}>DUEÑOS RESTAURANTEROS</div>
          <h1 className={`${styles["heading-13"]} ${styles.desktop}`}>
            ¿QUIERES MÁS <br /> CLIENTES? <br />
          </h1>
          <h1 className={`${styles["heading-13"]} ${styles.mobile}`}>
            ¿QUIERES MÁS <br /> CLIENTES? <br />
          </h1>

          <div className={`${styles.largeText} ${styles.mobile}`}>
            Conseguir más clientes puede ser difícil. Nosotros lo hacemos fácil.
            Accede a nuestra master class GRATUITA "Llena tu restaurante en 90
            días"
            <br />
          </div>
          <div className={`${styles.largeText} ${styles.desktop}`}>
            Descarga el estudio de 33 restaurantes que están TRIUNFANDO A LO
            GRANDE en 2024 y <br />
            descubre los 7 Modelos de Éxito que siguieron para construir
            Restaurantes con Ganancias Descomunales
            <br />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/reserva">
              <button className={styles.button4}>Si! Muéstrame!</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.blueGradientHero}></div>
    </div>
  );
};

export default MySwiper;
