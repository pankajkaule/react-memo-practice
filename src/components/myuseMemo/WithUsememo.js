import React, { memo } from "react";

const WithUsememo = () => {
  console.log("with usememo");
  return <div></div>;
};

export default memo(WithUsememo);
