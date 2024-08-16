import Head from "next/head";

import QuickInfo from "../components/Quickinfo/index";
import QuickInfo2 from "../components/QuickInfo2/index";
import QuickInfo3 from "../components/QuickInfo3/index";
import MenuDetail from "../components/MenuDetail";
import Promociones from "../components/Promociones";
// import videoPort from '../data/assets/portada.mp4'
import { useRouter } from "next/router";
import HeaderEn from "../components/Header-en/HeaderEn";
import HeaderEs from "../components/Header-es/Header-es";
import { useAppContext } from "../components/context/Context";
import Encontramos from "../components/Encontramos";
import * as fbq from "../lib/fpixel";
import Calendario from "../components/Calendario";
import QuickInfo4 from "../components/QuickInfo4";
import Slider from "../components/Sliders/Slider";
import Link from "next/link";
import NavBar from "../components/NavBarEs/NavBarEs";
import QuickInfo5 from "../components/QuickInfo5";
import MySwiper from "../components/SwiperPrueba";
import CasosEstudio from "../components/CasosEstudio";
import About from "../components/About";
// imagenes
const image1 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg";
const image2 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/nina2pinata.jpeg";
const image3 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg";
const image4 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/inicio/IMG_2048.jpg";

const image5 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/IMG_9585.jpg";
const image6 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mixologia+mexicana+tragos+increibles.jpg";
const image7 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/ninapinata.jpeg";
const image8 =
  "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/coctelDeliciosoMEzcal.jpg";
export default function Home() {
  const opts = {
    height: "350",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,  // Auto-play the video on load,
    },
  };
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const handleClick = () => {
    fbq.event("Reserva");
  };

  const router = useRouter();
  const { locale } = router;
  let HeaderComponent;
  const logo2 =
    "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/logo_page_altaNUEVO_blanco.png";

  const { ingles, espa } = useAppContext();

  return (
    <div>
      {espa ? (
        <Head>
          <title>Impulso Restaurantero</title>
          <link rel="icon" href="../favicon.ico" />
          <meta name="of:title" content="Impulso Restaurantero" />
          <meta
            name="of:description"
            content="Crecemos las ventas de tu restaurante"
          />
          <meta
            name="og:description"
            content="Crecemos las ventas de tu restaurante"
          />
          <meta
            property="og:url"
            content="https://www.impulsorestaurantero.com/"
          />
          <meta name="og:title" content="Impulso Restaurantero" />
          <meta property="og:type" content="Impulso Restaurantero" />
          <meta
            property="og:image"
            content="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/logo/logoSoloImpulsoRestaurantero.png"
          />
          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
        </Head>
      ) : (
        <Head>
          <title>Restaurant Boost</title>
          <link
            rel="alternate"
            hrefLang="en"
            href="https://www.impulsorestaurantero.com/"
          />
          <link
            rel="alternate"
            hrefLang="es"
            href="https://www.impulsorestaurantero.com/"
          />
          <link rel="icon" href="../favicon.ico" />
          <meta name="of:title" content="Restaurant Boost" />
          <meta
            name="of:description"
            content="We Grow Your Restaurant's Sales"
          />
          <meta
            name="og:description"
            content="We Grow Your Restaurant's Sales"
          />
          <meta
            property="og:url"
            content="https://www.impulsorestaurantero.com/"
          />
          <meta name="og:title" content="Restaurant Boost" />
          <meta property="og:type" content="Restaurant Boost" />
          <meta
            property="og:image"
            content="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/logo/logoSoloImpulsoRestaurantero.png"
          />
          <link rel="apple-touch-icon" href="../logo192.png" />
          <link rel="manifest" href="../manifest.json" />
        </Head>
      )}
      <NavBar />
      {espa ? (
        <>
          <MySwiper />
          <div
            id="section-info-banner"
            className="justify-center bg-black py-[11px]  w-full"
          >
            <div className="max-w-[90%] mx-auto flex-col md:flex-row flex overflow-hidden items-center">
              <div className="justify-center max-w-[100%] md:justify-start flex self-center items-center mx-auto">
                <a
                  href="http://ww2.gymlaunch.com/gymgrowth"
                  target="_blank"
                  className="inline-block"
                >
                  <h1 className="title3-tw text-principal mt-[4px] text-center md:text-start">
                    <span className="title3-tw">
                      DOS DÍAS PARA CAMBIAR TU RESTAURANTE PARA SIEMPRE
                    </span>{" "}
                    <br />
                    <span className="title3-tw text-[#fff]">
                      TALLER EN LÍNEA
                    </span>
                    <br />
                    <span className="span4-tw">
                      NO TE LO PIERDAS. PRIMEROS 15 DUEÑOS RESTAURANTEROS.
                    </span>
                  </h1>
                </a>
              </div>
              <div className="justify-center max-w-[100%] md:justify-start flex self-center items-center mx-auto">
                <a
                  href="http://ww2.gymlaunch.com/gymgrowth"
                  target="_blank"
                  className="inline-block"
                  data-cmp-ab="2"
                >
                  <img
                    src="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/banner/logoPalabrasFinalImpulsoTALLER.png"
                    loading="lazy"
                    width="217"
                    sizes="(max-width: 479px) 217px, (max-width: 991px) 26vw, (max-width: 1439px) 21vw, 217px"
                    alt=""
                    srcSet="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/banner/logoPalabrasFinalImpulsoTALLER.png 500w, https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/banner/logoPalabrasFinalImpulsoTALLER.png 770w"
                    className="image-8"
                    data-cmp-ab="2"
                    data-cmp-info="10"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="section-clientes" className="bg-white overflow-hidden">
            <div className="max-w-[90%] mx-auto bg-black rounded-b-[25px] flex items-center pt-[13px] pb-[18px] px-[30px]">
              <div className="flex w-[90%] gap-[20px]">
                <div
                  id="block-clientes"
                  className="overflow-hidden flex items-center relative justify-start"
                >
                  <div className="gradiente"></div>
                  <div className="clientes flex">
                    <img
                      src="https://logo.clearbit.com/yahoo.com"
                      alt="Yahoo Finance"
                      className="h-8 md:h-10"
                    />
                    <img
                      src="https://logo.clearbit.com/entrepreneur.com"
                      alt="Entrepreneur"
                      className="h-8 md:h-10"
                    />
                    <img
                      src="https://logo.clearbit.com/muscleandfitness.com"
                      alt="Muscle & Fitness"
                      className="h-8 md:h-10"
                    />
                    <img
                      src="https://logo.clearbit.com/facebook.com"
                      alt="Facebook"
                      className="h-8 md:h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CasosEstudio />
          <About />
          <div className="flex flex-col items-center justify-center py-5 px-2">
            <div className="heading-block flex flex-col justify-center items-center mb-16">
              <span className="rounded-full bg-secundario text-principal font-semibold px-4 py-2 mb-4">
                #GYMOWNERSRULE
              </span>
              <h2 className="title2-tw text-center uppercase">
                READY TO START GETTING <br /> A torrential DOWNPOUR <br /> OF
                NEW MEMBERS?
              </h2>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
