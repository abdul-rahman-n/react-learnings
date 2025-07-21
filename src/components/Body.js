import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <button
        className="filter-btn"
        onClick={() => {
          const filteredRestaurant = listOfRestaurant.filter(
            (res) => res.card.card.info.avgRating >= 4.5
          );
          setListOfRestaurant(filteredRestaurant);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
