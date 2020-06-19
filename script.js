// FAQ Accordion

let items = document.querySelectorAll('.accordion__item');

items.forEach(item => {
    // console.log(item);
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