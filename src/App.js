import "./App.css";
import { useState, useMemo, useEffect, useCallback, useContext } from "react";
import ThemeStore from "./components/context/Theme";
// import Child1 from "./components/memo/Child1";
// import Child2 from "./components/memo/Child2";
// import WithUsememo from "./components/myuseMemo/WithUsememo";
// import Child from "./components/usecallback/Child";

import Contextcard from "./components/cards/Contextcard";

const App = () => {
  // const [counter, setcounter] = useState(0);

  /*======================================================
  |     need of use memo hook
  |=======================================================*/
  // const array = ["one", "two", "three"];

  // const array = useMemo(() => {
  //   return ["one", "two", "three"];
  // }, []);

  /*======================================================
  |     need of usecallback hook
  |=======================================================*/

  // const fetchdata = useCallback((type) => {
  //   return fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  /*======================================================
  |     useContext Hook
  |=======================================================*/
  // const theme = useContext(ThemeContext);

  return (
    <ThemeStore>
      <div className="App">
        {/*======================================================
      |     memo hooks practice 
      |=======================================================*/}
        {/* <div>
        <h1>{counter}</h1>
        <button
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "green",
          }}
          onClick={() => {
            setcounter(counter + 1);
          }}
        >
          click here
        </button>

        <Child1 />
        <Child2 />
      </div> */}
        {/*======================================================
      |     usememo hooks practice 
      |=======================================================*/}
        {/* <div>
        <h1>useMemo</h1>
        <h1>{counter}</h1>
        <button
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "green",
          }}
          onClick={() => {
            setcounter(counter + 1);
          }}
        >
          ckick here
        </button>

        <WithUsememo array={array} />
      </div> */}

        {/*======================================================
      |     usecallback hooks practice 
      |=======================================================*/}
        {/* <div>
        <h1>USECALLBACK HOOK</h1>
        <h1>{counter}</h1>
        <button
          style={{
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "green",
          }}
          onClick={() => {
            setcounter(counter + 1);
          }}
        >
          {" "}
          click here
        </button>
        <Child fetchdata1={fetchdata} />
      </div> */}

        <div>
          <Contextcard />
        </div>
      </div>
    </ThemeStore>
  );
};

export default App;
