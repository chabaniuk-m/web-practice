const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
  // Button click active class
  for (let i = 0; i < sectBtn.length; ++i) {
    sectBtn[i].addEventListener('click', function() {
       let currentBtn = document.querySelectorAll('.active-btn');
       console.log(currentBtn);
       currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
       this.className += ' active-btn';
    })
  }
}

PageTransition();