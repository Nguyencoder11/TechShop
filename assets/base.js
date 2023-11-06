// Automatic Slideshow - change image every 5 seconds
var myIndex = 0;
nextSlide();
function nextSlide() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    // Thoi gian delay giua hai hoat canh
    setTimeout(nextSlide, 5000);
}


// Focus Input
var searchIcon = document.querySelector('.header__search-icon--first');
var searchInput = document.querySelector('.search-input');
var spanIcon = document.querySelector('.span-icon--search');
searchIcon.addEventListener('click', function () {
    searchInput.style.display = 'block';
    searchIcon.style.background = '#fff';
    spanIcon.style.color = 'rgb(165, 0, 165)';
});


// When clicking anywhere not be search-icon -> display input none
document.addEventListener('click', function (event) {
    const isClickInside = searchIcon.contains(event.target) || searchInput.contains(event.target);
    if (!isClickInside) {
        searchInput.style.display = 'none';
        searchIcon.style.background = 'none';
        spanIcon.style.color = 'white';
    }
});


// Menu left
var mobileNavHasSublist = document.querySelectorAll(".mobile-nav__has-sublist");
mobileNavHasSublist.forEach(function (item) {
    var mobileNav_toogleBtn = item.querySelector(".mobile-nav__toogle-btn");
    var sideSubmenu = item.querySelector(".mobile-nav__sublist");

    mobileNav_toogleBtn.addEventListener("click", function () {
        item.classList.toggle("mobile-nav--expanded");
        // sideSubmenu.style.maxHeight = item.classList.contains("mobile-nav--expanded") ? "700px" : "0";

        var toogleOpenBtn = item.querySelector(".mobile-nav__toogle-open");
        var toogleCloseBtn = item.querySelector(".mobile-nav__toogle-close");
        mobileNav_toogleBtn.setAttribute("aria-expanded", item.classList.contains("mobile-nav--expanded"));

        if (item.classList.contains("mobile-nav--expanded")) {
            toogleOpenBtn.style.display = "none";
            toogleCloseBtn.style.display = "block";
        } else {
            toogleOpenBtn.style.display = "block";
            toogleCloseBtn.style.display = "none";
        }
    });
});


// Open and close menu on mobile screeen
var html = document.querySelector('html');
var app = document.querySelector(".app");

var menubarIcon = document.querySelector(".menu-icon-on-mobile");
var cartIcon = document.querySelector(".header__search-icon.header__search-icon--second");

var navDrawerCloseBtn = document.querySelector(".nav-drawer__close-button");
var cartDrawerCloseBtn = document.querySelector(".cart-drawer__close-button");

var navDrawer = document.querySelector("#navDrawer");
var cartDrawer = document.querySelector("#cartDrawer");

// Open navDrawer
menubarIcon.addEventListener('click', function () {
    html.classList.add("js-drawer-open", "js-drawer-open-left");
    document.body.classList.add("js-drawer-open", "js-drawer-open-left");
    app.classList.add("is-transitioning");
    navDrawer.setAttribute("tabindex", "-1");
});

// Open cartDrawer
cartIcon.addEventListener("click", function () {
    html.classList.add("js-drawer-open", "js-drawer-open-right");
    document.body.classList.add("js-drawer-open", "js-drawer-open-right");
    app.classList.add("is-transitioning");
    cartDrawer.setAttribute("tabindex", "-1");
});

// Close navDrawer
navDrawerCloseBtn.addEventListener('click', function () {
    html.classList.remove("js-drawer-open", "js-drawer-open-left");
    document.body.classList.remove("js-drawer-open", "js-drawer-open-left", "js-drawer-open-right");
    app.classList.remove("is-transitioning");
    navDrawer.setAttribute("tabindex", "");
});

// Close cartDrawer
cartDrawerCloseBtn.addEventListener('click', function () {
    html.classList.remove("js-drawer-open", "js-drawer-open-right");
    document.body.classList.remove("js-drawer-open", "js-drawer-open-right");
    app.classList.remove("is-transitioning");
    cartDrawer.setAttribute("tabindex", "");
});
