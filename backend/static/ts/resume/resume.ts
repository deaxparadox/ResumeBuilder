import { jsPDF } from 'jspdf';
import _ from 'lodash';

import changeTemplates from './template';

// const doc = new jsPDF();
// doc.text("hello world!", 10, 10);
// doc.save("test.pdf")

type PersonalInfo =  number|string|null;

class Personal {
    #firstName: PersonalInfo;
    #lastName: PersonalInfo;
    #address: PersonalInfo;
    #phone: PersonalInfo;
    #email: PersonalInfo;
    constructor() {
        this.#firstName = null;
        this.#lastName = null;
        this.#address = null;
        this.#phone = this.#email = null;
    }

    // getter for firstname name
    // lastname, address, phone, email
    get firstName(): PersonalInfo {
        return this.#firstName
    }    
    get lastName(): PersonalInfo {
        return this.#lastName
    }
    get address(): PersonalInfo {
        return this.#address
    }
    get phone(): PersonalInfo {
        return this.#phone
    }
    get email(): PersonalInfo { return this.#email}

    async find() {

        const inputs: NodeListOf<HTMLInputElement>  = document.querySelectorAll<"input">("input");
        for (let ipt of inputs) {
            
            if (ipt.getAttribute("name") === "firstname") {
                ipt.addEventListener("input", () => {
                    this.#firstName = ipt.value;
                    console.log(ipt.value)
                })        
            }

            if (ipt.getAttribute("name") === "lastname") {
                ipt.addEventListener("input", () => {
                    this.#lastName = ipt.value;
                    console.log(ipt.value)
                })        
            }

            if (ipt.getAttribute("name") === "address") {
                ipt.addEventListener("input", () => {
                    this.#address = ipt.value;
                    console.log(ipt.value)
                })        
            }

            if (ipt.getAttribute("name") === "phone") {
                ipt.addEventListener("input", () => {
                    this.#phone = ipt.value;
                    console.log(ipt.value)
                })        
            }

            if (ipt.getAttribute("name") === "email") {
                ipt.addEventListener("input", () => {
                    this.#email = ipt.value;
                    console.log(ipt.value)
                })        
            }
            
        }
    }
}

function showPersonal() {
    const personal = document.querySelector(".personal h4") as HTMLDivElement;
    const personalContainer = document.querySelector(".personal .personal-container") as HTMLDivElement;
    const i = personal.firstElementChild as HTMLElement;
    // console.log(personal.firstChild)
    // console.log(personal.firstElementChild);
    personal.addEventListener('click', (e) => {
        console.log(personalContainer.style.display)
        if (personalContainer.style.display === "none") {
            personalContainer.style.display = "block";
            // 
            i.style.transform = "rotateX(180deg)";
            i.style.transition = "transform .6s"
            
        } else {
            personalContainer.style.display = "none";
            // 
            i.style.transform = "rotate(0deg)";
            i.style.transition = "transform .6s"
        }
        
    })

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



(function() {
    changeTemplates();

    let p = new Personal();
    p.find()

    showPersonal();

    const button = document.querySelector(".show-details");
    button?.addEventListener("click", (e: any) => {
        console.log(p.firstName, p.lastName, p.address);
        alert(`
            firstname: ${p.firstName}
            lastname: ${p.lastName}
            address: ${p.address}
            phone: ${p.phone}
            email: ${p.email}
            Other details!
        `)
    })
}
)();

