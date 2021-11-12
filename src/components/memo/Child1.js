import React from "react";

const Child1 = () => {
  console.log("component with out use of memo");
  return (
    <div>
      <div>child one component</div>
    </div>
  );
};

export default Child1;
