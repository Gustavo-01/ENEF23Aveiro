window.onload = function () {

    //Loading page
    document.getElementById("loading_page").style.opacity = "0";
}

function ExpandSection(num) {
    const section = document.getElementById("section" + num);
    const sectionHead = document.getElementById("section_head" + num);

    section.style.maxHeight = "50vh"; /* TODO: Eyeball max height */

    section.classList.remove("closed");

    sectionHead.childNodes[1].style.flex = "1 1 100%";
    sectionHead.childNodes[3].style.flex = "1 1 0";
    sectionHead.childNodes[5].childNodes[1].innerHTML = "-";

    section.onclick = "";
    setTimeout(() => {
        sectionHead.onclick = function () { ShrinkSection(num); }
    }, 250)
    
}

function ShrinkSection(num) {
    const section = document.getElementById("section" + num);
    const sectionHead = document.getElementById("section_head" + num);

    section.style.maxHeight = "2.5em";

    sectionHead.childNodes[1].style.flex = "1 1 0";
    sectionHead.childNodes[3].style.flex = "1 1 100%";
    sectionHead.childNodes[5].childNodes[1].innerHTML = "+";

    sectionHead.onclick = "";
    setTimeout(() => {
        section.onclick = function () { ExpandSection(num); }
    }, 250)

    setTimeout(() => {
        section.classList.add("closed");
    }, 500)


}