import React from "react";
import { p } from "../utils/assets";

const Profile = () => {
  return (
    <section className="w-full h-[600px] mb-[50px]">
      <div className="w-full h-full mt-[100px] flex flex-col justify-center items-center bg-white rounded-3xl gap-[50px]">
        <h1 className="text-center mt-[40px] font-bold text-6xl leading-[1.1] ">
          Entwickelt mit <br />
          Psychotherapeuten, Breath Coaches <br />
          und Ingenieuren.
        </h1>
        <p className="text-xl text-slate-500 ">
          Inspiriert von über 1.000 Studien zu Stress, Ängsten und
          Schlaftherapie.
        </p>

        <div className="w-[200px] h-[80px] flex justify-center bg-pink-600">
          <img className="w-full h-full object-cover object-center" src={p} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Profile;
