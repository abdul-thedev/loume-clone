import React from "react";
import { c, ha, re } from "../utils/assets";

const Resie = () => {
  return (
    <section className="w-full h-screen mt-[150px] flex gap-[16px] justify-between mb-[100px]">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-full h-full object-cover object-center rounded-3xl"
          src={re}
          alt=""
        />
      </div>
      <div className="w-full h-full flex flex-col gap-[16px] text-center justify-center items-center">
        <p className="text-md uppercase text-slate-500">Smarte Schlafanalyse</p>
        <h1 className="text-5xl font-bold">
          Verfolge deine <br /> Reise zu besserem <br /> Schlaf.
        </h1>
        <img className="w-[350px] mt-[16px]" src={c} alt="" />
        <p className="text-2xl mt-[8px] text-slate-500">
          Mit deinem Schlaftagebuch behältst du jede Nacht im Blick <br /> und siehst,
          wie sich dein Schlaf über Tage und Wochen <br /> verbessert. So kannst du
          deinen Fortschritt nachvollziehen <br /> und motiviert dranbleiben.
        </p>
      </div>
    </section>
  );
};

export default Resie;
