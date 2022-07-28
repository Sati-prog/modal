"use strict";

document.addEventListener('DOMContentLoaded', () => {

    let chooseBtn = document.querySelector('#choose'),
          receiveBtn = document.querySelector('#receive'),
          heading = document.querySelector('.pulse'),
          nameInput = document.querySelector('.contactform_name'),
          phoneInput = document.querySelector('.contactform_phone'),
          mailInput = document.querySelector('.contactform_mail'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('.close'),
          text = document.getElementsByName('message')[0];
    
    chooseBtn.addEventListener('mouseenter', () => {

        heading.textContent = "Действительно все!";
    });

    chooseBtn.addEventListener('mouseleave', () => {
        
        heading.textContent = "Все включено!";
    });

    receiveBtn.addEventListener('click', () => {

        modal.style.display = 'block'; 
    });

    closeBtn.addEventListener('click', () => {

        modal.style.display = 'none';
    });

    nameInput.addEventListener('input', () => {

        text.value = `Меня зовут ${nameInput.value}. И я хочу спросить: `;
    });
});