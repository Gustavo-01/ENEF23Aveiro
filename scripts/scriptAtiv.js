﻿const Workshops = [
    ["Placeholder.png", "Isoladores Topológicos", "Sessão 1 e 2", "Isoladores topológicos têm potencial para serem usados ​​em uma variedade de aplicações, inclusive no desenvolvimento de dispositivos de computação quântica. Neste Workshop, irás trabalhar com noções de física da matéria condensada e aplicar conhecimentos de Python em computação quântica!"],
    ["carlos_azevedo.png", "Hands on Particles", "Sessão 1 e 2", "Se és fascinado pelos mecanismos de interação entre os blocos fundamentais da física, este Workshop é para ti. Prepara-te para conhecer um pouco mais do fantástico Modelo Padrão com as mãos na massa! Este Workshop é dividido numa componente computacional (1ª Sessão), e numa demonstração laboratorial (2ª Sessão), sendo que podes optar por escolher apenas uma delas, ou ambas."],
    ["Placeholder.png", "Fundamentos de Machine Learning", "Sessão 1 e 2", "Neste Workshop, terás a oportunidade de aprender sobre como funciona o Machine Learning, um dos sub-campos da computação mais relevantes na atualidade, nomeadamente importante para o desenvolvimento de Inteligência Artificial!"],
    ["nuno_silva.jpg", "Criptografia num Mundo Pós-Quântico", "Sessão 1 e 2", " A criptografia e a computação quântica são peças fundamentais nas redes de comunicações atuais. Neste Workshop, terás a oportunidade de trabalhar com algoritmos quânticos, usando o QISKIT, e trabalhar com a criptografia quântica como solução para o surgimento de um computador quântico."],
    ["luis_rino.png", "Impressão 3D", "Sessão 1", "Este Workshop destina-se aos interessados em aprender acerca de impressão 3D. Neste Workshop terás a oportunidade de aprender técnicas de modelação e o processo por trás de como funciona uma impressora 3D e como fazeres as tuas próprias impressões!"],
    ["Placeholder.png", "Redes e Sistemas Complexos", "Sessão 1", "Gareth Baxter, PhD em Física Teórica pela Universidade de Manchester e Pós-Doutorado na Universidade de Aveiro é investigador e co-autor de dezenas de artigos científicos. No ENEF23, irá dar uma Talk acerca da sua área de investigação - Redes e Sistemas Complexos."],
    ["Placeholder.png", "Buracos Negros e Ondas Gravitacionais", "Sessão 2", "O Gr@v é uma unidade de investigação integrada no CIDMA (Centro de Investigação e Desenvolvimento em Matemática e Aplicações), focada em gravitação forte e física das altas energias. No ENEF23, dois investigadores do Gr@v, Miguel Zilhão e Pedro Cunha, darão uma Talk sobre Buracos Negros e Ondas Gravitacionais."],
];

const InsideViews = [
    ["CESAM", "Laboratório de Modelação Estuarina e Costeira<br>Laboratório de Meteorologia e Climatologia<br>Laboratório de Oceanografia Física"],
    ["IT", "Optical Communications Lab<br>Radio Frequency Lab<br>Networks and Multimedia Communications Lab"],
    ["CICECO", "Por Anunciar"],
    ["i3N", "Por Anunciar"],
    ["IEETA", "Por Anunciar"],
];

const Palestras = [
    ["carlos_brites.png", "Materiais Luminescentes para Lógica Molecular", "", "Carlos Brites, PhD em Física pela UA, é investigador no Instituto de Materiais de Aveiro -  CICECO e professor auxiliar do Departamento de Física da Universidade de Aveiro.  No ENEF2023, irá dar uma palestra sobre o seu projeto de investigação, LogicAll, que consiste na produção e caracterização de dispositivos lógicos moleculares baseados em materiais luminescentes, utilizados em computação."],
    ["Placeholder.png", "The rigidity of soft systems", "", "Nuno Araújo, Doutorado em Física pela Universidade do Minho, é Professor no Departamento de Física de Ciências da Universidade de Lisboa e investigador no Centro de Física Teórica e Computacional (CFTC). No ENEF2023, irá dar uma palestra acerca da sua principal área de investigação, Soft Matter, o principal constituinte da matéria no nosso planeta, no âmbito da Física da Matéria Condensada."],
];

const Debate = [
    ["jm_dias.jpg", "João Miguel Dias (Orador)", "", "Mestre em Ciências Geofísicas na Universidade de Lisboa e PhD em Física pela Universidade de Aveiro, João Miguel Dias é o atual Diretor do Departamento de Física da Universidade de Aveiro e um dos professores catedráticos do mesmo. É co-autor de diversas publicações científicas nas áreas de Oceanografia Física e investigador no Centro de Estudos de Ambiente e do Mar – CESAM, sendo co-coordenador da linha temática Sistemas Ambientais Integrados."],
    ["david_carvalho.jpg", "David Carvalho (Orador)", "", "Mestre em Meteorologia e Oceanografia Física e PhD em Física pela Universidade de Aveiro, David Carvalho é, desde 2019, investigador no Centro de Estudos de Ambiente e do Mar – CESAM, no grupo de investigação Processos Atmosféricos e Modelação (APM). Entre 2016 e 2019, foi investigador no Global Modeling and Assimilation Office (GMAO) do NASA Goddard Space Flight Center e no Goddard Earth Sciences Technology and Research (GESTAR) da Universities Space Research Association, nos EUA. "],
];

const NobelTalk = [
    ["vitor_amaral.jpg", "", "", "Vitor Amaral, PhD em Física da Matéria Condensada pela Universidade do Porto é, atualmente, um dos professores catedráticos do Departamento de Física da Universidade de Aveiro. Para além de docente, é investigador num Laboratório Associado do Instituto de Materiais de Aveiro – CICECO e co-autor de centenas de trabalhos de investigação nas áreas de Supercondutividade, Física dos materiais, Tecnologias nucleares e Nanotecnologia."],
];

