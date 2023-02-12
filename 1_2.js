const matrix = [
    [0.48, 0.5, 0, 0, 0.02, 0, 0, 0, 0, 0, 0],
    [0, 0.1, 0.9, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.29, 0, 0.4, 0, 0, 0.02, 0.29, 0, 0, 0, 0],
    [0.24, 0.18, 0, 0.05, 0, 0, 0.53, 0, 0, 0, 0],
    [0.18, 0.44, 0, 0, 0.27, 0, 0, 0.11, 0, 0, 0],
    [0, 0, 0.26, 0.07, 0, 0.34, 0.28, 0, 0.05, 0, 0],
    [0, 0, 0.1, 0.17, 0, 0.16, 0.22, 0, 0.12, 0.09, 0.14],
    [0, 0, 0.53, 0, 0, 0, 0, 0.47, 0, 0, 0],
    [0, 0, 0, 0, 0, 0.23, 0, 0.24, 0.4, 0.37, 0],
    [0, 0, 0, 0, 0, 0, 0.42, 0, 0, 0.58, 0],
    [0, 0, 0, 0, 0, 0, 0.31, 0.62, 0, 0, 0.07]

]


function multMatrix(A, B) {
    var rowsA = A.length,
        rowsB = B.length,
        colsB = B[0].length,
        C = [];

    for (var i = 0; i < rowsA; i++) { C[i] = new Array(colsB); }

    for (var k = 0; k < colsB; k++) {
        for (var i = 0; i < rowsA; i++) {
            var temp = 0;
            for (var j = 0; j < rowsB; j++) { temp += A[i][j] * B[j][k]; }
            C[i][k] = temp;
        }
    }

    return C;
}

function MatrixPow(n, A) {
    if (n == 1) return A;
    else return multMatrix(A, MatrixPow(n - 1, A));
}

function multMatrix2(A, B) {
    C = []
    for (let i = 0; i < 11; i++) {
        Z = 0
        for (let j = 0; j < 11; j++) {
            Z += A[j] * B[j][i]

        }
        C.push(Z)
    }
    return C
}

// Задание 2
// вероятности состояний системы спустя 7 шагов, если в начальный момент вероятность состояний были следующими
// A=(0.05, 0.17, 0, 0.19, 0.05, 0.02, 0.02, 0.17, 0.17, 0.14, 0.02); 
let k = 7
let answer2 = MatrixPow(k, matrix)
let a_0 = [0.05, 0.17, 0, 0.19, 0.05, 0.02, 0.02, 0.17, 0.17, 0.14, 0.02]
console.log(multMatrix2(a_0, answer2))
