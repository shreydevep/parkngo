import React from "react";
import { Card } from "reactstrap";
import { ButtonUpdate } from "./ButtonUpdate";
import "./Profile.css";
import RoundThumbnail from "./RoundThumbnail";
const Profile = () => {
  return (
    <>
      <div className="login">
        <h1>Park N Go</h1>
        <h4>Account Information</h4>
        <div className="accountInformation-container">
          <div className="profile-img">
            <img
              src="https://randomuser.me/api/portraits/women/22.jpg"
              alt="profile"
            />
            <div className="update-button">
              <ButtonUpdate buttonName={"Update Profile"} />
            </div>
          </div>

          <div className="account-information">
            <div>
              <label>Name</label>
              <input />
            </div>
            <div>
              <label>Email</label>
              <input />
            </div>
            <div>
              <label>Name</label>
              <input />
            </div>
            <div>
              <label>Name</label>
              <input />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
