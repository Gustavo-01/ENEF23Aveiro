function navbar_bublleClick(id) {
    const bubble_N = parseInt(id.slice(-1));
    var bgBubbleLeft;

    //if window is changing (only applies for Atividades)
    if (window.contentPage !== undefined) {
        if (window.contentPage.changingPage !== undefined && window.contentPage.changingPage == true) {
            return;
        }
    }

    switch (bubble_N) {
        case 1:
            bgBubbleLeft = 0;
            window.contentPage = window.PagAtividades;
            break;
        case 2:
            bgBubbleLeft = 20;
            window.contentPage = window.PagPacotes;
            break;
        case 3:
            bgBubbleLeft = 40;
            window.contentPage = window.PagLocalizacoes;
            break;
        case 4:
            bgBubbleLeft = 60;
            window.contentPage = window.PagEquipa;
            break;
        case 5:
            bgBubbleLeft = 80;
            window.contentPage = window.PagFaq;
            break;
    }

    const device = window.getDevice();
    const iconClass = ".icon" + device;
    const color = getComputedStyle(document.documentElement).getPropertyValue('--color' + bubble_N);

    var tl = gsap.timeline();
    tl.to(".content-" + device, { duration: 0.3, y: "30px", opacity: "0", ease: "ease-in" }, 0)
        .add(function () {
            const content = window.contentPage.getContent();
            document.getElementById("description").innerHTML = content;
            document.getElementById("des_title").innerHTML = window.contentPage.title;
            window.contentPage.initial_f(); //ContentPages must have initial_f function defined, even if empty.
        })
        .to("#bgBubble", { duration: 0.15, bottom: "50px", ease: "ease-out" }, 0)
        .to("#bubble1", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble2", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble3", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble4", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble5", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to(iconClass, { duration: 0.05, opacity: 0, ease: "ease-out", }, 0)
        .to(".bgB-holder", { duration: 0.2, left: (bgBubbleLeft - 2.47) + "vw", ease: "ease-in-out" }, 0.1)
        .to("#bgBubble", { duration: 0.15, bottom: "0", ease: "ease-out" }, '-=0.2')
        .to(`#bubble${bubble_N}`, { duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: "ease-out" }, '-=0.1')
        .to(`#bubble${bubble_N}> span`, { duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out" }, '-=0.1')
        .to("#navbar_holder", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to(".des-title", { duration: 0.3, y: "30px", opacity: "0", textShadow: "2px 2px var(--color" + bubble_N + "_shade)", ease: "ease-in-out" }, 0)
        .to(".des-title", { duration: 0.5, y: "0", opacity: "1", ease: "ease-in-out" }, 0.3)
        .to(".content-holder-" + device, { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to("#bg", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to("#bgBubble", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to("#sponsors_tab", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to(".content-" + device, { duration: 0.5, y: "-30px", opacity: "1", ease: "ease-in" }, 0.3)
}

function Inscrever_click() {
    window.location = "./Atividades.aspx"
}

