import { button } from "./module.js";

button.onclick = (e) => {
    console.log(e.target.textContent);
};