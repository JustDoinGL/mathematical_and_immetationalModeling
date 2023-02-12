const matrix = [
    [0.48, 0.5, 0, 0, 0.02, 0, 0, 0, 0, 0, 0],
    [0, 0.1, 0.9, 0, 0, 0, 0, 0, 0, 0, 0],
    [0.29, 0, 0.4, 0, 0, 0.02, 0.29, 0, 0, 0, 0],
    [0.24, 0.18, 0, 0.05, 0, 0, 0.53, 0, 0, 0, 0],
    [0.18, 0.44, 0, 0, 0.27, 0, 0, 0.11, 0, 0, 0],
    [0, 0, 0.26, 0.07, 0, 0.34, 0.28, 0, 0.05, 0, 0],
    [0, 0, 0.1, 0.17, 0, 0.16, 0.22, 0, 0.12, 0.09, 0.14],
    [0, 0, 0.53, 0, 0, 0, 0, 0.47, 0, 0, 0],
    [0, 0, 0, 0, 0, 0.23, 0, 0, 0.4, 0.37, 0],
    [0, 0, 0, 0, 0, 0, 0.42, 0, 0, 0.58, 0],
    [0, 0, 0, 0, 0, 0, 0.09, 0, 0, 0, 0.91]
]

function MatrixPow1(n, A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            A[i][j] = A[i][j] ** n
        }
    }
    return A
}

function MatrixPow(n, A) {
    if (n == 1) return A;
    else return MultiplyMatrix(A, MatrixPow(n - 1, A));
}

function NoSumMatrix(A, B) {
    let C = []
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
            A[i][j] = A[i][j] - B[i][j];
        }
    }
    return A;
}

function SumMatrix(A, B) {
    let C = []
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
            A[i][j] = A[i][j] + B[i][j];
        }
    }
    return A;
}

function MultiplyMatrix(A, B) {
    var rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[i] = [];
    for (var k = 0; k < colsB; k++) {
        for (var i = 0; i < rowsA; i++) {
            var t = 0;
            for (var j = 0; j < rowsB; j++) t += A[i][j] * B[j][k];
            C[i][k] = t;
        }
    }
    return C;
}

function func678_common(matrix, k) {
    matrix_pr = matrix.slice();
    let matrix_powers = []
    for (let m = 1; m < k + 1; m++) {
        matrix_powers.push(MatrixPow(m, matrix_pr))
    }
    let results = []
    result = []
    let z = 1
    for (let i = 0; i < k - 1; i++) {
        if (z > 3) {
            sum = SumMatrix(MatrixPow1(z, matrix),result[i-1])
    } else {
        sum = MatrixPow1(z, matrix)
    }
    result.push(NoSumMatrix(matrix_powers[i+1], sum))
    z += 1

}
return results.concat(result)
}

function task7(matrix, k) { 
    z = func678_common(matrix, k)
    x = z[z.length - 1]
    let C = []
    for (let i = 0; i < x.length; i++) {
        C[i] = x[i][i]
    }
    return C
}

let i = 11,  k = 6

answer6 = task7(matrix, k)
console.log(`Вероятность первого возвращения в состояние {i} за k={k} шагов\n--> ${answer6[i - 1]}`)





