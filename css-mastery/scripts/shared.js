/*
 * Modal related code - popup
 */

let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNo = document.querySelector('.modal__action--negative');
let mainNavCTA = document.querySelector('.main-nav__item:nth-last-of-type(1)');

function openModal() {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    // Modifying class parameters directly
    backdrop.classList.add('open');
    modal.classList.add('open');
}

function closeModal() {
    backdrop.classList.remove('open');
    if(modal){
        modal.classList.remove('open');
    }
    closeMenu();
}

// Popup for Modal on click of plans
selectPlanButtons.forEach(el => {
    el.addEventListener('click', openModal)
});

// Close popup when clicking background or No button
backdrop.addEventListener('click', closeModal);
if(modalNo){
    modalNo.addEventListener('click', closeModal);
}

/*
 * Side Menu - Popup/Hide Code
 */

var toggleMenuButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

function openMenu() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}

function closeMenu() {
    mobileNav.classList.remove('open');
}

toggleMenuButton.addEventListener('click', openMenu);

mainNavCTA.addEventListener('animationend', function(event) {
    // console.log('Main Nav Finished Animation: ', event);
});