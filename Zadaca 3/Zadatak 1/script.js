var prviBroj = document.getElementsByName("prvibroj");
var drugiBroj = document.getElementsByName("drugibroj");
var rezultat = document.getElementsByName("rezultat");
var errorEmpty = document.getElementById("error_empty");
var error = document.getElementById("error");
var btn = document.getElementsByName("izracunaj");
var operacija = document.getElementsByName("operacija");
btn[0].addEventListener("click", function () {

    if (operacija[0].checked || operacija[1].checked) {

        error.innerHTML = "";
    } else {
        error.innerHTML = "Morate izabrati operaciju<br>";
    }
    if (!prviBroj[0].value == "" && !drugiBroj[0].value == "") {
        if (!isNaN(prviBroj[0].value) && !isNaN(drugiBroj[0].value)) {
            if (operacija[0].checked) {
                rezultat[0].value = +prviBroj[0].value + +drugiBroj[0].value;
            } else if (operacija[1].checked) {
                rezultat[0].value = +prviBroj[0].value * +drugiBroj[0].value;
            }
        } else {
            error.innerHTML += "Dozvoljen upis samo brojeva";
        }
        errorEmpty.innerHTML = "";
    } else {
        errorEmpty.innerHTML = "Input polja ne smiju biti prazna";
    }
});