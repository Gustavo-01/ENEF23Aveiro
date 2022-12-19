device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = true }

class PagPacotes {
    constructor() {
        this.title = "Pacotes/Inscrições";
    }

    initial_f() {

    }

    getContent() {
        return `<div class='pac-fitinha'>
                    <div class='pac-fitinha-in' style='position:relative; width:100%; height: 100%'>
                        <div><h2>Por anunciar!</h2></div>
                    </div>
                </div>`;
    }

}

window.PagPacotes = new PagPacotes();
