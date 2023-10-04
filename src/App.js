import logo from "./logo.svg";
import "./App.css";
import img1 from "./assets/images.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { LiaBedSolid, LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import mockHotelData from "./components/store";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="w-25 d-flex flex-column justify-content-center align-items-center mt-2 mb-4 ">
          <h1>Featured Listed Property</h1>
          <p>
            Real state can be bought, sold, leased, or rented, and can be a
            valued investement opportunity. the value of real state can be...
          </p>
        </div>
        <div className="main-width d-flex gap-3 mb-3">
          <button type="button" class="btn button-color rounded-4">
            New York
          </button>
          <button type="button" class="btn button-color rounded-4">
            Mumbai
          </button>
          <button type="button" class="btn button-color rounded-4">
            Paris
          </button>
          <button type="button" class="btn button-color rounded-4">
            London
          </button>
        </div>

        {/* //content start here */}
        <div className="main-width">
          <div
            className="card border-0 rounded-4 main-bg-color shadow mb-3"
            style={{ width: "30%" }}
          >
            <div className="m-2">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner rounded-4">
                  <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={img1} className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>

              <div class="card-img-overlay">
                <div className="d-flex justify-content-between mx-1 mt-1">
                  <button
                    type="button"
                    class="btn btn-light rounded-5 text-primary fw-semibold"
                  >
                    For Rent
                  </button>
                  <button
                    type="button"
                    class="btn btn-light rounded-circle text-primary fw-semibold"
                  >
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h6 className="card-title">
                {" "}
                <IoLocationOutline className="me-1" />
                {mockHotelData.location}
              </h6>
              <h5>{mockHotelData.address}</h5>
              <div className="d-flex mb-1 justify-content-between mt-3">
                <div className="d-flex flex-column gap-1">
                  <RiHotelLine />
                  <h6>{mockHotelData.rooms} Rooms</h6>
                </div>
                <div className="d-flex flex-column gap-1">
                  <LiaBedSolid />
                  <h6>{mockHotelData.beds} bed</h6>
                </div>
                <div className=" d-flex flex-column gap-1">
                  <LiaBathSolid /> <h6>{mockHotelData.bath} bath</h6>
                </div>
                <div className=" d-flex flex-column gap-1">
                  <BsArrowsMove />
                  <h6>{mockHotelData.area} sft</h6>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h4 className="text-primary">
                  ${mockHotelData.costOfRent}
                  <span className="fs-6 text-black">/ month</span>
                </h4>

                <button type="button" className="btn custom-btn">
                  <b>Primary</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
