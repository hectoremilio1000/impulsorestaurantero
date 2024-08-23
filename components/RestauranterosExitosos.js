import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

const RestauranterosExitosos = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(0);
  const translateY = useMotionValue(0);
  const translateX = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const zSpring = useSpring(z);
  const txSpring = useSpring(translateX);
  const tySpring = useSpring(translateY);

  // const transform = useMotionTemplate`translate3d(${txSpring}%, ${tySpring}em, 0px) scale3d(1, 1, 1) rotateX(${xSpring}deg) rotateY(${ySpring}deg) rotateZ(${zSpring}deg)`;
  const transform = useMotionTemplate`translate3d(${translateX}%, ${translateY}em, 0px) scale3d(1, 1, 1) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;
    const trx = 3;
    const trsy = 3;
    const rotateX = 15;
    const rotateY = -25;
    const rotateZ = 15;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = rotateX - mouseY * 0.008;
    const rY = rotateY + ((mouseX / width) * 100) / 10;
    const rZ = rotateZ - (mouseX / width) * 5;
    const tX = trx - (mouseX / width) * 2 * 3;
    const tY = trsy - (mouseY / height) * 2 * 3;
    translateX.set(tX);
    translateY.set(tY);
    x.set(rX);
    y.set(rY);
    z.set(rZ);
  };

  const handleMouseLeave = () => {
    x.set(15);
    y.set(-25);
    z.set(15);
  };
  const handleScroll = (e) => {
    console.log(e);
    translateY.set(50);
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-2"
      ref={ref}
      onMouseMove={handleMouseMove}
    >
      <div className="heading-block flex flex-col justify-center items-center mb-16">
        <span className="rounded-full bg-secundario text-principal font-semibold px-4 py-2 mb-4">
          #RESTAURANTEROSEXITOSOS
        </span>
        <h2 className="title2-tw text-center uppercase">
          ¿Listo para empezar a recibir <br />
          a millones <br />
          de nuevos clientes?
        </h2>
      </div>
      <div className="max-w-[1085px] mx-auto w-full">
        <div className="grid gap-16 w-full">
          <div className="w-full md:col-span-2 relative">
            <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
              <div className="w-full relative py-24 px-16 flex items-start justify-start flex-col overflow-hidden perspective">
                <div className="content-text flex flex-col justify-center items-start gap-6">
                  <h2 className="title3-tw uppercase">
                    Cómo Iniciar un Restaurante
                  </h2>
                  <p className="max-w-[24.5em] parrafo-tw paragraph-feature">
                    Es tu guía esencial para convertirte en dueño de un
                    restaurante exitoso. Desde la elección del tipo de
                    restaurante y ubicación hasta comprender las complejidades
                    de los arrendamientos. Además, descubre cómo evitar los
                    errores comunes que pueden afectar tu emprendimiento
                    gastronómico.
                  </p>
                  <button className="button-small font-bold">LEER AHORA</button>
                </div>
                <motion.img
                  style={{
                    transformStyle: "preserve-3d",
                    transform,
                  }}
                  className="rounded-[1.2em] w-[60%] absolute top-auto -right-[15%] -bottom-[23%] left-auto"
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
                    7 Modelos de Ingresos <br /> para Restaurantes
                  </h2>
                  <p className="max-w-[24.5em] parrafo-tw paragraph-feature">
                    ¿Quieres hacer crecer tu restaurante o bar y generar más de
                    $100,000 al mes? Descarga nuestro PDF gratuito con los 7
                    Modelos de Ingresos y accede a una capacitación en video
                    aquí.
                  </p>
                  <button className="button-small font-bold">VER AHORA</button>
                </div>
                <motion.img
                  style={{
                    transformStyle: "preserve-3d",
                    transform,
                  }}
                  className="rounded-[1.2em] w-[60%] absolute top-auto -right-[15%] -bottom-[23%] left-auto"
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
                    ANUNCIOS DE 30 MINUTOS <br /> PARA RESTAURANTES
                  </h2>
                  <p className="max-w-[24.5em] parrafo-tw paragraph-feature">
                    Los dueños de restaurantes consiguen 20-30 nuevos clientes
                    al mes con este plan de anuncios en Facebook "listo para
                    usar".
                  </p>
                  <button className="button-small font-bold">
                    PROBAR AHORA
                  </button>
                </div>
                <motion.img
                  style={{
                    transformStyle: "preserve-3d",
                    transform,
                  }}
                  className="rounded-[1.2em] w-[60%] absolute top-auto -right-[15%] -bottom-[23%] left-auto"
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
                    SECRETOS DE <br /> IMPULSO RESTAURANTERO
                  </h2>
                  <p className="max-w-[24.5em] parrafo-tw">
                    La guía paso a paso para que los dueños de restaurantes
                    aprendan a llegar a más clientes, transformar más vidas y
                    construir negocios sumamente rentables.
                  </p>
                  <button className="button-small font-bold">
                    SOLICITAR AHORA
                  </button>
                </div>
                <motion.img
                  style={{
                    transformStyle: "preserve-3d",
                    transform,
                  }}
                  className="rounded-[1.2em] w-[60%] absolute top-auto -right-[15%] -bottom-[23%] left-auto"
                  src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/646e4a6b854fc904b849c6cb_Gymlord.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestauranterosExitosos;
