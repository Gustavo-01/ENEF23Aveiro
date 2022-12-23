class PagLocalizacoes {
    constructor() {
        this.title = "Localizações";
        this.optionN = 3;
        this.options = {
            "Atividades": {
                "AtivTitle1": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.783799028831!2d-8.65661213949019!3d40.630218078233725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aba29f8fb3%3A0x2b165678e2281ef7!2sDepartment%20of%20Physics%2C%20University%20of%20Aveiro!5e0!3m2!1sen!2spt!4v1671383272212!5m2!1sen!2spt`,
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
        const device = window.getDevice();

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
                cont += `<div onclick="window.contentPage.setBodyContent('${option}',${i})" onmouseover='window.contentPage.shiftOp(${i})' id='loc-head-op${i}' class='loc-head-op' style="background-color: #587c6c; ${lastOptionStyle}">${option}</div>`;
            }
            return cont;
        }

        return `
        <div class="local-wrapper-${device}" id = "local_wrapper_${device}">
            <div onmouseover="window.contentPage.shiftFlex(0)" id="loc-side0" class="local-box">
                <div id="loc-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12112.821164248973!2d-8.649069149999999!3d40.6253544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aa4e1bda2b%3A0xd70b976749475485!2sUniversity%20of%20Aveiro!5e0!3m2!1sen!2spt!4v1671361252119!5m2!1sen!2spt" width="100%" height="100%" style="border:0; border-radius:15px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
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
                cont += `<div id="loc-body-op${j}" onclick="window.contentPage.clickOp('${j}','${i}',\`` + optionContents[optionTitle] + `\`)" onmouseover="window.contentPage.hoverOp('${j}','${i}')" class='loc-search-body-cont' style='background-color:#799EA0'>${optionTitle}</div>`;
                j += 1;
            }
            return cont;
        }

    }

    clickOp(j, i, bodyOp) {
        const elem = document.getElementById("loc-body-op" + j);
        elem.style.backgroundColor = "#799EA0";
        elem.style.color = "var(--white)";
        const mapElem = document.getElementById("loc-map");
        mapElem.innerHTML = `<iframe src=${bodyOp} width="100%" height="100%" style="border:0; border-radius:15px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

        if (window.contentPage.selectedOp != null) {
            const lastElem = document.getElementById("loc-body-op" + window.contentPage.selectedOp);
            lastElem.style.backgroundColor = "#587C5A";
            lastElem.style.color = "black";
        }
        window.contentPage.selectedOp = j;
    }

    hoverOp(j, i) {
        const elem = document.getElementById("loc-body-op" + j);
        elem.style.backgroundColor = "#587C5A";

        elem.onmouseout = function () {
            if (j == window.contentPage.selectedOp) { return; }
            elem.style.backgroundColor = "#799EA0";
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
        element.style.backgroundColor = `#354a41`;
        element.onmouseleave = function () {
            element.style.backgroundColor = `#587c6c`;
        }
    }
}

window.PagLocalizacoes = new PagLocalizacoes();