const arrowDown = `<svg width="100%" height="100%" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>`;
const arrowUp = `<svg width="100%" height="100%" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                        </svg>`;

window.onload = function () {

    //Loading page
    document.getElementById("loading_page").style.opacity = "0";

    //MobileSupport
    MobileCheck();

}

function buildContent(activityList, ActivityName) {
    var device = window.getDevice()
    var content = '';

    for (var i = 0; i < activityList.length; i++) {
        const activity = activityList[i];
        if (activityList == InsideViews) {
            var innerContent = `
        <div class="Ativ-box${device} Ativ-box-closed" onclick="boxExpand(this, ${i},'${ActivityName}')">
                <div class="Ativ-box-cont">
                    <div class="Ativ-box-Title" style="margin-left: 15px">
                        <h4>${activity[0]}</h4>
                    </div>
                    <div class="Ativ-box-desc" id="Ativ_box_desc_${ActivityName}${i}" style="display:none; margin-left:15px">
                        ${activity[1]}
                    </div>
                </div>
                <div class="Ativ-box-arrow-down-${device}" id="arrowDown-${ActivityName}${i}">${arrowDown}</div>
            </div>`;
        }
        else if (activityList == NobelTalk) {
            var innerContent = `
        <div class="Ativ-box-nobel${device}"  style="width:100%;">
            <div class="Ativ-box-imgs">
                <img class="Ativ-box-BigImg" src="img/Palestrantes/${activity[0]}" />
            </div>
            <div class="Ativ-box-cont">
                <div class="Ativ-box-Title"  style="border-bottom:none">
                    <h4>${activity[1]}</h4>
                    <p>${activity[2]}</p>
                </div>
                <div class="Ativ-box-desc" id="Ativ_box_desc_${ActivityName}${i}">
                    ${activity[3]}
                </div>
            </div>
        </div>`;
        }
        else {
            var innerContent = `
        <div class="Ativ-box${device} Ativ-box-closed" onclick="boxExpand(this, ${i},'${ActivityName}')">
            <div class="Ativ-box-imgs">
                <img class="Ativ-box-BigImg" src="img/Palestrantes/${activity[0]}" />
            </div>
            <div class="Ativ-box-cont">
                <div class="Ativ-box-Title">
                    <h4>${activity[1]}</h4>
                    <p>${activity[2]}</p>
                </div>
                <div class="Ativ-box-desc" id="Ativ_box_desc_${ActivityName}${i}" style="display:none">
                    ${activity[3]}
                </div>
            </div>
            <div class="Ativ-box-arrow-down-${device}" id="arrowDown-${ActivityName}${i}">${arrowDown}</div>
        </div>`;
        }

        if (i % 2) {
            content += innerContent + '</div>';
        }
        else {
            content += `<div class="Ativ-row${device}">` + innerContent;
        }
    }

    return content;
}



var previousSection = null;
var was_loaded = false;
function ExpandSection(num) {
    const section = document.getElementById("section" + num);
    const sectionHead = document.getElementById("section_head" + num);
    const sectionContent = document.getElementById("ativCont" + num);
    was_loaded = true;


    var activityList;
    var ActivityName;
    switch (num) {
        case 1:
            activityList = Workshops;
            ActivityName = "work";
            break;
        case 2:
            activityList = InsideViews;
            ActivityName = "ins";
            break;
        case 3:
            activityList = Palestras;
            ActivityName = "pal";
            break;
        case 4:
            activityList = Debate;
            ActivityName = "deb";
            break;
        case 5:
            activityList = NobelTalk;
            ActivityName = "nob";
            break;
    }

    sectionContent.innerHTML = buildContent(activityList, ActivityName);

    sectionHead.childNodes[1].style.flex = "1 1 100%";
    sectionHead.childNodes[3].style.flex = "1 1 0";
    sectionHead.childNodes[5].childNodes[1].innerHTML = "-";

    section.classList.remove("closed-headPC");

    section.onclick = "";
    setTimeout(() => {
        sectionHead.onclick = function () { ShrinkSection(num); }
    }, 250)
}

function ShrinkSection(num) {
    const section = document.getElementById("section" + num);
    const sectionHead = document.getElementById("section_head" + num);

    sectionHead.childNodes[1].style.flex = "1 1 0";
    sectionHead.childNodes[3].style.flex = "1 1 100%";
    sectionHead.childNodes[5].childNodes[1].innerHTML = "+";

    sectionHead.onclick = "";
    setTimeout(() => {
        section.onclick = function () { ExpandSection(num); }
        section.classList.add("closed-headPC");
    }, 250)

}
function ShrinkAll() {
    if (was_loaded) {
        for (let i = 1; i <= 5; i++) { ShrinkSection(i) }
    }

}
var previousElems = [];
function boxExpand(element, num, activity) { //TODO close when clicked again (Adicionar uma seta para baixo) Mobile Support

    if (previousElems.includes(element)) {
        element.classList.add("Ativ-box-closed");
        document.getElementById(`arrowDown-${activity}${num}`).innerHTML = arrowDown;
        document.getElementById(`Ativ_box_desc_${activity}${num}`).style.display = "none";
        previousElems.splice(previousElems.indexOf(element), 1);
    }
    else {
        element.classList.remove("Ativ-box-closed");
        document.getElementById(`arrowDown-${activity}${num}`).innerHTML = arrowUp;
        document.getElementById(`Ativ_box_desc_${activity}${num}`).style.display = "flex";
        previousElems.push(element);
    }
}