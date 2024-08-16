import React from "react";

const CasosEstudio = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 px-2">
      <div className="heading-block flex flex-col justify-center items-center mb-16">
        <span className="rounded-full bg-secundario text-principal font-semibold px-4 py-2 mb-4">
          #RESTAURANTEROSALMANDO
        </span>
        <h2 className="title2-tw text-center">
          Trusted By Over 5,000+ <br /> GYM OWNERS ALL <br /> OVER THE WORLD
        </h2>
      </div>
      <div className="content grid grid-cols-1 md:grid-cols-2 gap-16 w-[90%]">
        <div className="w-full flex flex-col items-start gap-4 p-8 bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
          <img
            className=" w-full object-contain"
            src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/649c99bff8de9f73cec2b5c5_Videos.png"
            alt=""
          />
          <h2 className="title2-tw">Historias Inspiradoras</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            in minus ipsa nulla quia similique praesentium nesciunt nemo.
            Provident optio eius beatae harum neque reiciendis et ducimus
            labore, quaerat quas.
          </p>
          <button className="button-small">View Stories</button>
        </div>
        <div className="w-full flex flex-col items-start gap-4 justify-start p-8 bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
          <img
            className=" w-full object-contain"
            src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/649c99bf1948a130a34f7abb_Wins.png"
            alt=""
          />
          <h2 className="title2-tw">Historias Inspiradoras</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            in minus ipsa nulla quia similique praesentium nesciunt nemo.
            Provident optio eius beatae harum neque reiciendis et ducimus
            labore, quaerat quas.
          </p>
          <button className="button-small">View Stories</button>
        </div>
        <div className="w-full md:col-span-2 relative">
          <div className="w-full bg-[#fbfbfad9] border-[1px] border-[#e5e5e5] rounded-[1.2em]">
            <div className="w-full relative p-16 flex items-start justify-start flex-col overflow-hidden perspective">
              <div className="content-text flex flex-col justify-center items-start gap-6">
                <h2 className="title2-tw">
                  Gym Launch HELPS <br /> Build A New 7-Figure <br /> Gym Every
                  21 Days
                </h2>
                <p className="max-w-[24.5em]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore in minus ipsa nulla quia similique praesentium
                  nesciunt nemo. Provident optio eius beatae harum neque
                  reiciendis et ducimus labore, quaerat quas.
                </p>
                <button className="button-small">View Stories</button>
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
  );
};

export default CasosEstudio;
