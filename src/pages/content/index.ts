import "@src/styles/index.css";
import { render } from "solid-js/web";
import Content from "./content";

const root = document.createElement("div");
root.id = "extension-root";
document.body.append(root);

render(Content, root);
