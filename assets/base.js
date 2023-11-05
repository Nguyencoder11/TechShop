// Automatic Slideshow - change image every 4 seconds
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
    searchIcon.style.background = 'white';
    spanIcon.style.color = 'gray';
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
var mobileBarBtn = document.querySelector(".menu-icon-on-mobile");
var mobileCloseBtn = document.querySelector(".drawer__close-button");
var navDrawer = document.querySelector("#navDrawer");
mobileBarBtn.addEventListener('click', function () {
    html.classList.add("js-drawer-open", "js-drawer-open-left");
    document.body.classList.add("js-drawer-open", "js-drawer-open-left");
    app.classList.add("is-transitioning");
    navDrawer.setAttribute("tabindex", "-1");
});

mobileCloseBtn.addEventListener('click', function () {
    html.classList.remove("js-drawer-open", "js-drawer-open-left");
    document.body.classList.remove("js-drawer-open", "js-drawer-open-left");
    app.classList.remove("is-transitioning");
    navDrawer.setAttribute("tabindex", "");
});
