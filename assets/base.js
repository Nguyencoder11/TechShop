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


