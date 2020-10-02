import React from "react";
import { BackdropContainer } from "./Styles";

const BackDrop = (props) => {
  return (
    <BackdropContainer onClick={props.clickEvent}>
      {" "}
      <div className="backdrop" />
    </BackdropContainer>
  );
};

export default BackDrop;
