// const logo = document.getElementById('navbar-toggle');
// let toggle = false;
// 
// logo.addEventListener('click', function() {
//     console.log('log is',logo)
// 
//   toggle = !toggle;
//   if (toggle) {
//     logo.src = '../img/close.svg';
//   } else {
//     logo.src = '../img/menu.svg';
//   }
// });

const toggleIcon = document.getElementById('navbar-toggle');
const mobileMenuContainer = document.getElementById('navbar-list-mobile-container')
let isOpen = false;
function toggleMenu() {
    isOpen = !isOpen;
    console.log(toggleIcon.src);
    toggleIcon.src = isOpen ? '../img/close.svg' : '../img/menu.svg'
    mobileMenuContainer.style.display = isOpen ? 'block' : 'none';
}
toggleIcon.addEventListener('click', toggleMenu)

function cycleBackgroundImages() {
    const images = [
        'bg1.jpeg',
        'bg2.jpeg',
        'bg4.jpeg',
        'bg3.jpeg',
        'bg5.jpeg',
        'bg6.jpeg',
        'bg7.jpeg',
    ];



    setInterval(() => {
        // Select a random image from the list
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const backgroundElement = document.getElementById('header-container');
        backgroundElement.style.backgroundImage = `url("../img/${randomImage}")`;


    }, 2000);
}

// window.addEventListener('load', function () {
//     // your function here
//     cycleBackgroundImages()
// });

const navbar = document.getElementById('navbar');

function toggleNavbarBackgroundColorOnScroll() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 100) {
        navbar.classList.add('navbar-bg-dark')

    }

}

window.addEventListener('scroll', toggleNavbarBackgroundColorOnScroll);