
//Ran from window.onLoad at script.js
function MobileCheck() {
    //Check if mobile
    var is_mobile_device = false;
    if (window.matchMedia("(max-width: 750px)").matches) { is_mobile_device = true; }
    var last_mobile = is_mobile_device;
    RefreshMobile(is_mobile_device);

    setInterval(function () {
        is_mobile_device = false; if (window.matchMedia("(max-width: 750px)").matches) { is_mobile_device = true; }

        if (last_mobile != is_mobile_device) {
            console.log("T?osap");
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

        //Logo
        document.getElementById("scrolldown-ico").classList.remove("scrolldownPC");
        document.getElementById("scrolldown-ico").classList.add("scrolldownMob");
        document.getElementById("bem-vindo-logo").style.flexDirection = "column";
        document.getElementById("logo_top_margin").style.flex = "0 0 10vh";
        document.getElementById("logo_img").style.maxWidth = "60vw";
        document.getElementById("logo_holder").style.opacity = "1";
        document.getElementById("logo_holder").style.gap = "100px";
        document.getElementById("logo_back_img").style.opacity = "0.2"
        ChangeClasses("logoPC", "logoMob");
        ChangeClasses("_clockPC", "_clockMob");
        ChangeClasses("btn_logoPC", "btn_logoMob");
        document.getElementById("_clock").style.gap = "10px";

        //Description
        ChangeClasses("des-arrow-PC", "des-arrow-Mob");
        ChangeClasses("description-PC", "description-Mob");
        ChangeClasses("description-holder-PC", "description-holder-Mob");
        ChangeClasses("des-cont-PC", "des-cont-Mob");
        ChangeClasses("arrowDown-PC", "arrowDown-Mob");

    }
    else {
        ChangeClasses("snapMid-Mob", "snapMid-PC");
        ChangeClasses("snapTop-Mob", "snapTop-PC");

        //Navbar
        ChangeClasses("iconMob", "iconPC");
        ChangeClasses("bubbleMob", "bubblePC");
        ChangeClasses("menuElementMob", "menuElementPC");
        ChangeClasses("bgBMob", "bgBPC");

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
        document.getElementById("_clock").style.gap = "20px";

        //Description
        ChangeClasses("des-arrow-Mob", "des-arrow-PC");
        ChangeClasses("description-Mob", "description-PC");
        ChangeClasses("description-holder-Mob", "description-holder-PC");
        ChangeClasses("des-cont-Mob", "des-cont-PC");
        ChangeClasses("arrowDown-Mob", "arrowDown-PC");

    }

    navbar_bublleClick("b1");
}
