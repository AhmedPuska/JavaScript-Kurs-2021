document.write('<h2>Zadatak 2</h2>');

//nastaviti pisati kod ispod


let matrix = [
    [2, 4, 6],
    [Math.pow(2, 2), Math.pow(4, 2), Math.pow(6, 2)],
    [Math.pow(2, 3), Math.pow(4, 3), Math.pow(6, 3)]
]

console.log(matrix)

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

        document.write("[" + i + "]" + "[" + j + "] " + " = " + matrix[i][j]+"<br><br>");
    }

}