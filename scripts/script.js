
function darkenBack(darken) {

    if (window.matchMedia("(max-width: 750px)").matches) { return; }

    if (darken) { document.getElementById("logo_back_img").style.opacity = "0.2"; }
    else { document.getElementById("logo_back_img").style.opacity = "0"; }
}

function show_map() {
    document.getElementById("map_holder").style.height = "80vh";
}

var scrollInterval;
window.onload = function () {

    //MobileSupport
    MobileCheck();

    //Navbar
    navbar_bublleClick("1");

    //Loading page
    document.getElementById("loading_page").style.opacity = "0";

    //Sponsors auto-scroll
    window.sponsorTab = document.getElementById("supportContainer");
    self.setInterval(() => {                //200vw + 8 * gap
        if (window.sponsorTab.scrollLeft > window.innerWidth * 2 + 400) {
            window.sponsorTab.scrollLeft = 0;
        }
        window.sponsorTab.scrollTo(window.sponsorTab.scrollLeft + 1, 0); // control velocity here
    }, 4); //or here
}



