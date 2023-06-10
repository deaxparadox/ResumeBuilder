import React, { useState, useEffect } from "react";

import "./template1.css"
import { join } from "path";
import { time } from "console";


// 
// GET personal information from the user, and on save, writing the information to the template
// 
// 
function PersoanlContainer() {
    return (
        <div id="personal-container">
            <div id="personal-panel">
                <form action="" id="personal-form">
                    {/* fullname */}
                    <label htmlFor="fullname" id="">Fullname</label>
                    <input className="personal-input" id="personal-input-fullname" type="text" name="fullname" placeholder="fullname..." />

                    {/* address */}
                    <label htmlFor="address" id="">Address</label>
                    <input className="personal-input" id="personal-input-address" type="text" name="address" placeholder="address..." />

                    {/* phone */}
                    <label htmlFor="phone" id="">Phone</label>
                    <input className="personal-input" id="personal-input-phone" type="text" name="phone" placeholder="phone..." />

                    {/* email */}
                    <label htmlFor="email" id="">Email</label>
                    <input className="personal-input" id="personal-input-email" type="text" name="email" placeholder="email..." />
                </form>

                <button id="personal-save">
                    Save
                </button>
            </div>

        </div>
    )
}
// event listenners for user personal information
function Personal() {
    let active: boolean = false;
    let personal = document.querySelector("#personal") as HTMLDivElement;
    let personalContainer = document.querySelector("#personal-container") as HTMLDivElement;
    let save = document.querySelector("#personal-save") as HTMLButtonElement;
    personal.addEventListener("click", () => {
        personalContainer.style.width = "100vw"
        active = true
        console.log(`Personal information: ${active}`)
    })

    save.addEventListener("click", () => {
        personalContainer.style.width = "0vw"
        active = false
        console.log(`Personal information: ${active}`)
    })
    // 
    // 
    // 
    let personalSave = document.querySelector("#personal-save") as HTMLButtonElement;
    // onclick: save
    personalSave.onclick = () => {
        document.querySelectorAll(".personal-input").forEach((element) => {
            let name = element.getAttribute("name");
            console.log(name);
            let ipt = document.querySelector(`#personal-input-${name}`) as HTMLInputElement;
            let setPersonal = document.querySelector(`#personal-${name}`) as HTMLElement;
            if (ipt.value) {
                setPersonal.innerText = ipt.value;
                console.log(setPersonal.innerText)
            }

        })

        // let name = document.querySelector("#personal-input-name") as HTMLInputElement;
        // let setname = document.querySelector("#personal-fullname") as HTMLHeadingElement;
        // setname.innerText = name.value
        // console.log(setname.innerText);

        // let address = document.querySelector("#personal-input-address") as HTMLInputElement;
        // let setAddress = document.querySelector("#personal-address") as HTMLDListElement;
        // setAddress.innerText = address.value
        // console.log(setAddress.innerText);


        // let phone = document.querySelector("#personal-input-phone") as HTMLInputElement;
        // let setPhone = document.querySelector("#personal-phone") as HTMLDListElement;
        // setPhone.innerText = phone.value
        // console.log(setPhone.innerText);

        // let email = document.querySelector("#personal-input-email") as HTMLInputElement;
        // let setEmail = document.querySelector("#personal-email") as HTMLDListElement;
        // setEmail.innerText = email.value
        // console.log(setEmail.innerText);
    }
    // 
    // let personalSave2 = document.querySelector("#personal-save") as HTMLButtonElement;
    // 
    // event listener
    // document.onkeydown = (e) => {
    //     console.log(e.key)
    //     document.querySelectorAll(".personal-input").forEach((element) => {
    //         let name = element.getAttribute("name");
    //         console.log(name);
    //         let ipt = document.querySelector(`#personal-input-${name}`) as HTMLInputElement;
    //         let setPersonal = document.querySelector(`#personal-${name}`) as HTMLElement;
    //         if (ipt.value) {
    //             setPersonal.innerText = ipt.value;
    //         console.log(setPersonal.innerText)
    //         }

    //     })

    // }
}


// MAIN FUNCTION
function Template1() {
    const [personal, setPersonal] = useState({
        fullname: "fullname",
        phone: "phone",
        email: "email",
        address: "address"
    });

    useEffect(() => {
        Personal();
    }, [])

    return (
        <div id="template1">
            {/* 
            *   PERSONAL            
            */}
            <div id="personal">
                <h1 id="personal-fullname">{personal.fullname}</h1>
                <ul id="personal-list">
                    <li className="personal-listitem" id="personal-address">{personal.address}</li>
                    <li className="personal-listitem" id="personal-phone">{personal.phone}</li>
                    <li className="personal-listitem" id="personal-email">{personal.email}</li>
                </ul>
            </div>
            <PersoanlContainer />

            {/* 
            *
            * DESCRIPTION
            * 
            */}
            <div id="description">
                <p id="description-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ea itaque sunt possimus, dicta aspernatur esse? Architecto deserunt blanditiis, assumenda velit ducimus voluptas magnam harum rerum asperiores eum consequuntur dolore!. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio vitae at molestiae, qui unde ducimus quidem optio. Fugit tempora accusantium minima, rerum saepe in nemo cumque quod praesentium sunt cupiditate!
                </p>
            </div>
        </div>
    )
}

export default Template1