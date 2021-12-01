import React from "react";
import Typed from "react-typed";
import resume from "./../../Omars-Resume_2.pdf";

const Header = () => {
  return (
    <div className="header-wraper" id="home">
      <div data-aos="zoom-in" className="main-info">
        <h1 className="mb-3">
          <span>Hi,</span>
        </h1>
        <h1>I'm Omar Bin Asad</h1>
        <h3 className="text-secondary">Specialize in</h3>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "App Development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <div className="d-flex">
          <div className="btn-div2">
            <a className="" href="#contact">
              Hire Me
            </a>
          </div>
          <div className="btn-div">
            <a href={resume} download="Omars-Resume_2.pdf">
              {" "}
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
