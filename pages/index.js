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
          <div className="flex flex-col items-center justify-center py-16 px-2">
            <div className="heading-block flex flex-col justify-center items-center mb-16">
              <span className="rounded-full bg-secundario text-principal font-semibold px-4 py-2 mb-4">
                #GYMOWNERSRULE
              </span>
              <h2 className="title2-tw text-center uppercase">
                READY TO START GETTING <br /> A torrential DOWNPOUR <br /> OF
                NEW MEMBERS?
              </h2>
            </div>
            <div className="max-w-[1085px] mx-auto w-full">
              <div className="grid gap-16 w-full">
                <div className="w-full md:col-span-2 relative">
                  <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
                    <div className="w-full relative py-24 px-16 flex items-start justify-start flex-col overflow-hidden perspective">
                      <div className="content-text flex flex-col justify-center items-start gap-6">
                        <h2 className="title3-tw uppercase">
                          How to start a gym series
                        </h2>
                        <p className="max-w-[24.5em] parrafo-tw">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore in minus ipsa nulla quia similique
                          praesentium nesciunt nemo. Provident optio eius beatae
                          harum neque reiciendis et ducimus labore, quaerat
                          quas.
                        </p>
                        <button className="button-small font-bold">
                          WATCH NOW
                        </button>
                      </div>
                      <img
                        className="rounded-[1.2em] w-[80%] absolute top-auto -right-[23%] -bottom-[23%] left-auto"
                        src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/646e4a6b854fc904b849c6cb_Gymlord.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-span-2 relative">
                  <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
                    <div className="w-full relative py-24 px-16 flex items-start justify-start flex-col overflow-hidden perspective">
                      <div className="content-text flex flex-col justify-center items-start gap-6">
                        <h2 className="title3-tw uppercase">7 Money Models</h2>
                        <p className="max-w-[24.5em] parrafo-tw">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore in minus ipsa nulla quia similique
                          praesentium nesciunt nemo. Provident optio eius beatae
                          harum neque reiciendis et ducimus labore, quaerat
                          quas.
                        </p>
                        <button className="button-small font-bold">
                          DOWNLOAD NOW
                        </button>
                      </div>
                      <img
                        className="rounded-[1.2em] w-[80%] absolute top-auto -right-[23%] -bottom-[23%] left-auto"
                        src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/646e4a6b854fc904b849c6cb_Gymlord.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-span-2 relative">
                  <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
                    <div className="w-full relative py-24 px-16 flex items-start justify-start flex-col overflow-hidden perspective">
                      <div className="content-text flex flex-col justify-center items-start gap-6">
                        <h2 className="title3-tw uppercase">
                          30-MINUTE GYM ADS
                        </h2>
                        <p className="max-w-[24.5em] parrafo-tw">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore in minus ipsa nulla quia similique
                          praesentium nesciunt nemo. Provident optio eius beatae
                          harum neque reiciendis et ducimus labore, quaerat
                          quas.
                        </p>
                        <button className="button-small font-bold">
                          ACCESS NOW
                        </button>
                      </div>
                      <img
                        className="rounded-[1.2em] w-[80%] absolute top-auto -right-[23%] -bottom-[23%] left-auto"
                        src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/646e4a6b854fc904b849c6cb_Gymlord.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:col-span-2 relative">
                  <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
                    <div className="w-full relative py-24 px-16 flex items-start justify-start flex-col overflow-hidden perspective">
                      <div className="content-text flex flex-col justify-center items-start gap-6">
                        <h2 className="title3-tw uppercase">
                          GYM LAUNCH SECRETS
                        </h2>
                        <p className="max-w-[24.5em] parrafo-tw">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore in minus ipsa nulla quia similique
                          praesentium nesciunt nemo. Provident optio eius beatae
                          harum neque reiciendis et ducimus labore, quaerat
                          quas.
                        </p>
                        <button className="button-small font-bold">
                          CLAIM MY BOOK
                        </button>
                      </div>
                      <img
                        className="rounded-[1.2em] w-[80%] absolute top-auto -right-[23%] -bottom-[23%] left-auto"
                        src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/646e4a6b854fc904b849c6cb_Gymlord.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/63e70098b6df3b5c44eb2d7a_Real_Gym_Owners.webp')",
              backgroundPosition: "50%",
              backgroundSize: "auto",
            }}
            className="px-8 flex flex-col items-center justify-center md:pt-[240px] pb-[58px] md:pb-[126px] px-2"
          >
            <div className="max-w-[500px] mx-auto heading-block flex flex-col justify-center items-center mb-16">
              <img
                className="flex md:hidden"
                src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/63e7ec27bc6a9ab674a69fa1_Mobile_Gym_Owners.webp"
                loading="lazy"
                alt=""
              />
              <h2 className="title2-tw text-center uppercase mb-4">
                REAL RESULTS <br /> FROM REAL <br /> GYM OWNERS
              </h2>
              <p className="parrafo-tw text-center mb-4">
                Gym Launch has helped 5,000+ Gym Owners build wildly profitable
                gyms, The only question is, will yours be next?
              </p>
              <button className="button4 font-bold">LEARN HOW WE DO IT</button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-16 px-2">
            <div className="heading-block flex flex-col justify-center items-center mb-16">
              <span className="rounded-full bg-secundario text-principal font-semibold px-4 py-2 mb-4">
                THE TOP 1%
              </span>
              <h2 className="title2-tw text-center uppercase">
                6 REASONS WHY <br />
                GYM LORDS ARE SUCCESSFUL
              </h2>
            </div>
            <div className="max-w-[1050px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                  <span className="inline-block p-4 rounded text-white bg-principal">
                    1
                  </span>
                  <h1 className="text-[12px] md:text-[18px] font-bold">
                    Masters of Action
                  </h1>
                  <p className="parrafo-tw">
                    Gym Lords know that not making a decision is a decision.
                    They take immediate action on their goals. They know that an
                    imperfect plan executed today is better than a perfect plan
                    executed next week.
                  </p>
                </div>
                <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                  <span className="inline-block p-4 rounded text-white bg-principal">
                    2
                  </span>
                  <h1 className="text-[12px] md:text-[18px] font-bold">
                    Masters of Action
                  </h1>
                  <p className="parrafo-tw">
                    Gym Lords know that not making a decision is a decision.
                    They take immediate action on their goals. They know that an
                    imperfect plan executed today is better than a perfect plan
                    executed next week.
                  </p>
                </div>
                <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                  <span className="inline-block p-4 rounded text-white bg-principal">
                    3
                  </span>
                  <h1 className="text-[12px] md:text-[18px] font-bold">
                    Masters of Action
                  </h1>
                  <p className="parrafo-tw">
                    Gym Lords know that not making a decision is a decision.
                    They take immediate action on their goals. They know that an
                    imperfect plan executed today is better than a perfect plan
                    executed next week.
                  </p>
                </div>
                <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                  <span className="inline-block p-4 rounded text-white bg-principal">
                    4
                  </span>
                  <h1 className="text-[12px] md:text-[18px] font-bold">
                    Masters of Action
                  </h1>
                  <p className="parrafo-tw">
                    Gym Lords know that not making a decision is a decision.
                    They take immediate action on their goals. They know that an
                    imperfect plan executed today is better than a perfect plan
                    executed next week.
                  </p>
                </div>
                <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                  <span className="inline-block p-4 rounded text-white bg-principal">
                    5
                  </span>
                  <h1 className="text-[12px] md:text-[18px] font-bold">
                    Masters of Action
                  </h1>
                  <p className="parrafo-tw">
                    Gym Lords know that not making a decision is a decision.
                    They take immediate action on their goals. They know that an
                    imperfect plan executed today is better than a perfect plan
                    executed next week.
                  </p>
                </div>
                <div className="bg-gray-100 flex flex-col gap-3 items-start p-6 md:p-8">
                  <span className="inline-block p-4 rounded text-white bg-principal">
                    6
                  </span>
                  <h1 className="text-[12px] md:text-[18px] font-bold">
                    Masters of Action
                  </h1>
                  <p className="parrafo-tw">
                    Gym Lords know that not making a decision is a decision.
                    They take immediate action on their goals. They know that an
                    imperfect plan executed today is better than a perfect plan
                    executed next week.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-16 px-2 w-full">
            <div className="max-w-[1050px] mx-auto bg-black w-full rounded-3xl py-8 overflow-hidden">
              <div className="heading-block w-full flex flex-col justify-center items-center mb-16">
                <span className="rounded-full bg-secundario text-white font-semibold px-4 py-2 mb-4">
                  FREE DOWNLOAD
                </span>
                <h2 className="title3-tw text-center uppercase text-white">
                  7 MONEY MODELS WE USE <br />
                  TO SCALE GYMS PAST <br />
                  $100K/MO LIKE CLOCKWORK
                </h2>
                <p className="my-4 text-white">
                  Get the BEST models for building a wildly profitable gym in
                  2024, <br /> plus 33 case studies of gyms that scaled using
                  them.
                </p>
                <button className="button4 font-bold">
                  YES! GET INSTANT ACCESS
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
