var dugme = document.getElementsByClassName('submit-button')[0];
var result = document.getElementById("rezultat");
var brojac = suma = 0;
var niz_brojeva = [];
var novi_niz = [];

dugme.addEventListener('click', function (){
    var broj = document.getElementById("broj");

    if( isNaN( broj.value ) || broj.value.length == 0 ){
        result.innerHTML = "Unesena vrijednost mora biti broj."
        result.style.color = "red";
        return;
    }

    if( !isNaN( broj.value ) ){

        if( brojac == 0 && broj.value == 0 ){
            result.innerHTML = "Prvi broj mora biti različit od 0."
            result.style.color = "red";
            return;
        }

        if( broj.value == 0 ) {
            result.innerHTML += 'Upisani brojevi su: ' + niz_brojeva + '<br>';
            result.innerHTML += 'Niz brojeva cija je suma cifara veca od 7 je: ' + novi_niz;
            broj.setAttribute("disabled", "true");
            dugme.setAttribute("disabled", "true");
            result.style.color = "#fff";
            result.style.backgroundColor = '#C22D62';
            return;
        }

        if( broj.value != 0 ) {
            niz_brojeva.push( broj.value );
            if( new_niz( broj.value ) ) {
                novi_niz.push( new_niz( broj.value ) );
            }
            console.log( niz_brojeva );
            console.log( novi_niz );
        }

        result.innerHTML = "";
        brojac++;
    }

}, false);

function new_niz( broj ){
    var suma = 0;
    for( var i = 0; i < broj.length; i++ ){
        suma += broj[i]*1;
        console.log( broj[i]);
    }
    console.log( suma );
    if( suma >= 7 ){
        return broj;
    }

    return
}