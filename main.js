'use strict';

const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.mobMenu');

btn.addEventListener('click', function () {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
});
