import "@src/styles/index.css";
import { render } from "solid-js/web";
import Panel from "./panel";

const appContainer = document.querySelector("#app-container");

if (!appContainer) {
  throw new Error("Can not find AppContainer");
}

render(Panel, appContainer);
