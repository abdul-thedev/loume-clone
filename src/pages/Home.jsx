import React from "react";
import Navbar from "../components/Navbar";
import { hero } from "../utils/assets";
import Hero from "../components/Hero";
import Vhero from "../components/Vhero";
import Text from "../components/Text";
import Bannder from "../components/Bannder";
import Profile from "../components/Profile";
import Die from "../components/Die";
import Loumeapp from "../components/Loumeapp";
import Hast from "../components/Hast";
import Neue from "../components/Neue";
import Resie from "../components/Resie";
import Tagan from "../components/Tagan";
import Hier from "../components/Hier";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="w-full h-screen p-[10px] relative">
        <div className="w-full h-full overflow-hidden rounded-3xl relative ">
          <video
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            src={hero}
          ></video>
        </div>
        <Navbar></Navbar>
      </section>

      <Hero></Hero>

      <Vhero></Vhero>
      <Text></Text>
      <Bannder></Bannder>
      <Profile></Profile>
      <Die></Die>
      <Loumeapp></Loumeapp>
      <Hast></Hast>
      <Neue></Neue>   
      <Resie></Resie>
      <Tagan></Tagan>
      <Hier></Hier>
      <Footer></Footer>
    </>
  );
};

export default Home;
