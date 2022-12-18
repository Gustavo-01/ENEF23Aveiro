device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = true }

const atividades = {
    "Workshops/ Talks": `<p>
        Nos Workshops e Talks ter�s a oportunidade de entrar em contacto direto com investigadores e profissionais em diversas �reas, e p�r as �m�os na massa�,
        aplicando conhecimentos de uma forma din�mica!
    </p>`,

    "Palestras": `<p>
        Esperam-te palestras interessantes relacionadas a diversas �reas da F�sica, nas quais ir�s assistir a oradores de renome a n�vel nacional e
        aprender sobre as suas �reas de investiga��o!
    </p>`,

    "Inside Views": `<p>
        Nas Inside Views, conhecer�s alguns dos meios de investiga��o principais e ter�s a oportunidade de visitar laborat�rios dos diversos institutos e
        centros de investiga��o
    </p>`,

    "Business Speed Dating": `<p>
        Derivada da Feira de Emprego, esta atividade tem estilo de um �Speed Dating�, que facilitar� a tua interac��o com os representantes das empresas
        presentes.
    </p>`,

    "Feira de Emprego": `<p>
        Numa Feira de Emprego com diversas empresas e institutos convidados, ter�s a oportunidade de interagir diretamente com diversas entidades empregadoras
        em diversas �reas de tecnologia!
    </p>`,

    "Informal Talks": `<p>
        Nesta atividade poder�s falar com Alumni de cursos relacionados a F�sica, Engenharia F�sica ou Meteorologia, Oceanografia e Geof�sica, e satisfazer as
        tuas curiosidades!
    </p>`,

    "Nobel Talk": `<p>
        Na Nobel Talk ter�s a oportunidade de ouvir a apresenta��o do Nobel por um dos professores catedr�ticos do Departamento de F�sica da UA e de colocar as
        tuas quest�es � cerca do tema!
    </p>`,

    "Observa��o FISUA": `<p>
        A FISUA � Associa��o de F�sica da Universidade de Aveiro - ir� conduzir uma observa��o noturna, na qual aprender�s a observar e identificar os
        diversos objetos que se encontram no c�u estrelado em fevereiro.
    </p>`,

    "Debate": `<p>
        �Altera��es Clim�ticas�- um tema que ser� aprofundado por investigadores e profissionais das �reas de Meteorologia, Climatologia e Oceanografia no
        debate, no qual poder�s participar, colocando quest�es.    </p>`,


    "Student Lectures": `<p>
        Na Student Lectures Competition ter�s a oportunidade de apresentar uma palestra, e na Poster Competition ter�s a oportunidade de desenvolver um poster cient�fico.
    </p>`,

    "PLANCKS": `<p>
        O Physics League Across Numerous Countries for Kick-ass Students � uma competi��o de f�sica te�rica para estudantes de licenciatura e mestrado, que
        ocorrer� presencialmente no ENEF23.
    </p>`,

    "Peddy Paper": `<p>
        Espera-te um Peddy Paper organizado para dar-te a conhecer o centro da cidade de Aveiro, onde ter�s a oportunidade de entrar em contacto com a cultura
        Aveirense e alguns dos pontos principais da cidade!
    </p>`,

    "Febrada": `<p>
        Uma das principais atividades de conv�vio, tradicional aos Encontros Nacionais de Estudantes de F�sica, prepara-te para uma grande noitada de festa!
    </p>`,

    "Jantar de Encerramento": `<p>
        Para encerrar a tua estadia na bel�ssima cidade de Aveiro, a tua �ltima noite acad�mica no ENEF23 manifesta-se num jantar com todos os participantes e
        equipa de organiza��o!
    </p>`,

    "Sess�o de Jogos": `<p>
        A �ltima atividade de conv�vio no ENEF23, junta-te aos outros participantes e recupera dos 3 dias recheados que experienciaste, com um torneio de Dr.
        Why e diversos jogos de tabuleiro.
    </p>`,

}

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

window.PagAtividades = new PagAtividades();
