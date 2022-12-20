let arrayNeg = [];
let sum = 0;
let unos = 0;
for(let i=0; i<5;i++) {
    unos = +prompt("Unesite: " + (i+1) +" broj");
    if(unos<0) {
        arrayNeg.push(unos);
        sum += unos;
    } 
}
if(unos<0) {
    document.write("Niz negativnih brojeva je: " + arrayNeg+"<br>");
    document.write("Suma negativnih brojeva je: " + sum+"<br>");
    // console.log("Niz negativnih brojeva je: " + arrayNeg);
    // console.log("Suma negativnih brojeva je: " + sum);
} else {
    document.write("Niste unijeli niti jedan negativan broj<br>");
    // console.log("Niste unijeli niti jedan negativan broj");
}