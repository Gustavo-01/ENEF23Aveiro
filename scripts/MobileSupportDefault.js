window.getDevice = function () {
    let device = "PC"; if (window.matchMedia("(max-width: 800px)").matches) { device = "Mob" };
    return device;
}

//Ran from window.onLoad at script.js
function MobileCheck() {
    //Check if mobile
    var is_mobile_device = false;
    if (window.matchMedia("(max-width: 800px)").matches) { is_mobile_device = true; }
    var last_mobile = is_mobile_device;
    RefreshMobile(is_mobile_device);

    setInterval(function () {
        is_mobile_device = false; if (window.matchMedia("(max-width: 800px)").matches) { is_mobile_device = true; }

        if (last_mobile != is_mobile_device) {
            RefreshMobile(is_mobile_device);
            last_mobile = is_mobile_device;
        }
    }, 500);
}

function ChangeClasses(className1, className2) {
    const elems = [...document.getElementsByClassName(className1)];
    for (var i = 0; i < elems.length; i++) {
        elems[i].classList.add(className2);
        elems[i].classList.remove(className1)
    }
}

function RefreshMobile(is_mobile_device) {

    if (is_mobile_device) {
        ChangeClasses("snapMid-PC", "snapMid-Mob");
        ChangeClasses("snapTop-PC", "snapTop-Mob");

        //Navbar
        ChangeClasses("iconPC", "iconMob");
        ChangeClasses("bubblePC", "bubbleMob");
        ChangeClasses("menuElementPC", "menuElementMob");
        ChangeClasses("bgBPC", "bgBMob");
        ChangeClasses("navbar-holderPC", "navbar-holderMob");

        //Logo
        document.getElementById("scrolldown-ico").classList.remove("scrolldownPC");
        document.getElementById("scrolldown-ico").classList.add("scrolldownMob");
        document.getElementById("bem-vindo-logo").style.flexDirection = "column";
        document.getElementById("logo_top_margin").style.flex = "0 0 10vh";
        document.getElementById("logo_img").style.maxWidth = "60vw";
        document.getElementById("logo_holder").style.opacity = "1";
        document.getElementById("logo_holder").style.gap = "7px";
        document.getElementById("logo_back_img").style.opacity = "0.2"
        ChangeClasses("logoPC", "logoMob");
        ChangeClasses("_clockPC", "_clockMob");
        ChangeClasses("btn_logoPC", "btn_logoMob");
        ChangeClasses("morePC", "moreMob")
        ChangeClasses("social-holderPC", "social-holderMob")
        document.getElementById("_clock").style.gap = "10px";

        //Sponsor
        ChangeClasses("SponsorHolderPC", "SponsorHolderMob");
        ChangeClasses("SponsorsContainerPC", "SponsorsContainerMob");
        ChangeClasses("logo_cesamPC", "logo_cesamMob");

        //Description
        ChangeClasses("content-PC", "content-Mob");
        ChangeClasses("content-holder-PC", "content-holder-Mob");

    }
    else {
        ChangeClasses("snapMid-Mob", "snapMid-PC");
        ChangeClasses("snapTop-Mob", "snapTop-PC");

        //Navbar
        ChangeClasses("iconMob", "iconPC");
        ChangeClasses("bubbleMob", "bubblePC");
        ChangeClasses("menuElementMob", "menuElementPC");
        ChangeClasses("bgBMob", "bgBPC");
        ChangeClasses("navbar-holderMob", "navbar-holderPC");

        //Logo
        document.getElementById("scrolldown-ico").classList.add("scrolldownPC");
        document.getElementById("scrolldown-ico").classList.remove("scrolldownMob");
        document.getElementById("bem-vindo-logo").style.flexDirection = "row";
        document.getElementById("logo_top_margin").style.flex = "0 0 20vh";
        document.getElementById("logo_img").style.maxWidth = "30vw";
        document.getElementById("logo_holder").style.removeProperty("opacity");
        document.getElementById("logo_holder").style.removeProperty("gap");
        ChangeClasses("logoMob", "logoPC");
        ChangeClasses("_clockMob", "_clockPC");
        ChangeClasses("btn_logoMob", "btn_logoPC");
        ChangeClasses("moreMob", "morePC")
        ChangeClasses("social-holderMob", "social-holderPC")
        document.getElementById("_clock").style.gap = "20px";

        //Sponsor
        ChangeClasses("SponsorHolderMob", "SponsorHolderPC");
        ChangeClasses("SponsorsContainerMob", "SponsorsContainerPC");
        ChangeClasses("logo_cesamMob", "logo_cesamPC");

        //Description
        ChangeClasses("content-Mob", "content-PC");
        ChangeClasses("content-holder-Mob", "content-holder-PC");
    }

    //Sponsor auto-scroll
    window.resetScroll();
}
