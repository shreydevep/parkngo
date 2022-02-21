import React, { useEffect, useReducer, useState, useRef } from "react";
import "./map.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "../../utils/data";
import { data } from "../../utils/data";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";

const position = [40.6643, -73.9385];

const LocationMarker = ({ markersData, markersDataDispatch, locationData }) => {
  console.log(locationData);
  useEffect(() => {
    locationData.locations.forEach((d) => {
      markersDataDispatch({
        type: "ADD_MARKER",
        markers: { lat: d.latitude, lng: d.longitude },
      });
    });
  }, [locationData]);

  return (
    <>
      {markersData.markers.map((position, index) => (
        <Marker key={index} position={position}>
          <Popup>You are here</Popup>
        </Marker>
      ))}
    </>
  );
};
const MapLeaflet = ({
  mapRef,
  handleOnSetView,
  control,
  searchContainerRef,
  locationData,
}) => {
  const markersReducer = (state, action) => {
    switch (action.type) {
      case "ADD_MARKER":
        console.log("Triggered");
        return { ...state, markers: state.markers.concat(action.markers) };
      default:
        return state;
    }
  };
  const [markersData, markersDataDispatch] = useReducer(markersReducer, {
    markers: [],
  });
  const { current = {} } = mapRef;
  const { leafletElement: map } = current;

  //GeoSearch
  useEffect(() => {
    if (!map) return;
    control.addTo(map);
    //const searchContainer = control.onAdd(map);
    // console.log(searchContainer);
    //searchContainerRef.current.appendChild(searchContainer);

    control.on("results", handleOnSearchResuts);

    return () => {
      control.off("results", handleOnSearchResuts);
    };
  }, [map, searchContainerRef]);

  function handleOnSearchResuts(data) {
    console.log("Search results", data);
  }
  //Click to Move
  useEffect(() => {
    if (map) {
      map.on("click", (e) => {
        map.setView([e.latlng.lat, e.latlng.lng]);
      });
    }
  }, [map, handleOnSetView]);

  return (
    <Map ref={mapRef} center={position} zoom={5} className="map-container">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        markersData={markersData}
        locationData={locationData}
        markersDataDispatch={markersDataDispatch}
      />
    </Map>
  );
};
export default MapLeaflet;
