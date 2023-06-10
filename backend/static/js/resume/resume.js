"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = __importDefault(require("./template"));
const chat_1 = __importDefault(require("./chat"));
class Personal {
    #firstName;
    #lastName;
    #address;
    #phone;
    #email;
    constructor() {
        this.#firstName = null;
        this.#lastName = null;
        this.#address = null;
        this.#phone = this.#email = null;
    }
    // getter for firstname name
    // lastname, address, phone, email
    get firstName() {
        return this.#firstName;
    }
    get lastName() {
        return this.#lastName;
    }
    get address() {
        return this.#address;
    }
    get phone() {
        return this.#phone;
    }
    get email() { return this.#email; }
    async find() {
        const inputs = document.querySelectorAll("input");
        for (let ipt of inputs) {
            if (ipt.getAttribute("name") === "firstname") {
                ipt.addEventListener("input", () => {
                    this.#firstName = ipt.value;
                    console.log(ipt.value);
                });
            }
            if (ipt.getAttribute("name") === "lastname") {
                ipt.addEventListener("input", () => {
                    this.#lastName = ipt.value;
                    console.log(ipt.value);
                });
            }
            if (ipt.getAttribute("name") === "address") {
                ipt.addEventListener("input", () => {
                    this.#address = ipt.value;
                    console.log(ipt.value);
                });
            }
            if (ipt.getAttribute("name") === "phone") {
                ipt.addEventListener("input", () => {
                    this.#phone = ipt.value;
                    console.log(ipt.value);
                });
            }
            if (ipt.getAttribute("name") === "email") {
                ipt.addEventListener("input", () => {
                    this.#email = ipt.value;
                    console.log(ipt.value);
                });
            }
        }
    }
}
function showPersonal() {
    const personal = document.querySelector(".personal h4");
    const personalContainer = document.querySelector(".personal .personal-container");
    const i = personal.firstElementChild;
    // console.log(personal.firstChild)
    // console.log(personal.firstElementChild);
    personal.addEventListener('click', (e) => {
        console.log(personalContainer.style.display);
        if (personalContainer.style.display === "none") {
            personalContainer.style.display = "block";
            // 
            i.style.transform = "rotateX(180deg)";
            i.style.transition = "transform .6s";
        }
        else {
            personalContainer.style.display = "none";
            // 
            i.style.transform = "rotate(0deg)";
            i.style.transition = "transform .6s";
        }
    });
}
// console.log('template script')
// export default function changeTemplates() {
//     const templates: NodeListOf<HTMLImageElement> = document.querySelectorAll(".template-list");
//     const templateActive: HTMLDivElement = document.querySelector(".content .template1") as HTMLDivElement;
//     for (const tem of templates) {
//         tem.addEventListener('click', (e) => {
//             // console.log(`Active: ${templateActive.className}`)
//             templateActive.classList.remove(templateActive.className);
//             // console.log(templateActive.classList, tem.classList);
//             const activating = tem.classList[1];
//             // console.log(activating);
//             templateActive.classList.add(activating);
//         })
//     }
// }
(function () {
    (0, template_1.default)();
    let c = new chat_1.default();
    c.show();
    c.hide();
    let p = new Personal();
    p.find();
    showPersonal();
    const button = document.querySelector(".show-details");
    button?.addEventListener("click", (e) => {
        console.log(p.firstName, p.lastName, p.address);
        alert(`
            firstname: ${p.firstName}
            lastname: ${p.lastName}
            address: ${p.address}
            phone: ${p.phone}
            email: ${p.email}
            Other details!
        `);
    });
})();
