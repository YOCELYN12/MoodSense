import React from "react";
import Routing from "./Routes/Routing";
import { MoodGlobalContext } from "./context/Context";

const App = () => {
  return (
    <div>
      <MoodGlobalContext>
        <Routing />
      </MoodGlobalContext>
    </div>
  );
};

export default App;
