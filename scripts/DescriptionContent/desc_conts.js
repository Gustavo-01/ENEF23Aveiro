//Referentes às descrições na página da Navbar

const atividades = {
    "Workshops/ Talks": `<p>
        Nos Workshops e Talks terás a oportunidade de entrar em contacto direto com investigadores e profissionais em diversas áreas, e pôr as “mãos na massa”,
        aplicando conhecimentos de uma forma dinâmica!
    </p>`,

    "Palestras": `<p>
        Esperam-te palestras interessantes relacionadas a diversas áreas da Física, nas quais irás assistir a oradores de renome a nível nacional e
        aprender sobre as suas áreas de investigação!
    </p>`,

    "Inside Views": `<p>
        Nas Inside Views, conhecerás alguns dos meios de investigação principais e terás a oportunidade de visitar laboratórios dos diversos institutos e
        centros de investigação
    </p>`,

    "Business Speed Dating": `<p>
        Derivada da Feira de Emprego, esta atividade tem estilo de um “Speed Dating”, que facilitará a tua interacção com os representantes das empresas
        presentes.
    </p>`,

    "Feira de Emprego": `<p>
        Numa Feira de Emprego com diversas empresas e institutos convidados, terás a oportunidade de interagir diretamente com diversas entidades empregadoras
        em diversas áreas de tecnologia!
    </p>`,

    "Informal Talks": `<p>
        Nesta atividade poderás falar com Alumni de cursos relacionados a Física, Engenharia Física ou Meteorologia, Oceanografia e Geofísica, e satisfazer as
        tuas curiosidades!
    </p>`,

    "Nobel Talk": `<p>
        Na Nobel Talk terás a oportunidade de ouvir a apresentação do Nobel por um dos professores catedráticos do Departamento de Física da UA e de colocar as
        tuas questões à cerca do tema!
    </p>`,

    "Observação FISUA": `<p>
        A FISUA – Associação de Física da Universidade de Aveiro - irá conduzir uma observação noturna, na qual aprenderás a observar e identificar os
        diversos objetos que se encontram no céu estrelado em fevereiro.
    </p>`,

    "Debate": `<p>
        “Alterações Climáticas”- um tema que será aprofundado por investigadores e profissionais das áreas de Meteorologia, Climatologia e Oceanografia no
        debate, no qual poderás participar, colocando questões.    </p>`,


    "Student Lectures": `<p>
        Na Student Lectures Competition terás a oportunidade de apresentar uma palestra, e na Poster Competition terás a oportunidade de desenvolver um poster científico.
    </p>`,

    "PLANCKS": `<p>
        O Physics League Across Numerous Countries for Kick-ass Students é uma competição de física teórica para estudantes de licenciatura e mestrado, que
        ocorrerá presencialmente no ENEF23.
    </p>`,

    "Peddy Paper": `<p>
        Espera-te um Peddy Paper organizado para dar-te a conhecer o centro da cidade de Aveiro, onde terás a oportunidade de entrar em contacto com a cultura
        Aveirense e alguns dos pontos principais da cidade!
    </p>`,

    "Febrada": `<p>
        Uma das principais atividades de convívio, tradicional aos Encontros Nacionais de Estudantes de Física, prepara-te para uma grande noitada de festa!
    </p>`,

    "Jantar de Encerramento": `<p>
        Para encerrar a tua estadia na belíssima cidade de Aveiro, a tua última noite académica no ENEF23 manifesta-se num jantar com todos os participantes e
        equipa de organização!
    </p>`,

    "Sessão de Jogos": `<p>
        A última atividade de convívio no ENEF23, junta-te aos outros participantes e recupera dos 3 dias recheados que experienciaste, com um torneio de Dr.
        Why e diversos jogos de tabuleiro.
    </p>`,

}
const FAQ = {
    "É NECESSÁRIO PAGAR LOGO APÓS O ATO DE INSCRIÇÃO?":
        `<p>Após preencheres o formulário, terás de efetuar o pagamento e enviar o respetivo comprovativo num prazo de 5 dias.
        Só aí a tua vaga estará assegurada!</p>`,

    "COMO FUNCIONA O DESCONTO PARA SÓCIOS DA PHYSIS E COMO ME TORNO SÓCIO?":
        `Se fores sócio da Physis, tens um desconto de 5 € em qualquer pack que escolheres.
        Os sócios da Physis têm direito a descontos no ENEF e noutras atividades da associação.
        A condição de sócio da Physis é anual, ou seja, és sócio durante o ano civil em que te inscreves nessa condição e 
        pagas a tua cota (5 €).
        Por exemplo, se te inscreveres dia 1 de dezembro como sócio e pagares a tua cota, serás sócio até dia 31 de dezembro desse ano.
        Dia 1 de janeiro, terás de pagar a cota anual desse ano para regularizares a tua condição de sócio e voltares a ter direito 
        às vantagens de sócio.
        Excecionalmente, se efetuares a inscrição no ENEF e te tornares sócio antes do fim de 2022, a condição de sócio será válida 
        para o ano 2023.
        Podes tornar-te sócio da Physis durante o ato de inscrição no ENEF ou aqui. Se não sabes como está a tua condição de sócio,
        envia mensagem para a página da Physis.`,

    "COMO FUNCIONA O DESCONTO PARA SÓCIOS DA FISUA E COMO ME TORNO SÓCIO?":
        `Se fores sócio da FISUA - Associação de Física da Universidade de Aveiro, terás acesso privilegiado à escolha dos
        Workshops/Talks e das Inside Views. Os sócios da FISUA têm direito a descontos comerciais junto dos nossos parceiros e
        preços e condições especiais em diversas atividades da associação, podes saber mais aqui. A condição de sócio da FISUA é 
        anual, ou seja, és sócio durante o ano civil em que te inscreves nessa condição e pagas a tua cota (5 €). Por exemplo, se te 
        inscreveres dia 1 de dezembro como sócio e pagares a tua cota, serás sócio até dia 31 de dezembro desse ano. Dia 1 de janeiro,
        terás de pagar a cota anual desse ano para regularizares a tua condição de sócio e voltares a ter direito às vantagens de
        sócio. Excecionalmente, se efetuares a inscrição no ENEF e te tornares sócio antes do fim de 2022, a condição de sócio será
        válida para o ano 2023. Podes tornar-te sócio da FISUA deslocando-te presencialmente até à sede da associação, no Departamento
        de Física da Universidade de Aveiro.`,

    "O TRANSPORTE ESTÁ INCLUÍDO NOS PACKS?":
        `Não, o transporte não está incluído nos packs.`,

    "POSSO MUDAR DE PACK DEPOIS DE ME INSCREVER?":
        `Não, depois de efetuares o pagamento e completares a tua inscrição, não poderás mudar de pack.`,

    "SE NÃO COMPRAR UM PACK COM AS ATIVIDADES DE CONVÍVIO, POSSO PARTICIPAR NAS MESMAS E PAGÁ-LAS DURANTE O ENEF?":
        `Para participares nas atividades de convívio terás que te inscrever num pack com acesso às mesmas, neste caso, nos packs 
        White Supergiant, Blue Hypergiant ou Neutron Star. Caso te inscrevas nos packs Red Dwarf ou Yellow Giant não terás acesso a 
        estas atividades.`,

    "SE COMPRAR UM PACK SEM AS ATIVIDADES DE CONVÍVIO E COM AS REFEIÇÕES, O QUE FAÇO NA FEBRADA E NO JANTAR DE ENCERRAMENTO?":
        `Se comprares o pack Yellow Giant, terás na mesma acesso a jantar na cantina da universidade, mas não poderás participar na
        febrada e no jantar de encerramento.`,

    "POSSO ESCOLHER COM QUEM FICO NOS QUARTOS?":
        `No formulário de inscrição podes indicar com quem gostarias de ficar. Tentaremos, na medida do possível, que isso aconteça,
        contudo não garantimos que fiquem todos juntos.`,

    "COMO FAÇO A ESCOLHA DOS WORKSHOPS/TALKS, DAS INSIDE VIEWS E DAS EMPRESAS PARA O BUSINESS SPEED DATING?":
        `Após teres assegurado a tua vaga no ENEF2023, será-te-á enviado um formulário onde poderás fazer as tuas escolhas para estas
        atividades. Terás que selecionar três opções e serás colocado conforme ordem de chegada!`,

    "NÃO SOU ESTUDANTE DE FÍSICA NEM DE ENGENHARIA FÍSICA. POSSO-ME INSCREVER?":
        `Se fores de um curso representado pela Physis poderás inscrever-te no ENEF2023. Podes ver a lista de cursos aqui. Se não 
        fores de nenhum dos cursos listados podes inscrever-te na mesma no ENEF2023. No entanto, as vagas são muito limitadas e não 
        poderás participar nas atividades “PLANCKS” e “Student Lectures/Poster Competition”.`,

    "QUEM NÃO ESTÁ INSCRITO NO ENEF PODE PARTICIPAR NO PLANCKS?":
        `Sim, podes-te inscrever preenchendo o formulário devido e pagamento 3 euros. Caso te tenhas inscrito no ENEF, apenas tens
        de pagar 1 euro!`,

    "COM QUANTOS ELEMENTOS PODEM SER CONSTITUÍDAS AS EQUIPAS?":
        `As equipas podem ser constituídas por 3 a 4 estudantes, de licenciatura ou mestrado.`,

    "EM QUE ÁREAS DA FÍSICA É QUE O PLANCKS INCIDE?":
        `As perguntas irão abordar diversos temas ligados à física, como física de partículas, eletromagnetismo, matéria condensada,
        física nuclear e muitas mais… Todas estas perguntas serão feitas por doutorados em física.`,

    "QUANDO É QUE SÃO ENVIADOS OS RECIBOS?":
        `Os recibos são enviados alguns dias após o final de cada fase.​`
}

