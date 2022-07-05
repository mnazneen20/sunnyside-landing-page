const hamburger = document.querySelector('.hamburger');
const mobilemenu = document.querySelector('.mobilemenu-div');
let isOpen = false;
hamburger.addEventListener('click', ()=> {
        hamburger.classList.toggle('open');
        mobilemenu.classList.toggle('show');
})