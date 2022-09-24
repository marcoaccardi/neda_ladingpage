import React from "react";
import imageOne from "../assets/about/imageOne.jpeg";

const OpenCall = () => {
  return (
    <section className='opencall__container'>
      <div className='opencall__container-image'>
        <img src={imageOne} alt='' />
      </div>
      <div className='opencall__container-text'>
        <h1>Open Call for Artist</h1>
        <p>
          This open call is for artists who want to participate in one of the
          four NEDA events that will take place in 2023. In 2023, NEDA will host
          a two days event in each of the following cities: Amsterdam,
          Barcelona, Berlin, and Lisbon. The objective of the open call is to
          collect applications for a broad range of ideas for exhibitions,
          workshops, performances, and screenings. The selected artists will
          receive a prize and compensation to take part in the events with their
          projects.The main theme for this open call is Artificial Intelligence
          (AI). AI is at the core of the fourth industrial revolution, it is the
          source and the main consumer of data in this new digital era. AI tools
          and systems will be integrated in our daily lives in the public and
          private space, in the workplace, and in classrooms. This will further
          develop as AI is progressively becoming a key complementary player to
          the human workforce.
        </p>
      </div>
      <div className='opencall__container-button'>
        <button>APPLY</button>
      </div>
    </section>
  );
};

export default OpenCall;
