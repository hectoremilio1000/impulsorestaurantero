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
          <div>
            <MySwiper />

            <div className="flex justify-center -mt-10">
              <div className="bg-black text-white text-center py-10 px-6 rounded-lg mt-10 w-11/12 md:w-2/3 lg:w-11/12 -mt-20 z-20">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                  TWO DAYS TO CHANGE YOUR GYM FOREVER.
                </h2>
                <p className="text-lg md:text-xl mb-2">
                  GYM GROWTH WORKSHOP - OCT 8-9TH
                </p>
                <p className="text-yellow-600 font-bold text-base md:text-lg">
                  DON'T MISS OUT. FIRST 100 GYM OWNERS ONLY
                </p>
                <div className="flex justify-center items-center space-x-6 mt-6">
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
        </>
      ) : (
        <></>
      )}

      <QuickInfo />
      <Slider />
      <Calendario />
      {espa ? (
        <>
          <div className="overflow-hidden bg-black">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                TESTIMONIO
              </h1>
              <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                TESTIMONIO
              </h1>
            </div>
          </div>
          <div className="bg-black py-[50px]">
            <QuickInfo5 idioma={espa} />
          </div>
        </>
      ) : (
        <>
          <div className="overflow-hidden bg-black">
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h1 className="inline-block animate-marqueeleft text-white text-[70px] md:text-[100px] font-bold  w-full">
                TESTIMONIALS
              </h1>
              <h1 className="animate-marqueeleft inline-block text-[#3eeb91] text-[70px] md:text-[100px] font-bold  ">
                TESTIMONIALS
              </h1>
            </div>
          </div>
          <div className="bg-black py-[50px]">
            <QuickInfo5 idioma={espa} />
          </div>
        </>
      )}
      {/* <QuickInfo4 /> */}
      <Encontramos />
    </div>
  );
}
