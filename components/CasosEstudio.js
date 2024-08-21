import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
const CasosEstudio = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Ajustes para la rotación basados en la posición del mouse
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);
  const rotateZ = useTransform(x, [-50, 50], [-10, 10]);

  // Ajustes para la traslación y el escalado
  const translateX = useTransform(x, [-50, 50], [-3, 3]);
  const translateY = useTransform(y, [-50, 50], [-2, 2]);
  const scale = useTransform(x, [-50, 50], [1, 1.05]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;

    x.set(mouseX / 10); // Ajusta el divisor para controlar la sensibilidad
    y.set(mouseY / 10);
  };
  return (
    <div className="flex flex-col items-center justify-center py-5 px-2">
      <div className="heading-block flex flex-col justify-center items-center mb-16">
        <span className="rounded-full bg-secundario text-principal font-semibold px-4 py-2 mb-4">
          #RESTAURANTEROSEXITOSOS
        </span>
        <h2 className="title2-tw text-center uppercase">
          Con la confianza de más de
          <br /> 5,000+ RESTAURANTEROS <br /> ALREDEDOR <br /> DEL MUNDO
        </h2>
      </div>
      <div className="w-[100%] max-w-[1085px] flex flex-col justify-center items-center">
        <div className="content grid grid-cols-1 md:grid-cols-2 gap-8 px-[20px]">
          <div className="w-full flex flex-col items-start gap-4 p-8 bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
            <img
              className=" w-full object-contain"
              src="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/seccion1/649c99bff8de9f73cec2b5c5_Videos+copy.png"
              alt=""
            />
            <h2 className="title3-tw">Historias Inspiradoras</h2>
            <p className="parrafo-tw paragraph-feature">
              Inspírate con una colección de historias inspiradoras sobre
              restauranteros que superaron desafíos únicos y obstáculos para
              construir restaurantes generadores de dinero.
            </p>
            <button className="button-small">Ver Historias</button>
          </div>
          <div className="w-full flex flex-col items-start gap-4 justify-start p-8 bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
            <img
              className=" w-full object-contain"
              src="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/seccion1/649c99bf1948a130a34f7abb_Wins+copy.png"
              alt=""
            />
            <h2 className="title3-tw">Historias Inspiradoras</h2>
            <p className="parrafo-tw paragraph-feature">
              Explora nuestra colección en constante actualización de
              restauranteros celebrando desde pequeños logros hasta ganancias
              extraordinarias.
            </p>
            <button className="button-small">VER CLIENTES EXITÓSOS</button>
          </div>
          <div
            className="w-full md:col-span-2 relative"
            onMouseMove={handleMouseMove}
          >
            <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
              <div className="w-full relative p-8 md:p-16 flex items-start justify-start flex-col overflow-hidden perspective">
                <div className="z-20 relative content-text flex flex-col justify-center items-start gap-6">
                  <h2 className="title3-tw">
                    Impulso Restaurantero AYUDA <br /> A Construir Un Nuevo{" "}
                    <br />
                    Restaurante de 7 Cifras <br /> Cada 21 Días
                  </h2>
                  <p className="max-w-[24.5em] parrafo-tw paragraph-feature">
                    Descubre lo que otros restauranteros alrededor del mundo
                    tienen que decir sobre trabajar con Impulso Restaurantero y
                    los resultados que han logrado en el camino.
                  </p>
                  <button className="button-small">VER CASOS DE ESTUDIO</button>
                </div>
                <motion.img
                  style={{
                    transformStyle: "preserve-3d",
                    translateX: translateX,
                    translateY: translateY,
                    scale: scale,
                    rotateX: rotateX,
                    rotateY: rotateY,
                    rotateZ: rotateZ,
                  }}
                  className="z-10 rounded-[1.2em] w-[70%] absolute top-auto -right-[23%] -bottom-[23%] left-auto"
                  src="https://imagenesrutalab.s3.amazonaws.com/impulsoRestaurantero/seccion1/group-friends-eating-restaurant_23-2148006617.jpg"
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

export default CasosEstudio;
