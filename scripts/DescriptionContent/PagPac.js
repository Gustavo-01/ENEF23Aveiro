const Packages = {
    'Soon':
        "Em Breve"
    }

class PagPacotes {
    constructor() {
        this.title = "Pacotes/Inscrições";
    }

    initial_f() {

    }

    getContent() {
        const device = window.getDevice();

        return `<div class='pac-fitinha'>
                    <div class='pac-fitinha-in' style='position:relative; width:100%; height: 100%'>
                        <div><h2>Por anunciar!</h2></div>
                    </div>
                </div>`;
    }

}

window.PagPacotes = new PagPacotes();
