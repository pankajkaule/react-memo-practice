import React, { memo } from "react";

const Child2 = () => {
  console.log("component with use of the memo");
  return <div>Component 2</div>;
};

export default memo(Child2);
