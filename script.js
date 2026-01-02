const menuBtn = document.querySelector('#hamburger-menu');
const menu = document.querySelector('.Menu')
menuBtn.onclick = ()=> {
  menu.classList.toggle('active');
  e.preventDefault()
}
document.addEventListener('click', function(e) {
    if(!menuBtn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('active');
    };
  });
