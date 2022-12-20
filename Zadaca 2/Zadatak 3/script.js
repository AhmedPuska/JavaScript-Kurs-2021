document.write('<h2>Zadatak 3</h2>');

//nastaviti pisati kod ispod

function convert(heightCm) {
    let m = heightCm / 100;
    return m;
}

let metar = prompt("Unesite visinu u CM");
document.write("Upisana visina: " + metar + "cm <br>");
metar = convert(metar);
if(metar.toString().split(".").length>1) {
    document.write("Visoki ste " + metar.toString().split(".")[0] +"m i " + metar.toString().split(".")[1] +"cm. " );   
}
else {
    document.write("Visoki ste " + metar.toString().split(".")[0] +"m ");
}