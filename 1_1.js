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



// Задание 1
// вероятность того, что за 10 шагов система перейдет из состояния 1 в состояние 5;
let k = 10, i = 1, j = 5
answer1 = MatrixPow(k, matrix)
let task1 = `Вероятность того, что за k=${k} шагов система перейдет из состояния ${i} в состояние ${j} \n--> ${answer1[i - 1][j - 1]}`
console.log(task1)

