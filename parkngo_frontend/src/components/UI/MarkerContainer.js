import ReactMapGL, { Source, Layer, Marker, Popup } from "react-map-gl";
import React, { useState, useCallback, useEffect } from "react";
import Pin from "./pin";
import { data } from "../../utils/data";
let temp = data;
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-73.9385, 40.6643] },
    },
  ],
};
let bounds;
function inBounds(point, bounds) {
  console.log(bounds);
  var lng = (point.lng - bounds._ne.lng) * (point.lng - bounds._sw.lng) < 0;
  var lat = (point.lat - bounds._ne.lat) * (point.lat - bounds._sw.lat) < 0;

  return lng && lat;
}

const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

const MarkerContainer = ({ centerCurr, setCenterCurr, mapRef }) => {
  const [marker, setMarker] = useState({
    latitude: 40,
    longitude: -100,
  });

  const [tempData, setTempData] = useState([]);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTempData(data);
  }, []);
  useEffect(
    (event) => {
      console.log(selected);
      if (selected)
        setHoverInfo({
          longitude: selected.longitude,
          latitude: selected.latitude,
        });
      else setHoverInfo(null);
    },
    [selected]
  );
  useEffect(() => {
    setTempData([]);

    bounds = { ...mapRef.current.getMap().getBounds() };
    console.log(bounds);
    let tempArr = [];
    data.forEach((d) => {
      let point;
      point = {
        lng: `${d.longitude}`,
        lat: `${d.latitude}`,
      };
      if (inBounds(point, bounds)) {
        tempArr.push(d);
      }
    });
    console.log(tempArr);

    setTempData(tempArr);
  }, [centerCurr, mapRef]);
  console.log(mapRef.current.getMap().latlngboundscontains);
  return (
    <>
      {tempData.map((d) => {
        return (
          <div key={d.city}>
            <div>
              {
                <Marker
                  longitude={d.longitude}
                  latitude={d.latitude}
                  captureDrag={false}
                >
                  <div
                    onMouseEnter={() => {
                      //console.log("Hover");
                      if (d.latitude && d.longitude)
                        setSelected({
                          latitude: d.latitude,
                          longitude: d.longitude,
                        });
                    }}
                  >
                    <Pin></Pin>
                  </div>
                </Marker>
              }
            </div>
          </div>
        );
      })}
      {hoverInfo && (
        <Popup
          latitude={selected.latitude}
          longitude={selected.longitude}
          closeButton={false}
          closeOnClick={true}
          onClose={() => {
            //console.log("Close");
            setHoverInfo(null);
          }}
          anchor="top"
        >
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            Google
          </a>
        </Popup>
      )}
    </>
  );
};

export default MarkerContainer;
