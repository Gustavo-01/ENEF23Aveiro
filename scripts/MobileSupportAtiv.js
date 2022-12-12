
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

    }
    else {


    }

}