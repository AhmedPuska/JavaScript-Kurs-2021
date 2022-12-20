document.write('<h2>Zadatak 1</h2>');

//nastaviti pisati kod ispod



var cijena = ['KM 1.00', 'KM 1.85', 'KM 19.99', 'KM 4.85'];

let str;
let suma = 0;
for (let i = 0; i < cijena.length; i++) {
    str += cijena[i].split(" ");
    // console.log(cijena[i].split(" ")[1]);
    suma += Number(cijena[i].split(" ")[1]);
}

document.write("Zadat je niz: [" + cijena + "]<br>");
document.write("Suma zadatog niza korsiteći split metodu je: " + suma.toFixed(2)+" KM<br>");


let prices = ['2.05 BAM', '24.50 BAM', '10.25 BAM', '3.45 BAM'];
let sum = 0;
for(let i = 0; i <prices.length; i++) {
    let suma=0;
    suma = prices[i].slice(0, prices[i].length-3);
    sum += +suma;
}


document.write("Zadat je niz: [" + prices + "]<br>");
document.write("Suma zadatog niza korsiteći slice metodu je: " + sum.toFixed(2)+" BAM<br>");
