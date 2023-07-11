import { render } from "preact";
import { App } from "./app.tsx";
import "./assets/fonts/stylesheet.css";
import "./styles/style.css";
import "./styles/main.css";
import "./styles/modal.css";

render(<App />, document.getElementById("app")!);
