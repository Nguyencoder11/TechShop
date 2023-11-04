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
    var sideMenuBtn = item.querySelector(".mobile-nav__toogle-btn");
    var sideSubmenu = item.querySelector(".mobile-nav__sublist");

    sideMenuBtn.addEventListener("click", function () {
        item.classList.toggle("mobile-nav--expanded");
        // sideSubmenu.style.maxHeight = item.classList.contains("mobile-nav--expanded") ? "700px" : "0";

        var sideMenuOpen = item.querySelector(".mobile-nav__toogle-open");
        var sideMenuClose = item.querySelector(".mobile-nav__toogle-close");
        sideMenuBtn.setAttribute("aria-expanded", item.classList.contains("mobile-nav--expanded"));

        if (item.classList.contains("mobile-nav--expanded")) {
            sideMenuOpen.style.display = "none";
            sideMenuClose.style.display = "block";
        } else {
            sideMenuOpen.style.display = "block";
            sideMenuClose.style.display = "none";
        }
    });
});


// Open and close menu on mobile screeen
var menuMobileBtn = document.querySelector(".menu-icon-on-mobile");
var closeMenuIcon = document.querySelector(".drawer__close-button");
var appContent = document.querySelector(".app");
var html = document.querySelector('html');
menuMobileBtn.addEventListener('click', function () {
    appContent.style.transform = "translateX(300px)";
    appContent.style.overflow = "hidden";
    html.classList.add("js-drawer-open", "js-drawer-open-left");
    document.body.classList.add("js-drawer-open", "js-drawer-open-left");
});

closeMenuIcon.addEventListener('click', function () {
    appContent.style.transform = "translateX(0)";
    appContent.style.overflow = "auto";
    html.classList.remove("js-drawer-open", "js-drawer-open-left");
    document.body.classList.remove("js-drawer-open", "js-drawer-open-left");
});
