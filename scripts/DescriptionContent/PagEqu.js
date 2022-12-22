class PagEquipa {
    constructor() {
        this.title = "Equipa";
    }

    initial_f() {
        this.Scroll()

    }

    getContent() {
        const device = window.getDevice();
        var content = `<div class="TeamHolder" id="TeamHolder">
                                <div class="TeamContent" id="telmo">
                                    <img src="./img/Equipas/Administracao/telmo.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent" id="iara">
                                    <img src="./img/Equipas/Administracao/iara.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="carmo">
                                    <img src="./img/Equipas/Administracao/carmo.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="ana_joao">
                                    <img src="./img/Equipas/Academica/ana_joao.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="cupido">
                                    <img src="./img/Equipas/Academica/cupido.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="monica">
                                    <img src="./img/Equipas/Academica/monica.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent" id="rita">
                                    <img src="./img/Equipas/Alojamento/rita.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="bruno">
                                    <img src="./img/Equipas/Alojamento/bruno.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="estaco">
                                    <img src="./img/Equipas/Comunicacao/estaco.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="gustavo">
                                    <img src="./img/Equipas/Comunicacao/gustavo.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="quelhas">
                                    <img src="./img/Equipas/Comunicacao/quelhas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="vasco">
                                    <img src="./img/Equipas/Comunicacao/vasco.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="lucas">
                                    <img src="./img/Equipas/Empresarial/lucas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="andre">
                                    <img src="./img/Equipas/Empresarial/andre.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="pedro">
                                    <img src="./img/Equipas/Empresarial/pedro.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="telmo">
                                    <img src="./img/Equipas/Administracao/telmo.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent" id="iara">
                                    <img src="./img/Equipas/Administracao/iara.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="carmo">
                                    <img src="./img/Equipas/Administracao/carmo.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="ana_joao">
                                    <img src="./img/Equipas/Academica/ana_joao.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="cupido">
                                    <img src="./img/Equipas/Academica/cupido.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="monica">
                                    <img src="./img/Equipas/Academica/monica.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent" id="rita">
                                    <img src="./img/Equipas/Alojamento/rita.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="bruno">
                                    <img src="./img/Equipas/Alojamento/bruno.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="estaco">
                                    <img src="./img/Equipas/Comunicacao/estaco.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="gustavo">
                                    <img src="./img/Equipas/Comunicacao/gustavo.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="quelhas">
                                    <img src="./img/Equipas/Comunicacao/quelhas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="vasco">
                                    <img src="./img/Equipas/Comunicacao/vasco.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="lucas">
                                    <img src="./img/Equipas/Empresarial/lucas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="andre">
                                    <img src="./img/Equipas/Empresarial/andre.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent" id="pedro">
                                    <img src="./img/Equipas/Empresarial/pedro.png" width:"auto" height="auto">
                                </div>
                            <\div>
`
        return content
    }

    Scroll() {
        window.TeamsTab = document.getElementById("TeamHolder");
        window.TeamsMemberHeight = (window.innerHeight - 100);
        window.setInterval(() => {                //200vh + 15 * gap
            console.log(window.TeamsTab.scrollTop, window.TeamsMemberHeight * 15 + 750);
            if (window.TeamsTab.scrollTop > window.TeamsMemberHeight * 15 + 750) {
                window.TeamsTab.scrollTop = 0;
            }
            window.TeamsTab.scrollTo(0,window.TeamsTab.scrollTop + 1 ); // control velocity here
        }, 1); //or here
    }
}

window.PagEquipa = new PagEquipa();