
function darkenBack(darken) {

    if (window.matchMedia("(max-width: 750px)").matches) { return; }

    if (darken) { document.getElementById("logo_back_img").style.opacity = "0.2"; }
    else { document.getElementById("logo_back_img").style.opacity = "0"; }
}

function show_map() {
    document.getElementById("map_holder").style.height = "80vh";
}

function setupAutoScroll() {
    //Sponsors auto-scroll
    window.sponsorTab = document.getElementById("sponsorContainer");
    window.supportTab = document.getElementById("supportContainer");
    window.sponsorMemberWidth = document.getElementById("logo_cesam").clientWidth;
    self.setInterval(() => {               //Card_N * (childWidth + gap)
        if (window.supportTab.scrollLeft > 9 * (window.sponsorMemberWidth + 50)) {
            window.supportTab.scrollLeft = 0;
        }
        if (window.sponsorTab.scrollLeft > 7 * (window.sponsorMemberWidth + 50)) {
            window.sponsorTab.scrollLeft = 0;
        }
        window.sponsorTab.scrollTo(window.sponsorTab.scrollLeft + Math.max(window.innerWidth / 1600,1), 0);
        window.supportTab.scrollTo(window.supportTab.scrollLeft + Math.max(window.innerWidth / 1600,1), 0);// control velocity here
    }, 1); //or here

    window.resetScroll = function () {
        setTimeout(function () {
            window.sponsorMemberWidth = document.getElementById("logo_cesam").clientWidth;
            window.sponsorTab = document.getElementById("sponsorContainer");
            window.supportTab = document.getElementById("supportContainer");
        },2000);
    }
}

window.onload = function () {

    // Support auto-scroll
    setupAutoScroll();

    //MobileSupport
    MobileCheck();

    //Navbar
    navbar_bublleClick("1");

    //Loading page
    document.getElementById("loading_page").style.opacity = "0";
}



