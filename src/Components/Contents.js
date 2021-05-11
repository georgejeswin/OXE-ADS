import React from "react";
import "./Contents.css";
import Process from "./Process";
import Services from "./Services";
import Work from "./Work";
const Contents = () => {
  return (
    <div className="contents">
      <Services />
      <Process />
      <Work />
    </div>
  );
};

export default Contents;
