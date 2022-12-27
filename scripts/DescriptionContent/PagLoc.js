class PagLocalizacoes {
    constructor() {
        this.title = "Localizações";
        this.optionN = 3;
        this.options = {
            "Atividades": {
                "Sessao de Abertura": `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.8985307139883!2d-8.659129272500326!3d40.63257107688241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aab7c61c2b%3A0x92aee967fde277f!2sDepartamento%20de%20Ambiente%20e%20Ordenamento!5e0!3m2!1spt-PT!2spt!4v1671848627229!5m2!1spt-PT!2spt`,
                "Sessao de Encerramento": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.8985307139883!2d-8.659129272500326!3d40.63257107688241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aab7c61c2b%3A0x92aee967fde277f!2sDepartamento%20de%20Ambiente%20e%20Ordenamento!5e0!3m2!1spt-PT!2spt!4v1671848627229!5m2!1spt-PT!2spt",
                "Palestras": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.8985307139883!2d-8.659129272500326!3d40.63257107688241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aab7c61c2b%3A0x92aee967fde277f!2sDepartamento%20de%20Ambiente%20e%20Ordenamento!5e0!3m2!1spt-PT!2spt!4v1671848627229!5m2!1spt-PT!2spt",
                "Debate": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.8985307139883!2d-8.659129272500326!3d40.63257107688241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aab7c61c2b%3A0x92aee967fde277f!2sDepartamento%20de%20Ambiente%20e%20Ordenamento!5e0!3m2!1spt-PT!2spt!4v1671848627229!5m2!1spt-PT!2spt",
                "Nobel Talk": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.8985307139883!2d-8.659129272500326!3d40.63257107688241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2aab7c61c2b%3A0x92aee967fde277f!2sDepartamento%20de%20Ambiente%20e%20Ordenamento!5e0!3m2!1spt-PT!2spt!4v1671848627229!5m2!1spt-PT!2spt",
                "Inside Views - DFis": "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d189.24898061292078!2d-8.65665189435307!3d40.63024166262188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1671848804458!5m2!1spt-PT!2spt",
                "Inside Views - IT": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d714.4686348719528!2d-8.66016981097998!3d40.63401821192275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd239800023fffff%3A0x75387a25e0613df8!2sIT%20-%20Instituto%20de%20Telecomunica%C3%A7%C3%B5es%2C%203810-193%20Aveiro!5e0!3m2!1spt-PT!2spt!4v1671848871119!5m2!1spt-PT!2spt",
                "Inside Views - CICFANO": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.9941955341956!2d-8.657670511867625!3d40.63039399870249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd23a2abbac7cb1b%3A0x55890551aa449a!2sCICFANO%20-%20Complexo%20Interdisciplinar%20de%20Ci%C3%AAncias.%20F%C3%ADsicas%20Aplicadas%20%C3%A0%20Nanotecnologia%20e%20%C3%A0.%20Oceanografia!5e0!3m2!1spt-PT!2spt!4v1671848959906!5m2!1spt-PT!2spt",
            },
            "Workshops": {
                "Por Anunciar": "Em Breve"
            },
            "Alojamentos": {
                "Por Anunciar": "Em Breve",
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
        const mapElem = document.getElementById("loc-map");
        const elem = document.getElementById("loc-body-op" + j);
        elem.style.backgroundColor = "#587C5A";
        elem.style.color = "var(--white)";
        if (bodyOp !== "Em Breve") {
            mapElem.innerHTML = `<iframe src=${bodyOp} width="100%" height="100%" style="border:0; border-radius:15px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        }
        else {
            mapElem.innerHTML = '<div style="height:100%; display:flex; align-items:center; justify-content:center;"><h1 style="color:var(--black);">Em Breve</h1>'
        }
        if (window.contentPage.selectedOp != null) {
            const lastElem = document.getElementById("loc-body-op" + window.contentPage.selectedOp);
            lastElem.style.backgroundColor = "#799EA0";
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