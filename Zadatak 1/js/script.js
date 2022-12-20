var tekst = document.getElementsByClassName('text')[0];
var rezultat = document.getElementById("rezultat");
var word_counter = 1;
var samog_counter = 1;
var tekst_val = '';

tekst.addEventListener('keypress', function(e){
    tekst_val = tekst.value;
    
    if( e.key === 'Enter' ){
        for( var i = 0; i < tekst_val.length; i++){
            if( tekst_val[i] == " " ){
                word_counter++;
            }

            if( tekst_val[i] == "a" || tekst_val[i] == "e" || tekst_val[i] == "o" || tekst_val[i] == "i" || tekst_val[i] == "u" ){
                samog_counter++;
            }
        }

        if( tekst_val.trim().length == 0 ){
            rezultat.innerHTML = "Morate upisati barem jednu rijec.";
            rezultat.style.color = "red";

            return;
        }

        rezultat.innerHTML = '';
        rezultat.innerHTML += 'Broj upisanih rijeci je: ' + word_counter + '<br>';
        rezultat.innerHTML += 'Broj samoglasnika u tekstu je: ' + samog_counter;
        rezultat.style.backgroundColor = "#C22D62";
        rezultat.style.color = "#fff";
        tekst.setAttribute('disabled', 'true');
    }
    
}, false);