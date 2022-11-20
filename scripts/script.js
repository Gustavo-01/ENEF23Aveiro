function hide(id, is_hidden) {
    const elem_to_hide = document.getElementById(id);
    if (is_hidden) {
        elem_to_hide.classList.add('hidden');
    }
    else {
        elem_to_hide.classList.remove('hidden');
    }
}

function app_f(id, is_hidden) {
    const elem_to_hide = document.getElementById(id);
    if (is_hidden) {
        elem_to_hide.classList.remove('highlight' + id.slice(-1));
    }
    else {
        elem_to_hide.classList.add('highlight' + id.slice(-1));
    }
}

function darkenBack(darken) {

    if (window.matchMedia("(max-width: 750px)").matches) { return; }

    if (darken) { document.getElementById("logo_back_img").style.opacity = "0.2"; }
    else { document.getElementById("logo_back_img").style.opacity = "0"; }
}

function show_map() {
    document.getElementById("map_holder").style.height = "80vh";
}

var page = 0;
var section = 0;
const section_pageN = [4, 0, 0, 0];
var changingPage = false;
function changePage(forward) {

    //if already changing page, do nothing
    if (changingPage) {
        return;
    }
    //If an element is selected inside description
    console.log(selectedElem);
    if (selectedElem > -1) {
        console.log(selectedElem);
        unClick_desc_cont(selectedElem);
        changingPage = true;
        setTimeout(() => {
            change(forward);
        }, 400 * (2 + (selectedElem % 3)) + 1200)
    }
    else {
        change(forward);
    }

    function change(forward) {
    //Initiate change page 
    changingPage = true;
    setTimeout(function () {
        changingPage = false;
    }, 600);

    if (forward) {
        if (page == section_pageN[section]) { return; }
        page += 1;
        var t1 = gsap.timeline();
        t1.to("#desc_page" + (page - 1), { duration: 0.5, transform: "translate(-20vw,0)", opacity: "0", ease: "ease-in" }, 0)
            .to("#desc_page" + (page - 1), { duration: 0, transform: "translate(0,0)", zIndex: "-2" }, 0)
            .to("#desc_page" + page, { duration: 0, transform: "translate(20vw,0)", zIndex: "2" }, 0.5)
            .to("#desc_page" + page, { duration: 0.5, transform: "translate(0,0)", opacity: "1", ease: "ease-out" }, 0.5);
    }
    else if (!forward) {
        if (page == 0) { return; }
        page -= 1;
        var t1 = gsap.timeline();
        t1.to("#desc_page" + (page + 1), { duration: 0.5, transform: "translate(20vw,0)", opacity: "0", ease: "ease-in" }, 0)
            .to("#desc_page" + (page + 1), { duration: 0, transform: "translate(0,0)", zIndex: "-2" }, 0)
            .to("#desc_page" + page, { duration: 0, transform: "translate(-20vw,0)", zIndex: "2" }, 0.5)
            .to("#desc_page" + page, { duration: 0.5, transform: "translate(0,0)", opacity: "2", ease: "ease-out" }, 0.5);
    }
    updatePageArrows();
    }
}

function updatePageArrows() {
    const arr_l = document.getElementById("arrow-l");
    const arr_r = document.getElementById("arrow-r");
    if (page == 0) {
        if (arr_l.classList.contains("can-hover")) {
            arr_l.classList.remove("can-hover");
            arr_l.classList.add("disabled");
        }
    }
    else {
        if (!arr_l.classList.contains("can-hover")) {
            arr_l.classList.add("can-hover");
            arr_l.classList.remove("disabled");
        }
    }
    if (page == section_pageN[section]) {
        if (arr_r.classList.contains("can-hover")) {
            arr_r.classList.remove("can-hover");
            arr_r.classList.add("disabled");
        }
    }
    else {
        if (!arr_r.classList.contains("can-hover")) {
            arr_r.classList.add("can-hover");
            arr_r.classList.remove("disabled");
        }
    }

}

