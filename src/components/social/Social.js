import React from "react";

const Social = () => {
  return (
    <div>
      <nav className="social">
        <ul>
          <li className="facebook">
            <a
              href="https://www.facebook.com/profile.php?id=100007192440549"
              target="_blank"
            >
              Facebook<i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li className="linkedin">
            <a href="https://www.linkedin.com/in/omar04/" target="_blank">
              LinkedIn<i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>

          <li className="github">
            <a href="https://github.com/omarbinasad" target="_blank">
              GitHub<i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Social;
