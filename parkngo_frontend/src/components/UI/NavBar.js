import { useEffect } from "react";
import { Nav, NavItem, NavLink, InputGroup, Input, Button } from "reactstrap";
import "./NavBar.css";

const NavBar = ({
  mapRef,
  searchContainerRef,
  getUserCurrentLocation,
  setUserCurrentLocation,
  handleOnFlyTo,
}) => {
  const { current = {} } = mapRef;
  const { leafletElement: map } = current;
  const locateUser = () => {
    map.locate().once("locationfound", (e) => {
      setUserCurrentLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
      if (e.latlng) handleOnFlyTo([e.latlng.lat, e.latlng.lng]);
    });
  };
  return (
    <div className="navBar-container">
      <div className="navBar">
        <Nav>
          <NavItem className="nav-items">
            <NavLink active href="/login">
              <span className="nav-items">User</span>
            </NavLink>
          </NavItem>

          <NavItem className="nav-items">
            <NavLink href="/profile">
              <span className="nav-items">Profile</span>
            </NavLink>
          </NavItem>
          <NavItem className="nav-locate" onClick={locateUser}>
            <span style={{ color: "blue", fontSize: "20px" }}>
              <i class="fa-solid fa-location-arrow"></i>
            </span>
          </NavItem>
          <NavItem>
            <div className="locate-container">
              <div>
                <span className="nav-items" style={{ padding: "20px" }}>
                  Latitude{" "}
                  <span style={{ color: "blueviolet" }}>
                    {getUserCurrentLocation.lat}
                  </span>{" "}
                  | Longitude{" "}
                  <span style={{ color: "blueviolet" }}>
                    {getUserCurrentLocation.lng}
                  </span>
                </span>
              </div>
            </div>
          </NavItem>
          <NavItem className="nav-logo">
            <NavLink href="#">Park N Go</NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default NavBar;
