import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './home.css'

function Home() {
  return (
    <>
      <Carousel className="mt-3">
        <Carousel.Item>
          <img className="d-block w-100" src="/imgs/dark-banner.jpg" style={{maxHeight: '520px'}}/>
          <Carousel.Caption>
            <h3>Dark</h3>
            <p>Best Time Traveling Series</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/imgs/avg-banner.jpg" style={{maxHeight: '520px'}}/>
          <Carousel.Caption>
            <h3>The Avengers</h3>
            <p>First Marvel Movie With OG Avengers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-50" src="/imgs/st-banner.jpg" />
          <Carousel.Caption>
            <h3>Stranger Things</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/imgs/batman-banner.jpg" />
          <Carousel.Caption>
            <h3>The Batman</h3>
            <p>
              Best Batman Movie of All Times
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="m-4"><h4>Top Rated Movies </h4></div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-2 mx-4"><img src='/imgs/batman-card.jpg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/int-card.jpg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/ds-card.jpeg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/br-card.jpg' className="zoom-effect"style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/end.jpg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
        </div>
      </div>

      <div className="m-4"><h4>Top Rated TV Shows</h4></div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-2 mx-4"><img src='/imgs/tb-card.jpg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/mh-card.jpg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/bb-card.jpg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/loki.jpg' className="zoom-effect"style={{maxWidth: '250px'}}/></div>
          <div className="col-2 mx-4"><img src='/imgs/mn-card.jpg'className="zoom-effect" style={{maxWidth: '250px'}}/></div>
        </div>
      </div>
    </>
  );
}

export default Home;
