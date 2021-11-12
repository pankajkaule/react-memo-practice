import React, { memo } from "react";

const Child = (props) => {
  console.log("child Rerendered..");
  React.useEffect(() => {
    props.fetchdata1("users");
  }, [props, props.fetchdata1]);
  return <div></div>;
};

export default memo(Child);
