import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

import MailTo from "./MailtTo";
const Footer = () => {
  return (
    <div className='footer__container'>
      <hr />
      <h1>NEDA</h1>
      <div className='footer__container-logo'>
        <BsFacebook size={35} className='logo' />
        <BsInstagram size={35} className='logo' />
        <BsLinkedin size={35} className='logo' />
      </div>
      <div className='footer__container-links'>
        <div className='footer__container-browse'>
          <ul>
            <h3>BROWSE</h3>
            <li>Open Calls</li>
            {/* <li>Projects</li>
              <li>Artists</li>
              <li>Venues</li>
            <li>How To</li> */}
          </ul>
        </div>
        <div className='footer__container-about'>
          <ul>
            <h3>ABOUT</h3>
            <li>
              <MailTo
                email='info@neda.website'
                subject='hey!'
                body='Hello Neda,'
              >
                Contact
              </MailTo>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to='/privacypolicy'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to='/nondiscrimination'
              >
                Non-Discrimination
              </Link>
            </li>
            {/* <li>Terms & Conditions</li>
              <li>User Agreement</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
