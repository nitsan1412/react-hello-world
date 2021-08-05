import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { helloEl1, helloEl2, helloEl3, helloEl4, helloEl5 } from "./HelloEl";

// console.log(helloEl);

ReactDOM.render(helloEl1, document.getElementById("root1"));
ReactDOM.render(helloEl2, document.getElementById("root2"));
ReactDOM.render(helloEl3, document.getElementById("root3"));
ReactDOM.render(helloEl4, document.getElementById("root4"));
ReactDOM.render(helloEl5, document.getElementById("root5"));
