class PagPacotes {
    constructor() {
        this.title = "Pacotes/Inscrições";
    }

    initial_f() {

    }

    getContent() {
        const device = window.getDevice();

        const content = `
                            <div class="pac-pacotes-${device}">
                                <div class="pac-table-btn-${device}">
                                    <img src=./img/packs.png>
                                    <button class="btn_logoPC" onclick="window.location = 'https://forms.gle/25NcmCm9HPBcyAwB9'" style="margin-top:10px;margin-bottom:0">Inscreve-te!</button>
                                    <p>Primeira fase: 6 a 11 de janeiro (62 vagas no pack Neutron Star)</p>
                                </div>  
                                <div class="pac-horarios-${device}">
                                    <img src=./img/horario.png  style="height:100%">
                                </div>
                                
                        </div>






`
        return content
        /*<div class="pac-horario-${device}">
                                    <img src="./img/horario.png" alt="./img/Palestrantes/Placeholder.png">
                                </div>
        return `<div class='pac-fitinha-holder${device}'>
                    <div class='pac-fitinha'>
                        <div class='pac-fitinha-in' style='position:relative; width:100%; height: 100%'>
                            <div><h2>Por anunciar!</h2></div>
                        </div>
                    </div>
                </div>`;
                */
    }

}

window.PagPacotes = new PagPacotes();
