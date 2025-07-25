import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    resData?.card?.card?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant-Logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
