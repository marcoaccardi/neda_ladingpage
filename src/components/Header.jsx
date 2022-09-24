import React from "react";
import video from "../assets/video.mp4";
const Header = () => {
  return (
    <>
      <header className='header'>
        <video autoPlay loop muted id='myVideo'>
          <source src={video} type='video/mp4' />
        </video>
        <div>
          <h1>Network for European Digital Arts</h1>
          <h2>A place where people meet science, art and technology.</h2>
        </div>
      </header>
    </>
  );
};

export default Header;
