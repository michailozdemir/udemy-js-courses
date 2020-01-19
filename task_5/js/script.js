'use strict';

let body = document.querySelector('body');
let menuWrapper = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');
let title = document.querySelector('#title');
let column = document.querySelectorAll('.column');
let advertisement = document.querySelector('.adv');
let promptBlock = document.getElementById('prompt');


// Menu replacement
menuWrapper.insertBefore(menuItems[2], menuItems[1]);


// Background change
body.style.backgroundImage = 'url("img/apple_true.jpg")';

// Title text change
title.innerHTML = 'Мы продаем только подлинную технику Apple';

// Remove advertisement block
column[1].removeChild(advertisement);  

// Question and writing result into prompt block
function appleQuestion() {
    let answer = prompt('Do you like Apple?');
    promptBlock.innerHTML = answer;
}

appleQuestion();