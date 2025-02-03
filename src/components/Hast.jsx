import React from "react";
import { ha } from "../utils/assets";

const Hast = () => {
  return (
    <section className="w-full h-screen mt-[150px] flex gap-[16px] justify-between mb-[100px]">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-full h-full object-cover object-center rounded-3xl"
          src={ha}
          alt=""
        />
      </div>
      <div className="w-full h-full flex flex-col gap-[16px] text-center justify-center items-center">
        <p className="text-md uppercase text-slate-500">Smarte Schlafanalyse</p>
        <h1 className="text-5xl font-bold">
          Sieh, wie gut du <br /> geschlafen hast.
        </h1>
        <p className="text-2xl mt-[16px] text-slate-500">
          Verbunden mit deiner Smartwatch erfasst Loume deine <br />{" "}
          Schlafdaten, analysiert dein Schlafverhalten und gibt dir <br />{" "}
          wertvolle Tipps, um jede Nacht erholsamer zu schlafen. Du <br />{" "}
          kannst Loume selbstverständlich auch ohne Smartwatch in <br /> vollen Zügen
          nutzen.
        </p>
      </div>

      
    </section>
  );
};

export default Hast;
