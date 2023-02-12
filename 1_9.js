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

function MultiplyMatrix2(A, B) { // умножение матриц
    let C = Array(A.length).fill(0)
    for (let i = 0; i < A.length; i++) {
        let c = 0
        for (let j = 0; j < A.length; j++) {
            c += A[i][j] * B[j]
        }
        C[i] = c
    }
    return C
}

function InverseMatrix(A)  
{
    var det = Determinant(A);                
    if (det == 0) return false;
    var N = A.length, A = AdjugateMatrix(A); 
    for (var i = 0; i < N; i++) { for (var j = 0; j < N; j++) A[i][j] /= det; }
    return A;
}

function Determinant(A)  
{
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i) {
        B[i] = [];
        for (var j = 0; j < N; ++j) B[i][j] = A[i][j];
    }
    for (var i = 0; i < N - 1; ++i) {
        var maxN = i, maxValue = Math.abs(B[i][i]);
        for (var j = i + 1; j < N; ++j) {
            var value = Math.abs(B[j][i]);
            if (value > maxValue) { maxN = j; maxValue = value; }
        }
        if (maxN > i) {
            var temp = B[i]; B[i] = B[maxN]; B[maxN] = temp;
            ++exchanges;
        }
        else { if (maxValue == 0) return maxValue; }
        var value1 = B[i][i];
        for (var j = i + 1; j < N; ++j) {
            var value2 = B[j][i];
            B[j][i] = 0;
            for (var k = i + 1; k < N; ++k) B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom;
        }
        denom = value1;
    }
    if (exchanges % 2) return -B[N - 1][N - 1];
    else return B[N - 1][N - 1];
}

function AdjugateMatrix(A)   
{
    var N = A.length, adjA = [];
    for (var i = 0; i < N; i++) {
        adjA[i] = [];
        for (var j = 0; j < N; j++) {
            var B = [], sign = ((i + j) % 2 == 0) ? 1 : -1;
            for (var m = 0; m < j; m++) {
                B[m] = [];
                for (var n = 0; n < i; n++)   B[m][n] = A[m][n];
                for (var n = i + 1; n < N; n++) B[m][n - 1] = A[m][n];
            }
            for (var m = j + 1; m < N; m++) {
                B[m - 1] = [];
                for (var n = 0; n < i; n++)   B[m - 1][n] = A[m][n];
                for (var n = i + 1; n < N; n++) B[m - 1][n - 1] = A[m][n];
            }
            adjA[i][j] = sign * Determinant(B);  
        }
    }
    return adjA;
}

function task9(matrix) {
    const transpose = matrix => matrix[0].map((col, i) => matrix.map(row => row[i]));
    matrix_ = transpose(matrix)
    for (let i = 0; i < matrix_.length; i++) {
        matrix_[i][i] = matrix_[i][i] - 1
    }
    for (let i = 0; i < matrix_.length; i++) {
        matrix_[matrix_.length - 1][i] = 1
    }
    // console.log(matrix_)

    b_vector = Array(matrix_.length).fill(0)
    b_vector[matrix_.length - 1] = 1
    // console.log(b_vector)
    X = MultiplyMatrix2(InverseMatrix(matrix_), b_vector)
    return X
}

answer9 = task9(matrix)
console.log(`Установившиеся вероятности:\n--> ${answer9}`)