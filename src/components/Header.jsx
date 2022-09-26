import React, { useEffect, useRef } from "react";
import video from "../assets/video.mp4";
import gsap from "gsap";
const Header = () => {
  let title = useRef(null);
  useEffect(() => {
    gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 3, delay: 1 });
    gsap.fromTo("h2", { opacity: 0 }, { opacity: 1, duration: 3, delay: 2 });
  }, []);
  return (
    <header className='header'>
      <video autoPlay loop muted id='myVideo'>
        <source src={video} type='video/mp4' />
      </video>
      <div>
        <h1 ref={title}>Network for European Digital Arts</h1>
        <h2>A place where people meet science, art and technology.</h2>
      </div>
    </header>
  );
};

export default Header;
