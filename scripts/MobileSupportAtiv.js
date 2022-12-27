window.getDevice = function () {
    let device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = "Mob" };
    return device;
}

//Ran from window.onLoad at script.js
function MobileCheck() {
    //Check if mobile
    var is_mobile_device = false;
    if (window.matchMedia("(max-width: 750px)").matches) { is_mobile_device = true; console.log(is_mobile_device); }
    var last_mobile = is_mobile_device;
    RefreshMobile(is_mobile_device);

    setInterval(function () {
        is_mobile_device = false;
        if (window.matchMedia("(max-width: 750px)").matches) {
            is_mobile_device = true;
            
        }
        
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
        elems[i].classList.remove(className1);
    }
}

function RefreshMobile(is_mobile_device) {
    console.log(is_mobile_device)
    if (is_mobile_device) {
        ChangeClasses("Ativ-contPC", "Ativ-contMob");
        ChangeClasses("Ativ-sectionPC", "Ativ-sectionMob");
        ChangeClasses("Ativ-boxPC", "Ativ-boxMob");
        ChangeClasses("Ativ-rowPC", "Ativ-rowMob");
        ChangeClasses("Ativ-box-arrow-down-PC","Ativ-box-arrow-down-Mob")
        
    }
    else {
        ChangeClasses("Ativ-contMob", "Ativ-contPC");
        ChangeClasses("Ativ-sectionMob", "Ativ-sectionPC");
        ChangeClasses("Ativ-rowMob", "Ativ-rowPC");
        ChangeClasses("Ativ-boxMob", "Ativ-boxPC");
        ChangeClasses("Ativ-box-arrow-down-Mob", "Ativ-box-arrow-down-PC")
    }
    ShrinkAll()
    
}