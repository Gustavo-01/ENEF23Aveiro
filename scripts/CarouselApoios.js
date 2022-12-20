window.addEventListener('load', function () {
    var eles = document.getElementsByClassName('review');
    console.log(eles);
    console.log(eles.length);
    console.log(eles[0]);
})

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;

    var slides = document.getElementsByClassName("SupportHolder");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    console.log(slides)
    console.log(slidePosition-1)
    console.log(slides.item(slidePosition-1))
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";
} 
