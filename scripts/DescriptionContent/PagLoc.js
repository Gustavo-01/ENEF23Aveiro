device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = true }

class PagLocalizacoes {
    constructor() {
        this.title = "Localizações";
        this.optionN = 3;
        this.options = {
            "Atividades": {
                "AtivTitle1": "Coordenates1",
                "AtivTitle2": "Coordenates2",
                "AtivTitle3": "Coordenates3",
                "AtivTitle4": "Coordenates4",
                "AtivTitle5": "Coordenates5",
                "AtivTitle6": "Coordenates6",
                "AtivTitle7": "Coordenates7",
                "AtivTitle8": "Coordenates8",
                "AtivTitle9": "Coordenates9",
                "AtivTitle10": "Coordenates10",
                "AtivTitle11": "Coordenates11"

            },
            "Título2": {
                "Title1": "Coordenates1",
                "Title2": "Coordenates2",
                "Title3": "Coordenates3",
                "Title3": "Coordenates4"
            },
            "Título3": {
                "Title1": "Coordenates1",
                "Title2": "Coordenates2",
                "Title3": "Coordenates3",
                "Title3": "Coordenates4"
            }
        };

        this.selectedOp = null;
    }

    initial_f() {

    }

    getContent() {
        const options = this.options;
        const optionN = this.optionN;

        function getHeadContent() {
            let cont = "";
            var i = 0;
            for (var option in options) {
                i += 1;
                //Fix to avoid having an option with the same color as background
                if (i == 3) { i += 1; }
                // Fix to avoid last item having black line right side
                const lastOptionStyle = (i == optionN + 1) ? "border-right:none" : "";
                cont += `<div onclick="window.contentPage.setBodyContent('${option}',${i})" onmouseover='window.contentPage.shiftOp(${i})' id='loc-head-op${i}' class='loc-head-op' style="background-color: var(--color${i}); ${lastOptionStyle}">${option}</div>`;
            }
            return cont;
        }

        return `
        <div class="local-wrapper">
            <div onmouseover="window.contentPage.shiftFlex(0)" id="loc-side0" class="local-box">
                <iframe id="loc-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12112.821164248973!2d-8.649069149999999!3d40.6253544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aa4e1bda2b%3A0xd70b976749475485!2sUniversity%20of%20Aveiro!5e0!3m2!1sen!2spt!4v1671361252119!5m2!1sen!2spt" width="100%" height="100%" style="border:0; border-radius:15px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div onmouseover="window.contentPage.shiftFlex(1)" id="loc-side1" class="local-box loc-search-box">
                <div class="loc-search-head">${getHeadContent()}</div>
                <div id="loc_body" class="loc-search-body"></div>
            </div>
        </div>
        `;

    }

    setBodyContent(selected, i) {
        const options = this.options;
        window.contentPage.selectedOp = null;

        document.getElementById("loc_body").innerHTML = getBodyContent(selected);

        function getBodyContent(selected) {
            const optionContents = options[selected];
            let j = 0;
            let cont = "";
            for (var optionTitle in optionContents) {
                cont += `<div id="loc-body-op${j}" onclick="window.contentPage.clickOp('${j}','${i}','${optionContents[optionTitle]}')" onmouseover="window.contentPage.hoverOp('${j}','${i}')" class='loc-search-body-cont' style='background-color:var(--color${i}_clear)'>${optionTitle}</div>`;
                j += 1;
            }
            return cont;
        }

    }

    clickOp(j, i, bodyOp) {
        const elem = document.getElementById("loc-body-op" + j);

        elem.style.backgroundColor = "var(--color" + i + ")";
        window.contentPage.selectedOp = j;
    }

    hoverOp(j, i) {
        const elem = document.getElementById("loc-body-op" + j);

        elem.style.backgroundColor = "var(--color" + i + ")";
        elem.onmouseout = function () {
            if (j == window.contentPage.selectedOp) { return; }
            elem.style.backgroundColor = "var(--color" + i + "_clear)";
        }
    }

    shiftFlex(side) {
        const side0 = document.getElementById("loc-side0");
        const side1 = document.getElementById("loc-side1");
        if (side == 0) {
            side0.style.flex = "70% 1 1";
            side1.style.flex = "30% 1 1";
        }
        else {
            side1.style.flex = "60% 1 1";
            side0.style.flex = "40% 1 1";
        }
    }

    shiftOp(opN) {
        const element = document.getElementById(`loc-head-op${opN}`);
        element.style.backgroundColor = `var(--color${opN}_shade)`;
        element.onmouseleave = function () {
            element.style.backgroundColor = `var(--color${opN})`;
        }
    }
}

window.PagLocalizacoes = new PagLocalizacoes();