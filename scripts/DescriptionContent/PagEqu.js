device = "PC"; if (window.matchMedia("(max-width: 750px)").matches) { device = true }

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

window.PagEquipa = new PagEquipa();