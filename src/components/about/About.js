import React from "react";
import image from "./myphoto.png";

const About = () => {
  return (
    <div className="about">
      <h1 data-aos="zoom-in">About Me</h1>
      <div className="about-item row">
        <div
          data-aos="zoom-in"
          className="my-photo-div col-6 col-md-6 col-sm-12"
        >
          <img src={image} className="my-photo" alt="" />
        </div>
        <div
          data-aos="zoom-in"
          className="desc-div d-flex align-items-center  col-6 col-md-6 col-sm-12"
        >
          <p className="text-start">
            Hi, I am a MERN Stack Developer and have 1 year+ of experience in
            Web Design & Development. I have successfully completed a Web
            development (MERN) Course from Programming Hero. Especially, I love
            to work in Front-end Development and still learning Programming. I
            am also an expert in WordPress Theme Customization with 1 year+
            working experience.
          </p>
        </div>
      </div>
      {/* Front-end skills  */}
      <div className="row ">
        {" "}
        <div className="col-lg-6 col-sm-12 skills-container">
          <h3 data-aos="fade-in" className="text-start ls-5">
            {" "}
            Front-End Skills
          </h3>
          <div data-aos="zoom-in" className="skills">
            <div className="skill">
              <div className="skill-name">HTML 5 & CSS 3</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="90%"
                  style={{ maxWidth: "90%" }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">Javascript</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="70%"
                  style={{ maxWidth: "70%" }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">React Js</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="85%"
                  style={{ maxWidth: "85%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Bootstrap</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="85%"
                  style={{ maxWidth: "85%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Material-UI</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="80%"
                  style={{ maxWidth: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Back-end skills  */}
        <div className="col-lg-6 col-sm-12 skills-container">
          <h3 data-aos="fade-in" className="text-start ls-5">
            Back-End Skills
          </h3>
          <div data-aos="zoom-in" className="skills">
            <div className="skill">
              <div className="skill-name">Node Js</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="60%"
                  style={{ maxWidth: "60%" }}
                ></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-name">Express Js</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="60%"
                  style={{ maxWidth: "60%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">MongoDB</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="70%"
                  style={{ maxWidth: "70%" }}
                ></div>
              </div>
            </div>
            <div className="skill">
              <div className="skill-name">Firebase</div>
              <div className="skill-bar">
                <div
                  className="skill-per"
                  per="70%"
                  style={{ maxWidth: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
