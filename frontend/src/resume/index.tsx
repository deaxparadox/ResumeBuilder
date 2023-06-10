import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import React, { useState, useEffect } from 'react';
import "./resume.css"

import Template1 from './template1/template1';
import Template2 from './template2/template2';




// 
// 
// TEMPLATES
// 
// 
// 
const changeTemplate = async () => {
    // current template
    let currentTemplate = document.querySelector("#resume-container") as HTMLDivElement;

    // template1
    let template1 = document.querySelector("#resume-container1") as HTMLDivElement;
    template1.addEventListener("click", () => {
        currentTemplate.innerHTML = template1.innerHTML;
        console.log(currentTemplate.innerHTML)
    })

    // template2
    let template2 = document.querySelector("#resume-container2") as HTMLDivElement;
    template2.addEventListener("click", () => {
        currentTemplate.innerHTML = template2.innerHTML;
        console.log(currentTemplate.innerHTML)
    })
}
// 
function Page() {
    useEffect(() => {
        changeTemplate()
    }, [])
    return (
        <div id="resume-container">
            <Template1 />
        </div>
    )
}

// 
// 
// 
// FLOAT INFORMATION 
// for information generating page.
// user need to provide information, so it can be render in template.
// 
// 
// 
const ShowInformation = async () => {
    let active: boolean = false
    let button = document.querySelector("#information-button") as HTMLButtonElement;
    let informationPanel = document.querySelector("#information-panel") as HTMLDivElement;
    let informationSave = document.querySelector("#information-save") as HTMLButtonElement;
    button.addEventListener("click", () => {
        if (!active) {
            informationPanel.style.width = "80vw";
            active = true;
            console.log(`information panel: ${active}`);
        }
    })
    informationSave.addEventListener("click", () => {
        if (active) {
            informationPanel.style.width = "0vw";
            active = false;
            console.log(`information panel: ${active}`)
        }
    })
}
// 
enum ValueState {
    Emtpy,
    NonEmpty,
}
const FloatInformation = () => {
    const [form, setForm] = useState({
        personal: {
            fullname: "full name",
            email: "email",
            phone: "phone",
            url: [],
        },
        summary: "summary",
        skill: "skill",
        education: "education",
    });
    const [value, setValue] = useState("");

    useEffect(() => {
        ShowInformation();
    }, [])

    let modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    let formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]


    return (
        <div id="information-container">
            <div id="information">
                <button id="information-button">
                    info
                </button>
                <div id="information-panel">
                    <div id="form">

                        <ReactQuill 
                            modules={modules}
                            formats={formats}
                            theme="snow" 
                            onChange={setValue} 
                        ></ReactQuill>

                        <button id="information-save">
                            save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



// 
// 
// 
// FLOAT TEMPLATE 
// for selecting template from the given list.
// 
// 
// 
const floatTemplate = (
    <div id="float-template-container">
        <div id="float-template-list">
            <button id="float-template-list-button">
                Templates
            </button>
            <div id="float-template-list-panel">
                <div id="template-list">
                    <div className='template-listitem' id="resume-container1">
                        <Template1 />
                    </div>
                    <div className='template-listitem' id="resume-container2">
                        <Template2 />
                    </div>
                </div>
            </div>

        </div>
    </div>
)
// 
const showFloatTemplateContainer = async () => {
    let active: boolean = false;
    let floatButton = document.querySelector("#float-template-list-button") as HTMLButtonElement;
    let floatContainer = document.querySelector("#float-template-list-panel") as HTMLDivElement;
    floatButton.addEventListener("click", function () {
        if (!active) {
            floatContainer.style.transform = "scale(1, 1)";
            active = true
        } else {
            floatContainer.style.transform = "scale(1, 0)";
            active = false
        }
    })

}


// 
// 
// RESUME: MAIN FUNCTION
// 
// 

function Resume() {
    useEffect(() => {
        showFloatTemplateContainer();
    }, [])
    return (
        <div id='resume-page'>
            <FloatInformation />

            <Page />

            {/* list available template */}
            {floatTemplate}
        </div>
    )
}

export default Resume