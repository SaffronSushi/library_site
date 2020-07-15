// ASSIGN VARS

// Navbar elements
const navAccountItem = document.getElementById('nav-account');
const navCatalogItem = document.getElementById('nav-catalog');
const navAboutItem = document.getElementById('nav-about');
const navItems = [navAccountItem, navCatalogItem, navAboutItem];
const navAccountUl = document.getElementById('nav-account-ul');
const navCatalogUl = document.getElementById('nav-catalog-ul');
const navAboutUl = document.getElementById('nav-about-ul');
const navUls = [navAccountUl, navCatalogUl, navAboutUl];

// Billboard elements
const bbBtn1 = document.getElementById('bb-btn-1');
const bbBtn2 = document.getElementById('bb-btn-2');
const bbBtn3 = document.getElementById('bb-btn-3');
const bbBtn4 = document.getElementById('bb-btn-4');
const bbBtns = [bbBtn1, bbBtn2, bbBtn3, bbBtn4];
const bbImg1 = document.getElementById('bb-img-1');
const bbImg2 = document.getElementById('bb-img-2');
const bbImg3 = document.getElementById('bb-img-3');
const bbImg4 = document.getElementById('bb-img-4');
const bbImgs = [bbImg1, bbImg2, bbImg3, bbImg4];

// Featured books elements
const featKidsUl = document.getElementById('feat-kids');
const featTeensUl = document.getElementById('feat-teens');
const featAdultsUl = document.getElementById('feat-adults');
const featUls = [featKidsUl, featTeensUl, featAdultsUl];
const featKidsBtn = document.getElementById('feat-btn-kids');
const featTeensBtn = document.getElementById('feat-btn-teens');
const featAdultsBtn = document.getElementById('feat-btn-adults');
const featBtns = [featKidsBtn, featTeensBtn, featAdultsBtn];

// Login status
let loggedIn = false;

// MAIN FUNCTIONS
// 
// 

// EVENT LISTENERS

// Navbar / Dropdown menu toggle
navItems.forEach(item =>
{
  item.addEventListener('click', () =>
  {
    // Get current ul
    let currentUl = document.querySelector('.nav-current');

    switch(currentUl)
    {
      // If no ul is open, assign specified ul as current
      case null:
        navUls[navItems.indexOf(item)].classList.add('nav-current');
        break;
      // If specified ul is already open, close
      case navUls[navItems.indexOf(item)]:
        currentUl.classList.remove('nav-current');
        break;
      // By default, remove class name from current ul and assign to specified
      default:
        currentUl.classList.remove('nav-current');
        navUls[navItems.indexOf(item)].classList.add('nav-current');
        break;
    }
  });
});

// Billboard page select
bbBtns.forEach(btn =>
{
  btn.addEventListener('click', () =>
  {
    // Get current img and btn
    let currentBtn = document.querySelector('.bb-btn-current');
    let currentImg = document.querySelector('.bb-img-current');
    // Reassign current img/btn based on btn index
    currentBtn.classList.remove('bb-btn-current');
    currentImg.classList.remove('bb-img-current');
    btn.classList.add('bb-btn-current');
    bbImgs[bbBtns.indexOf(btn)].classList.add('bb-img-current');
  });
});

// Featured book li toggle
featBtns.forEach(btn =>
  {
    btn.addEventListener('click', () =>
    {
      // Get current btn/ul
      let currentBtn = document.querySelector('.feat-btn-current');
      let currentUl = document.querySelector('.feat-ul-current');
      // Reassign current btn/ul based on btn index
      currentBtn.classList.remove('feat-btn-current');
      currentUl.classList.remove('feat-ul-current');
      btn.classList.add('feat-btn-current');
      featUls[featBtns.indexOf(btn)].classList.add('feat-ul-current');
    });
  });

  // Direct to login page if needed
  