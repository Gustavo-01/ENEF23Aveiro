const FAQ = {
    "É NECESSÁRIO PAGAR LOGO APÓS O ATO DE INSCRIÇÃO?":
        `Após preencheres o formulário, terás de efetuar o pagamento e enviar o respetivo comprovativo num prazo de 5 dias.
        Só aí a tua vaga estará assegurada!`,

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

class PagFaq {
    constructor() {
        this.title = "Perguntas Frequentes";
    }

    initial_f() {

    }

    getContent() {
        var content = "<div class='FAQ-holder'>";

        let i = 0;
        for (var key in FAQ) {
            content += `<div class="FAQ-box-${device}" id="FAQ_quest${i}" onclick="window.contentPage.click_desc_FAQ(${i},'${key}')">
                            <div class="FAQ-quest">
                                <h2>${key}</h2>
                            </div>
                        </div>
                            <div class="FAQ-cont-${device} FAQ-cont-hidden" id="FAQ_cont${i}">
                        </div>`;
            i++;
        }
        return content + "</div>";
    }

    click_desc_FAQ(i, key) {
        if (document.getElementById(`FAQ_cont${i}`).classList.contains("FAQ-cont-hidden")){
            document.getElementById(`FAQ_cont${i}`).innerHTML = "<h3 style='font-weight: 100; letter-spacing: 1px;'>" + FAQ[key] + "</h3>";
            document.getElementById(`FAQ_cont${i}`).classList.remove("FAQ-cont-hidden");
        }
        else {
            window.setTimeout(function () {
                document.getElementById(`FAQ_cont${i}`).innerHTML = "";
            }, 500);
            document.getElementById(`FAQ_cont${i}`).classList.add("FAQ-cont-hidden")
        }

       
    }
}

window.PagFaq = new PagFaq();
