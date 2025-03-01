import ReactDOM from "react-dom";
import React from "react";


const root = document.querySelector("#parent");
const reactRoot = ReactDOM.createRoot(root);

const Title = <h1>Hello</h1>

reactRoot.render(Title);