var selectedElem = -1;
var selecting = false;
function click_desc_cont(id_num) {
    if (selecting || changingPage) { return; }
    selecting = true;

    const card = id_num;
    switch (id_num % 3) {
        case 0:
            var card1 = (id_num + 1);
            var card2 = (id_num + 2);
            break;
        case 1:
            var card1 = (id_num - 1);
            var card2 = (id_num + 1);
            break;
        case 2:
            var card1 = (id_num - 1);
            var card2 = (id_num - 2);
            break;
    }
    const card_elem = document.getElementById("des_cont" + id_num);
    const x_cont = card_elem.clientWidth * (-id_num % 3) - 100 * (id_num % 3) - 50;

    var device = "PC";
    if (window.matchMedia("(max-width: 750px)").matches) { device = "Mob"; }

    card_elem.classList.add("desc-cont-select");

    var tl = gsap.timeline();
    tl.to("#des_cont"+card, { duration: 0.2 * (1+(id_num%3)), x: x_cont}, 0.3)
        .to("#des_title", { duration: 0.2, opacity: 0, y: "-100px", opacity: 0 }, 0)
        .to("#des_cont"+card1, { duration: 0.2, opacity: 0, y: "-200px" }, 0.1)
        .to("#des_cont"+card2, { duration: 0.2, opacity: 0, y: "-200px" }, 0.1)
        .to("#desc-more" + device, { duration: 0.2, y: "0", opacity: 1 }, 0.2 * (2 + (id_num % 3)))
        .add(function () {
            card_elem.onclick = function () { unClick_desc_cont(id_num); };
            const elCard1 = document.getElementById("des_cont" + card1);
            const elCard2 = document.getElementById("des_cont" + card2);
            elCard1.classList.add("des-disabled");
            elCard2.classList.add("des-disabled");
            elCard1.onclick = "";
            elCard2.onclick = "";
        })
    selectedElem = id_num;

    setTimeout(function () {
        selecting = false;
    }, 200 * (2 + (id_num % 3)) + 200);
}

function unClick_desc_cont(id_num) {
    if (selecting || changingPage) { return; }
    selecting = true;

    const card = id_num;
    switch (id_num % 3) {
        case 0:
            var card1 = id_num + 1;
            var card2 = id_num + 2;
            break;
        case 1:
            var card1 = id_num - 1;
            var card2 = id_num + 1;
            break;
        case 2:
            var card1 = id_num - 1;
            var card2 = id_num - 2;
            break;
    }
    const card_elem = document.getElementById("des_cont" + id_num);

    var device = "PC";
    if (window.matchMedia("(max-width: 750px)").matches) { device = "Mob"; }

    card_elem.classList.remove("desc-cont-select");

    var t2 = gsap.timeline();
    t2.to("#desc-more" + device, { duration: 0, y: "50px", opacity: 0 }, 0)
        .to("#des_cont" + card, { duration: 0.2 * (1 + (id_num % 3)), x: 0 }, 0.8)
        .add(function () {
            const elCard1 = document.getElementById("des_cont" + card1);
            const elCard2 = document.getElementById("des_cont" + card2);
            elCard1.classList.remove("des-disabled");
            elCard2.classList.remove("des-disabled");
            elCard1.onclick = function () { click_desc_cont(card1); };
            elCard2.onclick = function () { click_desc_cont(card2); };

        })
        .to("#des_title", { duration: 0, opacity: 1, y: "0", opacity: 1 }, 0.5 * (1 + (id_num % 3)))
        .to("#des_cont"+card1, { duration: 0, opacity: 1, y: "0" }, 0.5 * (1 + (id_num % 3)))
        .to("#des_cont"+card2, { duration: 0, opacity: 1, y: "0" }, 0.5 * (1 + (id_num % 3)))
        .add(function () {
            card_elem.onclick = function () { click_desc_cont(id_num); };
        })
    selectedElem = -1;

    setTimeout(function () {
        selecting = false;
    }, 200 * (2 + (id_num % 3)) + 800);
}

var scrollInterval;
window.onload = function () {

    //MobileSupport
    MobileCheck();

    //Navbar
    updatePageArrows();
    navbar_bublleClick("1");

    //Loading page
    document.getElementById("loading_page").style.opacity = "0";
}



