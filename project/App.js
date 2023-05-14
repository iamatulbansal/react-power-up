import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./src/components/Home";

const App = () => {
  return (
    <div>
      <h1>React-App</h1>
      <Home />
    </div>
  );
};
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
