import { useState } from "react";
import GlanceCard from "./GlanceCard";

const Glance = (props) => {
  return (
    <div>
      <h1>At a Glance</h1>
      <GlanceCard nameOfClass='Thai' />
    </div>
  );
};

export default Glance;
