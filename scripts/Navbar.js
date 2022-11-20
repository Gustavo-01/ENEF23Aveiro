var firstScroll = true;

window.addEventListener("scroll", (event) => {
    //TODO slide ENEF23 to corner?



    let scroll_percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    if (scroll_percentage > 0.8) {
        if (firstScroll) {
            var t1 = gsap.timeline();
            t1.to(".description", { duration: 0.5, y: "-30px", ease: "ease-in" }, 0)
                .to(".description", { duration: 0.8, y: "0", ease: "ease-out" }, 0.5);
            firstScroll = false;

        }
    }
    
});

function navbar_bublleClick(id) {

    var sectionTitle = ["Plano de atividades", "Pacotes/Inscrições", "Localizações", "Equipa"]
    var device = "PC";
    if (window.matchMedia("(max-width: 750px)").matches) { device = "Mob"; }

    const content1 = `
                <div class="description-page-${device}" style="opacity: 1; z-index: 2" id="desc_page0">
                    <div class="des-cont-${device}" id="des_cont0" onclick="click_desc_cont(0)">
                        <div class="cont">
                            <h1>Nobel Talk</h1>
                            <p> Uma atividade sobre o Nobel da física atribuído no ano de 2022,
                                onde os participantes poderão assistir a uma palestra dirigida pelo professor doutor Vítor Amaral,
                                docente do Departamento de Física da Universidade de Aveiro </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont1" onclick="click_desc_cont(1)">
                        <div class="cont">
                            <h1>Palestras</h1>
                            <p> Palestra dirigida pelo professor doutor Carlos Brites acerca de “Materiais luminescentes para lógica molecular” </p>
                            <p> Palestra 2? </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont2" onclick="click_desc_cont(2)">
                        <div class="cont">
                            <h1> Debate </h1>
                            <p> Debate acerca das Alterações Climáticas com a participação do professor doutor João Miguel Dias,
                                do investigador David Carvalho, mediado pela ex-aluna da UA licenciada em MOG e mestre em Ciências do Mar e da Atmosfera,
                                Ana Filipa Ribeiro.  </p>
                        </div>
                    </div>
                </div>
                <div class="description-page-${device}" id="desc_page1">
                    <div class="des-cont-${device}" id="des_cont3" onclick="click_desc_cont(3)">
                        <div class="cont">
                            <h1>Workshops</h1>
                            <p> Atividade hands-on com a participação do professor doutor Ricardo Guimarães Dias para o tema (?),
                            e com a participação da investigadora do CESAM Joana Lourenço para o tema “Materiais Radioativos de Ocorrência Natural (NORM)”.</p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont4" onclick="click_desc_cont(4)">
                        <div class="cont">
                            <h1>Workshops/ Talks</h1>
                            <p>Atividade do tipo palestra, no horário de workshop, na qual os participantes têm a oportunidade,
                                no final do evento, de interagir com o palestrante de uma maneira mais descontraída e informal. </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont5" onclick="click_desc_cont(5)">
                        <div class="cont">
                            <h1>Observação FISUA</h1>
                            <p>Uma observação noturna do céu, proporcionada pela FISUA, associação apoiante do ENEF23.  </p>
                        </div>
                    </div>
                </div>
                <div class="description-page-${device}" id="desc_page2">
                    <div class="des-cont-${device}" id="des_cont6" onclick="click_desc_cont(6)">
                        <div class="cont">
                            <h1>Business Speed Dating</h1>
                            <p> Descrição </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont7" onclick="click_desc_cont(7)">
                        <div class="cont">
                            <h1>Feira de Emprego</h1>
                            <p>Conteúdo! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet enim at diam molestie porttitor. Maecenas </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont8" onclick="click_desc_cont(8)">
                        <div class="cont">
                            <h1>Inside Views</h1>
                            <p> Visitas aos laboratórios das instituições referidas para poderem aprender sobre a investigação associada a cada laboratório. </p>
                        </div>
                    </div>
                </div>
                <div class="description-page-${device}" id="desc_page3">
                    <div class="des-cont-${device}" id="des_cont9" onclick="click_desc_cont(9)">
                        <div class="cont">
                            <h1>Peddy Paper</h1>
                            <p> Visita á cidade, em estilo de peddy paper, onde as equipas terão de trabalhar em conjunto e enfrentar desafios para poderem chegar a meta final.
                                Serão desafios relacionados com a Física nos pontos mais bonitos e históricos da cidade de Aveiro.
                                Será com a ajuda da EPS Young Minds. </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont10" onclick="click_desc_cont(10)">
                        <div class="cont">
                            <h1>Sessão de jogos</h1>
                            <p> Sessão de jogos com a ajuda da EPS Young Minds. Haverá mini jogos no qual todos podem participar e depois haverá um jogo “grande”,
                                que será o Dr. Why relacionado com a física. </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" id="des_cont11" onclick="click_desc_cont(11)">
                        <div class="cont">
                            <h1>Jantar de Encerramento</h1>
                            <p> </p>
                        </div>
                    </div>
                </div>
                <div class="description-page-${device}" id="desc_page4">
                    <div class="des-cont-${device}" id="des_cont12" onclick="click_desc_cont(12)">
                        <div class="cont">
                            <h1> PLANCKS </h1>
                            <p> Descrição </p>
                        </div>
                    </div>
                    <div class="des-cont-${device}" style="flex: 0 0 66%" id="des_cont13" onclick="click_desc_cont(13)">
                        <div class="cont">
                            <h1>Student lectures/ Poster competition</h1>
                            <p> Iniciativa para motivar os estudantes a mostrar o que sabem fazer.
                                Na student Lectures poderão apresentar um artigo científico, que tiveram de fazer num estágio ou como trabalho de uma UC,
                                mas que nunca mostraram a ninguém. No Poster Competition,
                                a pessoa fará o poster para o evento sobre uma área da física e irá apresentar a todos. </p>
                        </div>
                    </div>
                </div>
                <div class="description-page-more-${device}" id="desc-more${device}">
                    <div class=description-page-more-PC-cont>CONTENT HERE</div>
                </div>

    `;
    const content2 = "";
    const content3 = "";
    const content4 = "";

    const bubble_N = id.slice(-1);

    var bgBubbleLeft;
    var color;
    switch (bubble_N){
        case '1':
            bgBubbleLeft = "0";
            color = getComputedStyle(document.documentElement).getPropertyValue('--color1');
            content = content1;
            break;
        case '2':
            bgBubbleLeft = "25";
            color = getComputedStyle(document.documentElement).getPropertyValue('--color2');
            content = content2;
            break;
        case '3':
            bgBubbleLeft = "50";
            color = getComputedStyle(document.documentElement).getPropertyValue('--color3');
            content = content3;
            break;
        case '4':
            bgBubbleLeft = "75";
            color = getComputedStyle(document.documentElement).getPropertyValue('--color4');
            content = content4;
            break;
    }

    const iconClass = ".icon" + device

    var tl = gsap.timeline();
    tl.to(".description-" + device, { duration: 0.3, y: "30px", opacity: "0", ease: "ease-in" }, 0)
        .add(function () {
            page = 0; section = bubble_N - 1;
            document.getElementById("description").innerHTML = content;
            document.getElementById("des_title").innerHTML = sectionTitle[bubble_N - 1];
            updatePageArrows();
        })
        .to("#bgBubble", { duration: 0.15, bottom: "50px", ease: "ease-out" }, 0)
        .to("#bubble1", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble2", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble3", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to("#bubble4", { duration: 0.1, y: "120%", boxShadow: 'none', ease: "ease-out", }, 0)
        .to(iconClass, { duration: 0.05, opacity: 0, ease: "ease-out", }, 0)
        .to(".bgB-holder", { duration: 0.2, left: bgBubbleLeft + "vw", ease: "ease-in-out" }, 0.1)
        .to("#bgBubble", { duration: 0.15, bottom: "0", ease: "ease-out" }, '-=0.2')
        .to(`#bubble${bubble_N}`, { duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: "ease-out" }, '-=0.1')
        .to(`#bubble${bubble_N}> span`, { duration: 0.15, y: "0%", opacity: 0.7, ease: "ease-out" }, '-=0.1')
        .to("#navbar_holder", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to(".des-title", { duration: 0.3, y: "30px", opacity: "0", textShadow: "2px 2px var(--color" + bubble_N + "_shade)", ease: "ease-in-out" }, 0)
        .to(".des-title", { duration: 0.5, y: "0", opacity: "1", ease: "ease-in-out" }, 0.3)
        .to(".description-holder-" + device, { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to("#sponsors_tab", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to("#bg", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to("#bgBubble", { duration: 0.3, backgroundColor: color, ease: "ease-in-out" }, 0)
        .to(".description-" + device, { duration: 0.5, y: "-30px", opacity: "1", ease: "ease-in" }, 0.3)

}

function Inscrever_click() {
    //TODO
}