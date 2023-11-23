import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";
import App from "./App";

function Test() {
  const [rate, setRate] = useState();
  return (
    <>
      <StarRating onSetRating={setRate} maxLength={5} />
      <p>This movie has {rate} Rating</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxLength={10} />
    <StarRating
      size={30}
      color="red"
      messages={["Worst", "Bad", "Okay", "Good", "Best"]}
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
