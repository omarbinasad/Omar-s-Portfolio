import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Blogs from "./components/blogs/Blogs";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import initializeAuthentication from "./Firebase/firebase.initialize";
import Social from "./components/social/Social";

initializeAuthentication();

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="section-container">
        {/* <Particles
          params={{
            particles: {
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 0.5,
              },

              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 5,
                  color: "#f9ab00",
                },
              },
            },
          }}
        /> */}

        <Header />

        <section id="about">
          <About />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="blogs">
          <Blogs />
        </section>

        <section id="contact">
          <Contact />
        </section>
        <Social></Social>
      </div>
    </div>
  );
}

export default App;
