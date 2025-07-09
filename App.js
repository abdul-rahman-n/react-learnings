import React from "react";
import ReactDOM from "react-dom/client";

const JxHeading = () => (
  <h1 className="head" tabIndex="6">
    Vanakam da Mapla from JSX
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <JxHeading />
    <h1>Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
