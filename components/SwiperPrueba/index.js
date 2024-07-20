import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Banner.module.css"; // Importa los estilos CSS
import React from "react";
// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MySwiper = () => {
  return (
    <div className={styles.sectionHero}>
      <div className={styles.content}>
        <div className={styles.blockHero}>
          <div className={styles.subtitle}>DUEÑOS RESTAURANTEROS</div>
          <h1 className="inline-block text-white text-[30px] md:text-[100px] font-bold px-4 py-2 w-full text-center">
            ¿QUIERES MÁS <br /> CLIENTES?
          </h1>

          <div
            className={`${styles.largeText} ${styles.home} ${styles.mobile}`}
          >
            Obtener más clientes puede ser difícil. Nosotros lo hacemos fácil.
            Accede a nuestra clase maestra GRATUITA "Llena tu gimnasio en 90
            días" a continuación.
            <br />
          </div>
          <div
            className={`${styles.largeText} ${styles.home} ${styles.desktop}`}
          >
            Descarga el estudio de 33 restaurantes que están ARRASANDO en 2024 y
            descubre los 7 Modelos de Éxito que siguieron para construir
            restaurantes increíblemente lucrativos
            <br />
          </div>
          <a href="#" className={`${styles.button4} w-button`}>
            YES! SHOW ME HOW!
          </a>
        </div>
      </div>
      <div className={styles.blueGradientHero}></div>
    </div>
  );
};

export default MySwiper;
