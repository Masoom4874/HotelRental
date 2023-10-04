import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { FaHourglassStart } from "react-icons/fa";
import CardList from "./components/Card";
import mockHotelData from "./components/store";

import HeaderText from "./components/HeaderText";
import Card from "./components/Card";
function App() {
  const [visibleCards, setVisibleCards] = useState(6); // Initially display 6 cards
  const cardsToAdd = 3; // Number of cards to add when "Show More" is clicked

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsToAdd);
  };
  return (
    <div className="App">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <HeaderText />
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
          <CardList visibleCards={visibleCards} />
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
