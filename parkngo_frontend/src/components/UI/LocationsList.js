import React, { useRef } from "react";
import Card from "./Card";

import useInfiniteScroll from "../Hooks/useInfiniteScroll";
import useFetchData from "../Hooks/useFetchData";

const ContactsList = ({
  scroller,
  scrollerDispatch,
  locationData,
  locationDataDispatch,
  onSelectCity,
  setCenterCurr,
  handleOnFlyTo,
}) => {
  useFetchData(scroller, locationDataDispatch);
  let bottomBoundaryRef = useRef(null);
  useInfiniteScroll(bottomBoundaryRef, scrollerDispatch);
  return (
    <>
      {locationData.locations.map((location, index) => (
        <Card
          {...location}
          key={index}
          imageUrl={`https://picsum.photos/200?random=${index}`}
          onSelectCity={onSelectCity}
          handleOnFlyTo={handleOnFlyTo}
        />
      ))}
      <div ref={bottomBoundaryRef}></div>
    </>
  );
};
export default ContactsList;
