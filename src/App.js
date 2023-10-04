import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { FaHourglassStart } from "react-icons/fa";
import CardList from "./components/Card";
import mockHotelData from "./components/store";

import HeaderText from "./components/HeaderText";
import Card from "./components/Card";
function App() {
  const [visibleCards, setVisibleCards] = useState(6);
  const [selectedCity, setSelectedCity] = useState(null);

  const cardsToAdd = 3;

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsToAdd);
  };

  const filterHotelData = () => {
    if (selectedCity) {
      return mockHotelData.filter((hotel) => hotel.city === selectedCity);
    }
    return mockHotelData.slice(0, visibleCards);
  };
  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <HeaderText />
        <div className="main-width d-flex gap-3 mb-3">
          <button
            type="button"
            className={`btn button-color rounded-4 ${
              selectedCity === "New York" ? "active" : ""
            }`}
            onClick={() => setSelectedCity("New York")}
            style={{
              background: selectedCity === "New York" ? "blue" : "",
              border: selectedCity === "New York" ? "none" : "1px solid #ccc",
              color: selectedCity === "New York" ? "white" : "black",
            }}
          >
            New York
          </button>
          <button
            type="button"
            className={`btn button-color rounded-4 ${
              selectedCity === "Mumbai" ? "active" : ""
            }`}
            onClick={() => setSelectedCity("Mumbai")}
            style={{
              background: selectedCity === "Mumbai" ? "blue" : "",
              border: selectedCity === "Mumbai" ? "none" : "1px solid #ccc",
              color: selectedCity === "Mumbai" ? "white" : "black",
            }}
          >
            Mumbai
          </button>
          <button
            type="button"
            className={`btn button-color rounded-4 ${
              selectedCity === "Paris" ? "active" : ""
            }`}
            onClick={() => setSelectedCity("Paris")}
            style={{
              background: selectedCity === "Paris" ? "blue" : "",
              border: selectedCity === "Paris" ? "none" : "1px solid #ccc",
              color: selectedCity === "Paris" ? "white" : "black",
            }}
          >
            Paris
          </button>
          <button
            type="button"
            className={`btn button-color rounded-4 ${
              selectedCity === "London" ? "active" : ""
            }`}
            onClick={() => setSelectedCity("London")}
            style={{
              background: selectedCity === "London" ? "blue" : "",
              border: selectedCity === "London" ? "none" : "1px solid #ccc",
              color: selectedCity === "London" ? "white" : "black",
            }}
          >
            London
          </button>
        </div>

        {/* //content start here */}
        <div className="main-width">
          <CardList visibleCards={visibleCards} hotelData={filterHotelData()} />
        </div>
        <div className="my-4">
          {visibleCards < mockHotelData.length && (
            <button
              type="button"
              className="btn btn-primary rounded-5"
              onClick={handleShowMore}
            >
              <FaHourglassStart className="me-2" />
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
