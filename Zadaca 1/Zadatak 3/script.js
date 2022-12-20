let input = prompt("Unesite broj");
let array = [];
for(let i =0; i<=input;i++) {
    if(input%i==0) {
        // console.log(i);
        array.push(i);
    }
}
document.write("Broj " + input + " je djeljiv sa: " + array);
// console.log("broj " + input + " je djeljiv sa: " + array);