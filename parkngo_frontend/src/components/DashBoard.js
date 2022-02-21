import { useRef } from "react";
import SideBoard from "./UI/SideBoard";
import "./DashBoard.css";
import MainBoard from "./UI/MainBoard";
import NavBar from "./UI/NavBar";

const Dashboard = () => {
  //Sideboard
  //MainBoard
  const myLocationRef = useRef(null);
  const widgetsClickHandler = () => {
  };
  return (
    <>
      <div className="dashboard">
        <SideBoard
          myLocationRef={myLocationRef}
          widgetsClickHandler={widgetsClickHandler}
        />
        <MainBoard
          myLocationRef={myLocationRef}
          widgetsClickHandler={widgetsClickHandler}
        />
      </div>
    </>
  );
};

export default Dashboard;
