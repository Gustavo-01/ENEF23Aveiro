device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = true }

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
        var content = `<div>
</div>`
        return Packages["Soon"]
    }

}

window.PagPacotes = new PagPacotes();
