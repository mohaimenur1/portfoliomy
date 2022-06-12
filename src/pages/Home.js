import React from "react";
import Header from "../components/Header";
import "../stylesheets/home.css";
import Courosel from "../components/Courosel";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center "
        style={{
          backgroundImage: `url('https://raw.githubusercontent.com/mohaimenur1/portimages/1ae1ff7d7ae12db50fda91c6a02c6f2a96508e2d/introbg.svg')`,
        }}
      >
        <div>
          <h1>Rahi</h1>
          <div className="intro-section d-flex justify-content-between">
            <p>
              MERN Stack
              <br /> Developer , Instructor{" "}
            </p>
            <button className="primary-button">Get Started</button>
          </div>
        </div>
      </div>
      {/* Couresel component */}
      <Courosel />
    </div>
  );
};

export default Home;
