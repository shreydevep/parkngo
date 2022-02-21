import {
  useReducer,
  useState,
  useRef,
  useCallback,
  forwardRef,
  useEffect,
} from "react";
import Map from "./map";
import { geosearch } from "esri-leaflet-geocoder";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "./MainBoard.css";
import NavBar from "./NavBar";
import LocationsList from "./LocationsList";
import MapLeaflet from "./MapLeaflet";
import LocationFilters from "./LocationFilters";
const disneyWorldLatLng = [28.3852, -81.5639];
const MainBoard = ({ myLocationRef }) => {
  const locationDataReducer = (state, action) => {
    switch (action.type) {
      case "ADD_LOCATIONS":
        return { ...state, locations: state.locations.concat(action.contacts) };
      case "FETCHING_LOCATIONS":
        return { ...state, fetching: action.fetching };
      case "REMOVE_LOCATIONS":
        return { ...state, removing: action.removing };
      default:
        return state;
    }
  };

  const scrollerReducer = (state, action) => {
    switch (action.type) {
      case "SCROLL_LEFT":
        return { ...state, scrollLevel: state.scrollLevel + 1 };
      default:
        return state;
    }
  };
  const [scroller, scrollerDispatch] = useReducer(scrollerReducer, {
    scrollLevel: 0,
  });
  const [locationData, locationDataDispatch] = useReducer(locationDataReducer, {
    locations: [],
    fetching: true,
  });

  const [getUserCurrentLocation, setUserCurrentLocation] = useState({
    lat: "",
    lng: "",
  });
  const mapRef = useRef();
  const control = geosearch();
  const searchContainerRef = useRef();

  const handleOnSetView = (posLatLng) => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.setView(posLatLng, 14);
  };

  const handleOnFlyTo = (posLatLng) => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.flyTo(posLatLng, 5, {
      duration: 1,
    });
  };

  return (
    <div className="mainboard">
      <NavBar
        control={control}
        mapRef={mapRef}
        searchContainerRef={searchContainerRef}
        getUserCurrentLocation={getUserCurrentLocation}
        setUserCurrentLocation={setUserCurrentLocation}
        handleOnFlyTo={handleOnFlyTo}
      />
      <MapLeaflet
        handleOnFlyTo={handleOnFlyTo}
        handleOnSetView={handleOnSetView}
        mapRef={mapRef}
        control={control}
        searchContainerRef={searchContainerRef}
        locationData={locationData}
      />

      <div className="horizontal-scroll-container">
        <LocationsList
          scroller={scroller}
          scrollerDispatch={scrollerDispatch}
          locationData={locationData}
          locationDataDispatch={locationDataDispatch}
          handleOnFlyTo={handleOnFlyTo}
          handleOnSetView={handleOnSetView}
          mapRef={mapRef}
        />
      </div>
    </div>
  );
};

export default MainBoard;
