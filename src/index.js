import React, { Fragment } from "react";
import { unstable_createRoot } from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const Global = createGlobalStyle`
  body {
    background-color: #000000;
  }
`;

// 새로 만들어진 Root 랜더 메소드.
const root = document.getElementById("root");

unstable_createRoot(root).render(
  <Fragment>
    <Global />
    <App />
  </Fragment>
);
