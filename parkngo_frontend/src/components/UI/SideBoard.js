import { useRef } from "react";
import LocationFilters from "./LocationFilters";
import "./SideBoard.css";
const SideBoard = ({ myLocationRef, widgetsClickHandler }) => {
  return (
    <div className="side">
      <div>Become Host</div>
      <div>Bookings</div>
      <div onClick={widgetsClickHandler}>Widgets</div>
      <div className="locationFilters-container">
        <LocationFilters />
      </div>
    </div>
  );
};

export default SideBoard;
