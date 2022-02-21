import React from "react";

const RoundThumbnail = ({ imageUrl }) => {
  const customStyle = {
    border: "1px solid #03BFCB",
    borderRadius: "50%",
    padding: "7px",
  };
  return (
    <>
      <img style={customStyle} src={imageUrl} alt="user" />
    </>
  );
};

export default RoundThumbnail;
