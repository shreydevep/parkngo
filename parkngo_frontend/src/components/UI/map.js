import React, { useState, useCallback, useEffect, useRef } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";
import NavBar from "./NavBar";
import MarkerContainer from "./MarkerContainer";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibml3aWIiLCJhIjoiY2t4NHk0aGhwMTF2czMwbzE4ZmZvYXVsbyJ9.A5rofAOkBGl9bajgGvxR0A";

const Map = ({
  myLocationRef,
  widgetsClickHandler,
  mapRef,
  centerCurr,
  setCenterCurr,
}) => {
  const [viewport, setViewport] = useState({
    latitude: centerCurr.latitude,
    longitude: centerCurr.longitude,
    zoom: 2,
    minZoom: 2,
    bearing: 0,
    pitch: 0,
  });
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );
  return (
    <div className="map">
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="70vh"
        mapStyle="mapbox://styles/mapbox/streets-v10"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={handleViewportChange}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
        <div onClick={widgetsClickHandler}>
          <GeolocateControl position="top-right" />
        </div>

        <MarkerContainer
          centerCurr={centerCurr}
          setCenterCurr={setCenterCurr}
          mapRef={mapRef}
        />
      </ReactMapGL>
    </div>
  );
};

export default Map;
