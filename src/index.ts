import { validation } from "./validation"

const v = new validation();
const button = document.getElementById("regist");
button.onclick = v.check;