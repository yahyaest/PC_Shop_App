import React from "react";
import Navbar from "./navbar";
import Footer from './footer';
import "../../css/home.css";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="home__images">
        <div className="hero-image1">
          <div className="hero-text">
            <h1>
              “We treat each PC as if it were our own! <br />
              Take a look at some of the PCs we've helped build!”
            </h1>
            <p> ― Markus Persson</p>
          </div>
        </div>
        <div className="hero-image2">
          <div className="hero-text">
            <h1>
              “I do not think that PC gaming is over...
              <br /> it will always be the choice of the gaming enthusiast
              <br /> who is willing to put in the extra effort for a richer,
              more rewarding experience. ”
            </h1>
            <p>― Mike Wilson</p>
          </div>
        </div>
        <div className="hero-image3">
          <div className="hero-text">
            <h1>
              “We've seen the power of the PC, and we've seen that it's
              unstoppable.”
            </h1>
            <p>― Eckhard Pfeiffer</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
