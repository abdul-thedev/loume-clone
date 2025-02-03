import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-[500px]">
      <div className="w-full h-full flex flex-col justify-center items-center gap-[50px] ">
        <p className="text-slate-700 text-lg">Wie kann Loume dir helfen?</p>
        <h1 className="text-center font-bold text-6xl leading-[1.2]">
          Goodbye Gedankenkreisen, <br />
          Hello Schlafroutine.
        </h1>
        <p className="text-center text-slate-600 text-2xl">
          Guter Schlaf ist der Motor für Energie am Tag. Loume kann dich dabei
          unterstützen, deinen <br /> Tag positiv abzuschließen, schneller
          einzuschlafen und ausgeruhter aufzuwachen.
        </p>
      </div>
    </section>
  );
};

export default Hero;
