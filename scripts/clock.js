
function clock() {

    //Data agora
    const d = new Date();

    //Para definir data de começo manualmente, descomentar as seguintes linhas.
    //-------------------(ano, mês, dia, hora, minuto, segundo)
    //const d = new Date(2022, 1, 0, 1, 0, 0);
    //-------------------("ano-mês-dia")
    //const d  = new Date("2023-01-29")

    //Importante - Meses começam em 0 , janeiro = 0, fevereiro = 1 ...

    // Data de acontecimento
    const year = 2023;
    const month = 1;
    const day = 9;
    const hours = 0;
    const minutes = 0;

    const d2 = new Date(year, month, day, hours, minutes)
    var total_time = d2.getTime() - d;
    if (total_time <= 0) { total_time = 0; }
    const clock = second_to_days(total_time);
    return clock

    function second_to_days(time) {
        var miliseconds = time;
        var seconds = 0;
        var minutes = 0;
        var hours = 0;
        var days = 0;
        if (miliseconds >= 1000) {
            seconds = Math.floor(miliseconds / 1000);
            miliseconds %= 1000;
            if (seconds >= 60) {
                minutes = Math.floor(seconds / 60);
                seconds %= 60;
                if (minutes >= 60) {
                    hours = Math.floor(minutes / 60);
                    minutes %= 60;
                    if (hours >= 24) {
                        days = Math.floor(hours / 24);
                        hours %= 24;
                    }
                }
            }

        }
        return [days, hours, minutes, seconds];
    }

    /*
    function days_and_months(d1, d2) {

        function daysInMonth(d2) {
            var month = d2.getMonth();
            var year = d2.getFullYear();
            days = new Date(year, month, 0).getDate();
            return days
        }

        //Calculate the differences between the start and end dates
        var yearsDifference = d2.getFullYear() - d1.getFullYear();
        var monthsDifference = d2.getMonth() - d1.getMonth();
        var daysDifference = d2.getDate() - d1.getDate();

        var monthCorrection = 0;
        if (daysDifference < 0) {
            monthCorrection = -1;
            daysDifference += daysInMonth(d2);
        }
        return [(yearsDifference * 12 + monthsDifference + monthCorrection), daysDifference];
    };
    */
}

function set_clock(){
    const clock_arr = clock();
    for(i=0; i < clock_arr.length; i++){
        clock_arr[i] = clock_arr[i].toString()
        if(clock_arr[i].length === 1){
            clock_arr[i] = "0" + clock_arr[i];
        }
    }
    document.getElementById("clockd").innerHTML = clock_arr[0];
    document.getElementById("clockh").innerHTML = clock_arr[1];
    document.getElementById("clockm").innerHTML = clock_arr[2];
    document.getElementById("clocks").innerHTML = clock_arr[3];
}

var intervalId = window.setInterval(function(){
    set_clock()  
}, 1000);
