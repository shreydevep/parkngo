import { useRef } from "react";
import LocationFilters from "./LocationFilters";
import "./SideBoard.css";
const SideBoard = ({ myLocationRef, widgetsClickHandler }) => {
  return (
    <div className="side">
      <div onClick={widgetsClickHandler}>Widgets</div>
      <div>sideboard</div>
      <div>Bookings</div>
      <div className="locationFilters-container">
        <LocationFilters />
      </div>
    </div>
  );
};

export default SideBoard;
