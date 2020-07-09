// When getting books from database, turn them each into objects

// Mobile/dropdown nav list items
const navAccount = document.getElementById('nav-account-li');
const navCatalog = document.getElementById('nav-catalog-li');
const navAbout = document.getElementById('nav-about-li');
const dropElements = [navAccount, navCatalog, navAbout];

// Billboard images
const img1 = document.getElementById('first-img');
const img2 = document.getElementById('second-img');
const img3 = document.getElementById('third-img');
const img4 = document.getElementById('fourth-img');
const bbImgs = [img1, img2, img3, img4];
// Billboard buttons
const bbBtn1 = document.getElementById('bb-first-btn');
const bbBtn2 = document.getElementById('bb-second-btn');
const bbBtn3 = document.getElementById('bb-third-btn');
const bbBtn4 = document.getElementById('bb-fourth-btn');
const bbBtns = [bbBtn1, bbBtn2, bbBtn3, bbBtn4];

// Featured book buttons
const featKidsBtn = document.getElementById('featured-kids-btn');
const featTeensBtn = document.getElementById('featured-teens-btn');
const featAdultsBtn = document.getElementById('featured-adults-btn');
const featBtns = [featKidsBtn, featTeensBtn, featAdultsBtn];
// Featured book lists
const featKidsLi = document.getElementById('featured-kids');
const featTeensLi = document.getElementById('featured-teens');
const featAdultsLi = document.getElementById('featured-adults');
const featLi = [featKidsLi, featTeensLi, featAdultsLi];

// EVENT LISTENERS

// Mobile/Dropdown elements

// NOTE: Currently done using the :hover property in css
//       May want to change to button input for more intuitive UI

// dropElements.forEach( element => {
//   // Show/hide dropdown item on click
//   element.onclick = () => {
//     // Remove class name from all nav items
//     for(let i=0; i<dropElements.length; i++) {
//       element.classList.remove('nav-show');
//     }
//     // Add 'nav-show' class name to element
//     element.classList.add('nav-show');
//   }
// });

// Billboard imgs/btns
bbBtns.forEach(button => {
  // On button click show corresponding image
  button.onclick = () => {
    let index ;

    // Remove 'bb-btn-current' & 'bb-img-current' class names from all buttons/images
    for(let i=0; i<bbBtns.length; i++) {
      bbBtns[i].classList.remove('bb-btn-current');
      bbImgs[i].classList.remove('bb-img-current');
    };

    // Add class name to corresponding button and img
    button.classList.add('bb-btn-current');
    bbImgs[indexof(button)].classList.add('bb-img-current');
  }
});

// Featured buttons
featBtns.forEach(button => {
  // On button click show corresponding list
  button.onclick = () => {
    let index;

    // Remove 'current' class name from all lists
    for(let i=0; i<featLi.length; i++) {
      featLi[i].classList.remove('current');
    }

    // Get the list index of button clicked
    index = featBtns.indexOf(button);
    // Add 'current' class name to corresponding list
    featLi[index].classList.add('current');
  }
});