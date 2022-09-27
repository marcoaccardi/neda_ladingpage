import React from "react";
import imageOne from "../assets/about/imageOne.jpeg";
import imageTwo from "../assets/about/imageTwo.jpeg";
const About = () => {
  return (
    <section className='about'>
      <div className='about__container'>
        <div className='about__container-imageOne'>
          <img src={imageOne} alt='' />
        </div>
        <div className='about__container-text'>
          <h1>About</h1>
          <p>
            The driving idea behind the development of NEDA is not only to be
            part of but also play an essential and active role in the social
            incorporation of technological developments. Creating a context in
            which issues related to the social impact of technology are explored
            through critical dialogue, artistic reflection and practice-oriented
            research of various topics that are part of the forefront of new
            technologies challenging the society we live in and the ethical
            beliefs of many groups within this society.
          </p>
          <p className='middle-paragraph'>
            When treating technology we do not only aim to look at the mere
            technological progresses and advancements it can generate but rather
            we want to offer space for artistic reflections and personal points
            of view that can integrate a factor of ethics within the
            technological aspect.
          </p>
          <p>
            The Network for European Digital Arts (NEDA) is formed by a
            consortium of 5 entities: Studio K (Amsterdam), Anecoica (Berlin),
            Clhub.art (Barcelona), Funzioni Continue (Barcelona) and Society Of
            Digital Experiments (Lisbon), in many ways involved with the
            creation, promotion and distribution of creative and cultural
            projects. The composition of the consortium itself allows the
            dissemination of artistic projects across 4 countries in Europe with
            the aim of not only distributing but truly create an event platform
            dedicated to new media arts and the development of digital markets
            to improve user satisfaction and understanding of new technologies
            by giving the possibility to interact and improve the experience of
            tech development inside the digital era.
          </p>
        </div>
      </div>
      {/* <div className='about__container-imageTwo'>
        <img src={imageTwo} alt='' />
      </div> */}
    </section>
  );
};

export default About;
