let unos = 0;
let array = [];
let count = 0;
let sum = 0;
for(let i = 0; i<5;i++) {
    unos = +prompt("Unesite " + (i+1) + " broj");
    array.push(unos);
}

document.write("<br>Upisane vrijednosti su: " + array + ","+"<br>");
array.sort(function(a,b){ return a-b;});
document.write("Sortiran niz je: " + array +"<br>");
document.write("Najveci upisani broj je: " + array[array.length-1]+"<br>");
// console.log("Upisane vrijednosti su: " + array + ",");
// console.log("Sortiran niz je: " + array);
// console.log("Najveci upisani broj je: " + array[array.length-1]);

for(let i = 0; i<array.length; i++) {
    sum += array[i];
}
document.write("Prosjecna vrijednost upisanih brojeva je: " + (sum/array.length)+"<br>");
// console.log("Prosjecna vrijednost upisanih brojeva je " + (sum/array.length));

for(let i = 0; i<array.length; i++) {
    if(array[i]%2!=0) {
        count++;
    }
}

document.write("Broj neparnih brojeva koji su upisani je: " + count+"<br>");
// console.log("Broj neparnih brojeva koji su upisani je: " + count);