device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = true }

//Content1
class PagAtividades {
    constructor() {
        this.title = "Plano de atividades";

        this.innerPage = 0;
        this.N_innerPage = 4;
        this.changingPage = false;
    }

    initial_f() {
        this.updatePageArrows();
    }

    getContent() {
        //Left and Right arrows:
        var content = `
                    <div id="arrow-l" class="des-arrow-PC can-hover" onclick="window.contentPage.changePage(false)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                        </svg>
                    </div>
                    <div id="arrow-r" class="des-arrow-PC can-hover" onclick="window.contentPage.changePage(true)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                        </svg>
                    </div>
                    `;

        //Cards
        let i = 0;
        for (let [key, value] of Object.entries(atividades)) {
            if (i == 0) {
                content += `<div class="description-page-${device}" style="opacity: 1; z-index: 2" id="desc_page${i}">\n`;
            }
            else if (i % 3 == 0) {
                content += `</div><div class="description-page-${device}" id="desc_page${i / 3}">`;
            }

            content += `<div class="des-cont-${device}" id="des_cont${i}">
                            <div class="cont">
                                <h1>${key}</h1>
                                ${value}
                            </div>
                        </div>\n`
            i++;
        }

        content += "</div>";
        return content;
    }

    changePage(forward) {
        //if already changing page, do nothing
        if (this.changingPage) {
            return;
        }

        //Initiate change page
        this.changingPage = true;
        setTimeout(function () {
            window.contentPage.changingPage = false; //Page change takes 600ms
        }, 600);

        var page = this.innerPage;
        if (forward) {
            if (page == this.N_innerPage) { return; }
            page += 1;
            var t1 = gsap.timeline();
            t1.to("#desc_page" + (page - 1), { duration: 0.5, transform: "translate(-20vw,0)", opacity: "0", ease: "ease-in" }, 0)
                .to("#desc_page" + (page - 1), { duration: 0, transform: "translate(0,0)", zIndex: "-2" }, 0)
                .to("#desc_page" + page, { duration: 0, transform: "translate(20vw,0)", zIndex: "2" }, 0.5)
                .to("#desc_page" + page, { duration: 0.5, transform: "translate(0,0)", opacity: "1", ease: "ease-out" }, 0.5);
        }
        else {
            if (page == 0) { return; }
            page -= 1;
            var t1 = gsap.timeline();
            t1.to("#desc_page" + (page + 1), { duration: 0.5, transform: "translate(20vw,0)", opacity: "0", ease: "ease-in" }, 0)
                .to("#desc_page" + (page + 1), { duration: 0, transform: "translate(0,0)", zIndex: "-2" }, 0)
                .to("#desc_page" + page, { duration: 0, transform: "translate(-20vw,0)", zIndex: "2" }, 0.5)
                .to("#desc_page" + page, { duration: 0.5, transform: "translate(0,0)", opacity: "2", ease: "ease-out" }, 0.5);
        }
        this.innerPage = page;

        this.updatePageArrows();
    }

