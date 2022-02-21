import React from "react";
import "./Card.css";
import RoundThumbnail from "./RoundThumbnail";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Card = (props) => {
  //console.log(props);
  const { imageUrl, handleOnFlyTo } = props;

  const clickHandler = () => {
    const posLatLng = [props.latitude, props.longitude];
    console.log(posLatLng);
    handleOnFlyTo(posLatLng);
    scrollToTop();
  };
  return (
    <>
      <div className="card-container" onClick={clickHandler}>
        <RoundThumbnail imageUrl={imageUrl} />
        <h3>{props.city}</h3>
        <p>{`${props.latitude} ${props.longitude}`}</p>
        <h6>{props.street_name}</h6>
        <p>{`${props.street_address}`}</p>
      </div>
    </>
  );
};
export default Card;
