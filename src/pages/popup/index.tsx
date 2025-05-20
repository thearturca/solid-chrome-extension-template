import "@src/styles/index.css";
import "./index.css";
import { render } from "solid-js/web";
import Popup from "./popup";

const appContainer = document.querySelector("#app-container");
if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

render(Popup, appContainer);