    updatePageArrows() {
        const arr_l = document.getElementById("arrow-l");
        const arr_r = document.getElementById("arrow-r");
        if (this.innerPage == 0) {
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
        if (this.innerPage == this.N_innerPage) {
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

}

//Content2
class PagPacotes {
    constructor() {
        this.title = "Pacotes/Inscrições";
    }

    initial_f() {

    }

    getContent() {
        return ""
    }

}

//Content3
class PagLocalizacoes {
    constructor() {
        this.title = "Localizações";
        this.optionN = 3;
        this.options = {
            "Atividades": {
                "AtivTitle1" : "Coordenates1",
                "AtivTitle2" : "Coordenates2",
                "AtivTitle3" : "Coordenates3",
                "AtivTitle4" : "Coordenates4",
                "AtivTitle5" : "Coordenates5",
                "AtivTitle6" : "Coordenates6",
                "AtivTitle7" : "Coordenates7",
                "AtivTitle8" : "Coordenates8",
                "AtivTitle9" : "Coordenates9",
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
                const lastOptionStyle = (i == optionN+1) ? "border-right:none" : "";
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

//Content4
class PagEquipa {
    constructor() {
        this.title = "Equipa";
    }

    initial_f() {

    }

    getContent() {
        return "something"
    }
}

//Content5
class PagFaq {
    constructor() {
        this.title = "Perguntas Frequentes";
    }

    initial_f() {

    }

    getContent() {
        var content = "<div class='FAQ-holder'>";

        let i = 0;
        for (let [key, value] of Object.entries(FAQ)) {
            content += `<div class="FAQ-box-${device}" id="FAQ_cont${i}" onclick='click_desc_FAQ(${i},${value})">`;
            content += `<div class="FAQ-quest">
                                <h2>${key}</h2>
                            </div>
                        </div>\n
                        <div class="FAQ-cont-${device}" id="FAQ_cont${i}">
                        </div>`;
            i++;
        }
        return content + "</div>";
    }
}

function click_desc_FAQ(i,value) {
    document.getElementById(`FAQ_cont${i}`).innerHTML = value
}

window.PagAtividades = new PagAtividades();
window.PagPacotes = new PagPacotes();
window.PagLocalizacoes = new PagLocalizacoes();
window.PagEquipa = new PagEquipa();
window.PagFaq = new PagFaq();
