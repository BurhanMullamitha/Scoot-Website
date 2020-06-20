// Navigation Menu
let menu = document.querySelector('.navbar__mobile');
let overlay = document.querySelector('.overlay');

menu.addEventListener('click', function() {
    this.classList.toggle('active');
    this.parentElement.children[2].classList.toggle('active');
    overlay.classList.toggle('active');

    this.classList.contains('active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
})

// FAQ Accordion

let items = document.querySelectorAll('.accordion__item');

items.forEach(item => {
    item.addEventListener('click', function() {
        let answer = this.children[1];
        let currentArrow = this.children[0].children[1];

        currentArrow.classList.toggle('active');
        answer.classList.toggle('active');

        if(answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = this.scrollHeight + 'px';
        }

    });
});