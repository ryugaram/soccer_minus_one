import React from "react";
import { CircularProgress } from "@material-ui/core";

const UtilsCircularProgress = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress style={{ color: "green" }} />
    </div>
  );
};

export default UtilsCircularProgress;
