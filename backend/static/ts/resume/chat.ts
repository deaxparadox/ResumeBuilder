interface Chat {
    show(): void;
    hide(): void;
}

class chat implements Chat {
    chatButton: HTMLButtonElement
    chatBox: HTMLDivElement
    chatBoxTitleClose: HTMLHeadElement
    constructor() {
        this.chatButton = document.querySelector("#chat-button") as HTMLButtonElement;
        this.chatBox = document.querySelector("#chat-box") as HTMLDivElement;
        this.chatBoxTitleClose = document.querySelector("#chat-box-title-close") as HTMLHeadElement;
    }
    show(): void {
        this.chatButton.addEventListener("click", () => {
            this.chatBox.style.display = "block";
            this.chatButton.style.display = "none";
            
        })      
    }
    hide(): void {
        this.chatBoxTitleClose.addEventListener("click", () => {
            this.chatButton.style.display = "block"  
            this.chatBox.style.display = "none"
        })        
    }
}


export default chat;