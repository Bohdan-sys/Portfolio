//modules

import { burger, items, toggler } from './burger.js';

window.addEventListener('DOMContentLoaded', function () {

    if (window.innerWidth < 768) {
        burger.addEventListener('click', () => toggler(burger));
        items.forEach((item, i) => { item.addEventListener('click', () => toggler(item)) });
    };

    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

});