import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/imgs/batman-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/imgs/dark-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/imgs/la-la-land-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/imgs/st-banner.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

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
          <div className="col-2 m-3"><img src='/imgs/batman-card.jpg' style={{maxWidth: '250px'}}/></div>
          <div className="col-2 m-3"><img src='/imgs/int-card.jpg' style={{maxWidth: '250px'}}/></div>
          <div className="col-2 m-3"><img src='/imgs/ds-card.jpeg' style={{maxWidth: '250px'}}/></div>
          <div className="col-2 m-3"><img src='/imgs/br-card.jpg' style={{maxWidth: '250px'}}/></div>
          <div className="col-2 m-3"><img src='/imgs/end.jpg' style={{maxWidth: '250px'}}/></div>

        </div>
      </div>
    </>
  );
}

export default Home;
