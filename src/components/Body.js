import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0459057&lng=80.2255088&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (!onlineStatus) {
    return <h1>You are now offline!! Please check your internet connection</h1>;
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter(
                (res) => res?.info?.avgRating >= 4.5
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
