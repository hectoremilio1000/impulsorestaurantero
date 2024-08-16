import React from "react";

const CasosEstudio = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 px-2">
      <div className="heading-block flex flex-col justify-center items-center mb-16">
        <span className="rounded-full bg-secundario text-principal font-semibold px-4 py-2 mb-4">
          #RESTAURANTEROSALMANDO
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
            <p className="parrafo-tw">
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
            <p className="parrafo-tw">
              Explora nuestra colección en constante actualización de
              restauranteros celebrando desde pequeños logros hasta ganancias
              extraordinarias.
            </p>
            <button className="button-small">VER CLIENTES EXITÓSOS</button>
          </div>
          <div className="w-full md:col-span-2 relative">
            <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
              <div className="w-full relative p-8 md:p-16 flex items-start justify-start flex-col overflow-hidden perspective">
                <div className="z-20 relative content-text flex flex-col justify-center items-start gap-6">
                  <h2 className="title3-tw">
                    Impulso Restaurantero AYUDA <br /> A Construir Un Nuevo
                    Restaurante de 7 Cifras <br /> Cada 21 Días
                  </h2>
                  <p className="max-w-[24.5em] parrafo-tw">
                    Descubre lo que otros restauranteros alrededor del mundo
                    tienen que decir sobre trabajar con Impulso Restaurantero y
                    los resultados que han logrado en el camino.
                  </p>
                  <button className="button-small">VER CASOS DE ESTUDIO</button>
                </div>
                <img
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
