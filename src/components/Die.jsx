import React from "react";
import { a, g } from "../utils/assets";

const Die = () => {
  return (
    <section className="w-full h-[400px] flex gap-[50px] mt-[180px]">
      <div className="w-full flex flex-col  gap-[30px]">
        <p className="text-xl text-slate-600">Die app für besseren schlaf</p>
        <h1 className="font-bold text-6xl">
          Die Loume App begleitet <br /> dich jede Nacht.
        </h1>
        <div className=" flex flex-col gap-[16px]">
          <div className="w-[150px] h-[50px] flex gap-[16px]">
            <img
              className="w-full h-full object-cover object-center"
              src={g}
              alt=""
            />
            <img
              className="w-full h-full object-cover object-center rounded-lg"
              src={a}
              alt=""
            />
          </div>

          <div>
            <p className="text-sm">
              Die kostenfreie App erhältst du mit Auslieferung deines Loume
              Device.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-xl mt-[100px] text-slate-600">
          Die kostenfreie Loume App ergänzt dein Device mit <br /> vielfältigen
          Einschlafhilfen wie Meditationen und <br /> Klangwelten und steuert
          alle Funktionen – für ein <br />
          rundum beruhigendes Schlaferlebnis.
        </p>
      </div>
    </section>
  );
};

export default Die;
