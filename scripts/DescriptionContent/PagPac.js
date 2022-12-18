device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = true }

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

window.PagPacotes = new PagPacotes();
