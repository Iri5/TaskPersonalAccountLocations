import { modalController } from "./modules/modalController.js";
let a = 'locations__add-button';
document.addEventListener("DOMContentLoaded", init);

function init(){
    console.log('init');
    modalController({
        modal: '.modal-add-location',
        btnOpen: '.locations__add-button',
        btnClose: '.modal__close'
    });
    modalController({
        modal: '.modal-edit-location',
        btnOpen: '.locations__edit-button',
        btnClose: '.modal__close'
    });
}