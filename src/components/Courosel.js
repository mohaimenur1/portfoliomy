import React from "react";
import "../stylesheets/couresel.css";
import {
  FaReact,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

const Courosel = () => {
  return (
    <div>
      <div className="couresel-parent position-relative">
        <h1 className="position-absolute text-center top-0 mt-5 start-0 end-0">
          Technology I use
        </h1>
        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="cyan" />
          </span>
          <span style={{ "--i": 2 }}>
            <FaHtml5 color="orange" />
          </span>
          <span style={{ "--i": 3 }}>
            <SiCsswizardry color="#19B6F5" />
          </span>
          <span style={{ "--i": 4 }}>
            <FaFigma color="#BF258D" />
          </span>
          <span style={{ "--i": 5 }}>
            <FaBootstrap color="#7811F2" />
          </span>
          <span style={{ "--i": 6 }}>
            <FaNode color="#87BF00" />
          </span>
          <span style={{ "--i": 7 }}>
            <FaGitAlt color="#E84E32" />
          </span>
          <span style={{ "--i": 8 }}>
            <SiMongodb color="green" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courosel;
