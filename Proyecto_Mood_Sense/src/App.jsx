import React from "react";
import Routing from "./Routes/Routing";
import { AuthContextProvider } from "./context/Context";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </div>
  );
};

export default App;
