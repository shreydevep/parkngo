import { useEffect } from "react";
const BASE_URL = "https://random-data-api.com/api/address/random_address";
const useFetchData = (scroller, contactDataDispatch) => {
  useEffect(() => {
    console.log("Here");
    contactDataDispatch({ type: "FETCHING_LOCATIONS", fetching: true });
    fetch(`${BASE_URL}?size=10`)
      .then((data) => data.json())
      .then((data) => {
        //console.log(data)
        let contacts = data;
        console.log(contacts);
        setTimeout(() => {
          contactDataDispatch({ type: "ADD_LOCATIONS", contacts });
          contactDataDispatch({ type: "FETCHING_LOCATIONS", fetching: false });
        }, 1000);
      })
      .catch((e) => {
        contactDataDispatch({ type: "FETCHING_LOCATIONS", fetching: false });
        console.log(e);
      });
  }, [contactDataDispatch, scroller.scrollLevel]);
};

export default useFetchData;
