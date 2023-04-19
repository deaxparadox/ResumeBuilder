console.log('template script')

export default function changeTemplates() {
    const templates: NodeListOf<HTMLImageElement> = document.querySelectorAll(".template-list");
    const templateActive: HTMLDivElement = document.querySelector(".content .template1") as HTMLDivElement;
    for (const tem of templates) {
        tem.addEventListener('click', (e) => {
            // console.log(`Active: ${templateActive.className}`)
            templateActive.classList.remove(templateActive.className);

            // console.log(templateActive.classList, tem.classList);
            const activating = tem.classList[1];
            // console.log(activating);
            templateActive.classList.add(activating);
        })
    }
}
