import React from "react";
import pImg from "./portfolio-ss.png";
import pImg2 from "./portfolio-ss2.png";
import pImg3 from "./portfolio-ss3.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 data-aos="zoom-in">Portfolio Projects</h1>
      <div className="cards-container ">
        <div data-aos="zoom-in" className="card">
          <img src={pImg} alt="" />
          <div className="info">
            <h1 className="heading">FlyingX</h1>
            <p>
              This is a Niche(single product selling)Website,See Live by
              clicking the button below
            </p>
            <a
              href="https://assignment-12-drone.web.app/"
              target="_blank"
              className="live-btn"
            >
              Open Live
            </a>
          </div>
        </div>
        <div data-aos="zoom-in" className="card">
          <img src={pImg2} alt="" />
          <div className="info">
            <h1 className="heading">Aqua Health Care</h1>
            <p>
              This website specializes in health care,See Live by clicking the
              button below
            </p>
            <a
              href="https://heathcare-8a49c.web.app/"
              target="_blank"
              className="live-btn"
            >
              Open Live
            </a>
          </div>
        </div>
        <div data-aos="zoom-in" className="card">
          <img src={pImg3} alt="" />
          <div className="info">
            <h1 className="heading">Adventure Pro</h1>
            <p>
              This is a Travel Agency Website,See Live by clicking the button
              below
            </p>
            <a
              href="https://tourism-assignment-11-d16ce.web.app/"
              target="_blank"
              className="live-btn"
            >
              Open Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
