const React = require("react");
const { render } = require("react-dom");

import { hashify } from "spanify";
import * as d3 from "d3";
import stickybits from "stickybits";

hashify({ hashList: ["interactive"] }); // turn CoreMedia hashtags into divs

d3.select("body").style("background-color", "#1a1a1a");

d3.select("div.interactive").classed("u-full", true);

const PROJECT_NAME = "interactive";
const root = document.querySelector(".interactive");

// stickybits('.interactive');

const init = () => {
  const App = require("./components/App/App.js");
  render(<App projectName={PROJECT_NAME} />, root);
};

init();

if (module.hot) {
  module.hot.accept("./components/App/App.js", () => {
    try {
      init();
    } catch (err) {
      const ErrorBox = require("./components/ErrorBox");
      render(<ErrorBox error={err} />, root);
    }
  });
}

if (process.env.NODE_ENV === "development") {
  console.debug(`[${PROJECT_NAME}] public path: ${__webpack_public_path__}`);
}
