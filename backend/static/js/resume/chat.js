"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class chat {
    chatButton;
    chatBox;
    chatBoxTitleClose;
    constructor() {
        this.chatButton = document.querySelector("#chat-button");
        this.chatBox = document.querySelector("#chat-box");
        this.chatBoxTitleClose = document.querySelector("#chat-box-title-close");
    }
    show() {
        this.chatButton.addEventListener("click", () => {
            this.chatBox.style.display = "block";
            this.chatButton.style.display = "none";
        });
    }
    hide() {
        this.chatBoxTitleClose.addEventListener("click", () => {
            this.chatButton.style.display = "block";
            this.chatBox.style.display = "none";
        });
    }
}
exports.default = chat;
