const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');

menuToggle.onclick = function() {
  navigation.classList.toggle('active');
}

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));
