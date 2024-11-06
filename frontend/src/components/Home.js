import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";

function Home() {
  return (
    <>
      <Carousel className="mt-3">
        <Carousel.Item>
          <img className="d-block w-100" src="/imgs/batman-banner.jpg" alt="The Batman" />
          <Carousel.Caption>
            <h3>The Batman</h3>
            <p>Best Batman Movie of All Times</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/dark-banner.jpg"
            style={{ maxHeight: "520px" }}
            alt="Dark"
          />
          <Carousel.Caption>
            <h3>Dark</h3>
            <p>Best Time Traveling Series</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/end-banner.jpg"
            style={{ maxHeight: "520px" }}
            alt="The Avengers"
          />
          <Carousel.Caption>
            <h3>The Avengers</h3>
            <p>Best Marvel Movie With OG Avengers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/imgs/st-banner.jpg" alt="Stranger Things" />
          <Carousel.Caption>
            <h3>Stranger Things</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="m-4">
        <h4>Top Rated Movies</h4>
      </div>

      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/batman-card.jpg" className="img-fluid zoom-effect" alt="Batman" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/int-card.jpg" className="img-fluid zoom-effect" alt="Inception" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/ds-card.jpeg" className="img-fluid zoom-effect" alt="Dr Strange" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/br-card.jpg" className="img-fluid zoom-effect" alt="Blade Runner" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/end.jpg" className="img-fluid zoom-effect" alt="Endgame" />
          </div>
        </div>
      </div>

      <div className="m-4">
        <h4>Top Rated TV Shows</h4>
      </div>

      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/tb-card.jpg" className="img-fluid zoom-effect" alt="The Boys" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/mh-card.jpg" className="img-fluid zoom-effect" alt="Mindhunter" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/bb-card.jpg" className="img-fluid zoom-effect" alt="Breaking Bad" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/loki.jpg" className="img-fluid zoom-effect" alt="Loki" />
          </div>
          <div className="col-2 m-4 col-md-4 col-lg-2">
            <img src="/imgs/mn-card.jpg" className="img-fluid zoom-effect" alt="Moon Knight" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
