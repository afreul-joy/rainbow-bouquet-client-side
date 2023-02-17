import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner3 from "./Banner-img/birthday.jpg"
import banner2 from "./Banner-img/wed.jpg"
import banner1 from "./Banner-img/wed-02.jpg"

import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <Row className="banner-intro">
          <>
          <Col xs={12} md={6} lg={6}>
            <h3 className="">Flowers For</h3>
            <h3>Your Loved Ones</h3>
            <p className="text-capitalize">
            At Rainbow Bouquet We Provide The Most Quality <br /> 
            Ensured Flowers That You Can Buy.
            </p>
            <button className="readBtn">Start Shopping</button>
          </Col>
          </>
          <Col xs={12} md={6} lg={6}></Col>
        </Row>

    <Row className="banner-intro">
          <>
          <Col xs={12} md={6} lg={6}>
            <h3 id="shoph">Shop Flowers  <br />For <i class='fas fa-long-arrow-alt-right' ></i>  </h3>
          

          </Col>
          </>
          <Col xs={12} md={6} lg={6}>
          <div id="carouselExampleDark" className="carousel  carousel-dark slide text-white" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ">
    <div className="carousel-item active text-white" data-bs-interval="10000">
      <img src={banner3} className="img-fluid" alt="..."/>
      <div className="carousel-caption  text-center ">
        <h2 >Weeding</h2>
          
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={banner2} className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Birthday</h2>
           
  
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner1}className="img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Weeding</h2>
         
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
          </Col>
        </Row>


      </Container>
    </div>
  );
};

export default Banner;
