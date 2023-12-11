import React from "react";
import createRoot from "react-dom/client";

const App = () => {
  const buttonText = "Hello world";
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter e-mail
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

createRoot(document.querySelector("#root")).render(<App />);
