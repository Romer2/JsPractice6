'use strict';

// 1 task

    console.log(document.querySelector('div'));
    console.log(document.querySelector('ul'));
    console.log(document.querySelector('ul > li:last-child'));

// 2 task

    let ulper = document.querySelectorAll('ul > li');
    for(let li of ulper) {
        console.log(li.innerHTML);
        li.classList.add('list-item');
        console.log(li.className)
    }

// 3 task

    let x = prompt("Введите цифру");

    for(let i = 0; i<x; i++){
        let body = document.querySelector('body');
        let div = document.createElement('div');
        div.className = 'squarelong';
        div.style.background = 'blue';
        div.style.width = '300px';
        div.style.height = '100px';
        div.style.margin = '40px';
        body.append(div);
    }

// 4 task

    let body = document.querySelector('body');
    let form = document.createElement('form');
    let inputName = document.createElement('input');
    let inputEmail = document.createElement('input');
    let btn = document.createElement('button');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.gap = '20px';
    form.style.width = '300px';

    inputName.placeholder = 'Введите имя';
    inputName.style.padding = '20px';

    inputEmail.placeholder = 'Введите email';
    inputEmail.style.padding = '20px';

    btn.innerHTML = 'Отправить';
    btn.style.padding = '20px';


    form.append(inputName, inputEmail, btn);
    body.append(form);
