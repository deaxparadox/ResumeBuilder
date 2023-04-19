"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('template script');
function changeTemplates() {
    const templates = document.querySelectorAll(".template-list");
    const templateActive = document.querySelector(".content .template1");
    for (const tem of templates) {
        tem.addEventListener('click', (e) => {
            // console.log(`Active: ${templateActive.className}`)
            templateActive.classList.remove(templateActive.className);
            // console.log(templateActive.classList, tem.classList);
            const activating = tem.classList[1];
            // console.log(activating);
            templateActive.classList.add(activating);
        });
    }
}
exports.default = changeTemplates;
