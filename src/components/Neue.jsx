import React from "react";
import { ha, ne, ne1 } from "../utils/assets";

const Neue = () => {
  return (
    <section className="w-full h-screen mt-[150px] flex gap-[16px] justify-between mb-[100px]">
      <div className="w-full h-full flex flex-col gap-[16px] text-center justify-center items-center">
        <p className="text-md uppercase text-slate-500">Smarte Schlafanalyse</p>
        <h1 className="text-5xl font-bold">
          Deine neue <br /> Schlafroutine, so <br /> einfach wie noch nie.
        </h1>
        <p className="text-2xl mt-[16px] text-slate-500">
          Mit sanften Erinnerungen hilft dir Loume, eine entspannte <br />
          Schlafroutine zu entwickeln und beizubehalten. Sie motiviert <br />{" "}
          dich, dranzubleiben, und unterstützt dich dabei, jeden Abend <br />{" "}
          zur gleichen Zeit zur Ruhe zu kommen.
        </p>
        <img className="w-[350px] mt-[20px] " src={ne1} alt="" />
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-full h-full object-cover object-center rounded-3xl"
          src={ne}
          alt=""
        />
      </div>
    </section>
  );
};

export default Neue;
