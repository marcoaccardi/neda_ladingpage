import React from "react";
import Card from "./Card";

import anecoica from "../assets/logos/anecoica-logo.png";
import clhub from "../assets/logos/clhub_art-logo.png";
import funzionicontinue from "../assets/logos/funzioni_continue-logo.png";
import studiok from "../assets/logos/studiok-logo.png";
import sode from "../assets/logos/sode-logo2.jpg";

const Consortium = () => {
  return (
    <section className='consortium__container'>
      <h1>The Consortium</h1>
      <div className='cards__container'>
        <Card name='Anecoica' location='Berlin' logo={anecoica}></Card>
        <Card name='Clhub.art' location='Barcelona' logo={clhub}></Card>
        <Card name='Studio-K' location='Amsterdam' logo={studiok}></Card>
        <Card name='Sode' location='Lisbon' logo={sode}></Card>
        <Card
          name='Funtioni Continue'
          location='Barcelona'
          logo={funzionicontinue}
        ></Card>
      </div>
    </section>
  );
};

export default Consortium;
