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
                                <div class="TeamContentTitle${device}" id="administracao">
                                    <img src="./img/Equipas/Administracao/titulo_administracao.png" width:"auto" height="50%">
                                </div> 
                                <div class="TeamContent${device}" id="telmo">
                                    <img src="./img/Equipas/Administracao/telmo.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent${device}" id="iara">
                                    <img src="./img/Equipas/Administracao/iara.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="carmo">
                                    <img src="./img/Equipas/Administracao/carmo.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent${device}" id="academica">
                                    <img src="./img/Equipas/Academica/titulo_academica.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="ana_joao">
                                    <img src="./img/Equipas/Academica/ana_joao.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="cupido">
                                    <img src="./img/Equipas/Academica/cupido.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="monica">
                                    <img src="./img/Equipas/Academica/monica.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="alojamento">
                                    <img src="./img/Equipas/Alojamento/titulo_alojamento.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="rita">
                                    <img src="./img/Equipas/Alojamento/rita.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="bruno">
                                    <img src="./img/Equipas/Alojamento/bruno.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="comunicacao">
                                    <img src="./img/Equipas/Comunicacao/titulo_comunicacao.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="estaco">
                                    <img src="./img/Equipas/Comunicacao/estaco.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="gustavo">
                                    <img src="./img/Equipas/Comunicacao/gustavo.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="quelhas">
                                    <img src="./img/Equipas/Comunicacao/quelhas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="vasco">
                                    <img src="./img/Equipas/Comunicacao/vasco.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent${device}" id="empresarial">
                                    <img src="./img/Equipas/Empresarial/titulo_empresarial.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="lucas">
                                    <img src="./img/Equipas/Empresarial/lucas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="andre">
                                    <img src="./img/Equipas/Empresarial/andre.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="pedro">
                                    <img src="./img/Equipas/Empresarial/pedro.png" width:"auto" height="auto">
                                </div>  <div class="TeamContent${device}" id="administracao">
                                    <img src="./img/Equipas/Administracao/titulo_administracao.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent${device}" id="telmo">
                                    <img src="./img/Equipas/Administracao/telmo.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent${device}" id="iara">
                                    <img src="./img/Equipas/Administracao/iara.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="carmo">
                                    <img src="./img/Equipas/Administracao/carmo.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent${device}" id="academica">
                                    <img src="./img/Equipas/Academica/titulo_academica.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="ana_joao">
                                    <img src="./img/Equipas/Academica/ana_joao.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="cupido">
                                    <img src="./img/Equipas/Academica/cupido.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="monica">
                                    <img src="./img/Equipas/Academica/monica.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="alojamento">
                                    <img src="./img/Equipas/Alojamento/titulo_alojamento.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="rita">
                                    <img src="./img/Equipas/Alojamento/rita.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="bruno">
                                    <img src="./img/Equipas/Alojamento/bruno.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="comunicacao">
                                    <img src="./img/Equipas/Comunicacao/titulo_comunicacao.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="estaco">
                                    <img src="./img/Equipas/Comunicacao/estaco.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="gustavo">
                                    <img src="./img/Equipas/Comunicacao/gustavo.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="quelhas">
                                    <img src="./img/Equipas/Comunicacao/quelhas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="vasco">
                                    <img src="./img/Equipas/Comunicacao/vasco.png" width:"auto" height="auto">
                                </div> 
                                <div class="TeamContent${device}" id="empresarial">
                                    <img src="./img/Equipas/Empresarial/titulo_empresarial.png" width:"auto" height="auto">
                                </div>
                                <div class="TeamContent${device}" id="lucas">
                                    <img src="./img/Equipas/Empresarial/lucas.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="andre">
                                    <img src="./img/Equipas/Empresarial/andre.png" width:"auto" height="auto">
                                </div>  
                                <div class="TeamContent${device}" id="pedro">
                                    <img src="./img/Equipas/Empresarial/pedro.png" width:"auto" height="auto">
                                </div>  
                            <\div>
`
        return content
    }

    Scroll() {
        window.TeamsTab = document.getElementById("TeamHolder");
        window.TeamsMemberHeight = document.getElementById("gustavo").clientHeight;
        window.setInterval(() => {                //200vh + 15 * gap
            if (window.TeamsTab.scrollTop > window.TeamsMemberHeight * 20 + 1000) {
                window.TeamsTab.scrollTop = 0;
            }
            window.TeamsTab.scrollTo(0, window.TeamsTab.scrollTop + Math.max(window.innerHeight / 2000, 1)); // control velocity here
        }, 8); //or here
    }
}

window.PagEquipa = new PagEquipa();