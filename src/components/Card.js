import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import img1 from "../assets/images.jpeg";
import mockHotelData from "./store";

const Card = ({ hotelData }) => {
  let carouselId = "carouselExampleIndicators" + hotelData.id;
  let carouseltargetId = "#carouselExampleIndicators" + hotelData.id;
  return (
    <div
      className="card border-0 rounded-4 main-bg-color shadow mb-3
"
      style={{ width: "30%" }}
    >
      <div className="m-2">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div id={carouselId} className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-target={carouseltargetId}
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-target={carouseltargetId}
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-target={carouseltargetId}
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner rounded-4">
              <div className="carousel-item active">
                <img src={hotelData.img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={hotelData.img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={hotelData.img2} className="d-block w-100" alt="..." />
              </div>
            </div>
            <div className="card-img-overlay">
              <div className="d-flex justify-content-between mx-1 mt-1">
                <button
                  type="button"
                  className="btn btn-light rounded-5 text-primary fw-semibold"
                >
                  For Rent
                </button>
                <button
                  type="button"
                  className="btn btn-light rounded-circle text-primary fw-semibold"
                >
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h6 className="card-title">
          {" "}
          <IoLocationOutline className="me-1" />
          {hotelData.location}
        </h6>
        <h5>{hotelData.address}</h5>
        <div className="d-flex mb-1 justify-content-between mt-3">
          <div className="d-flex flex-column gap-1">
            <RiHotelLine />
            <h6>{hotelData.rooms} Rooms</h6>
          </div>
          <div className="d-flex flex-column gap-1">
            <LiaBedSolid />
            <h6>{hotelData.beds} bed</h6>
          </div>
          <div className="d-flex flex-column gap-1">
            <LiaBathSolid /> <h6>{hotelData.bath} bath</h6>
          </div>
          <div className="d-flex flex-column gap-1">
            <BsArrowsMove />
            <h6>{hotelData.area} sft</h6>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h4 className="text-primary">
            ${hotelData.costOfRent}
            <span className="fs-6 text-black">/ month</span>
          </h4>

          <button type="button" className="btn btn-outline-primary rounded-5">
            <b>Primary</b>
          </button>
        </div>
      </div>
    </div>
  );
};
const CardList = ({ visibleCards }) => {
  const visibleHotels = mockHotelData.slice(0, visibleCards);

  return (
    <div className="d-flex flex-wrap justify-content-between mt-3">
      {visibleHotels.map((hotel, index) => (
        <Card key={index} hotelData={hotel} />
      ))}
    </div>
  );
};

export default CardList;
