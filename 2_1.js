function create_matrix(L, m, u, n) {
    p_matrix = Array(m + n + 1).fill(0)
    for (let i = 0; i < p_matrix.length; i++) {
        p_matrix[i] = Array(m + n + 1).fill(0)
    }
    for (i = 0; i < (m + n); i++) {
        p_matrix[i][i + 1] = L
        if (i < m) {
            p_matrix[i + 1][i] = (u * (i + 1))
        } else {
            p_matrix[i + 1][i] = u * m
        }
    }
    return p_matrix
}

let L = 5
let m = 2
let u = 3
let n = 5
matrix = create_matrix(L, m, u, n)
console.log("Матрица переходов:")
console.log(matrix)

function InverseMatrix(A) { //Обратная матрица
    var det = Determinant(A);
    if (det == 0) return false;
    var N = A.length, A = AdjugateMatrix(A);
    for (var i = 0; i < N; i++) { for (var j = 0; j < N; j++) A[i][j] /= det; }
    return A;
}

function multMatrix2(A, B, len) { //Умножение
    C = []
    for (let i = 0; i < len; i++) {
        Z = 0
        for (let j = 0; j < len; j++) {
            Z += B[j] * A[i][j]

        }
        C.push(Z)
    }
    return C
}

function AdjugateMatrix(A)   // Союзная матрица
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

function Determinant(A)   // Определитель матрицы
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

function create(diag_res) {
    let len_p = diag_res.length
    new_matrix = Array(len_p).fill(0)
    for (let i = 0; i < new_matrix.length; i++) {
        new_matrix[i] = Array(len_p).fill(0)
    }
    for (let i = 0; i < len_p; i++) {
        new_matrix[i][i] = diag_res[i]
    }
    return new_matrix
}

function NotSumMatrix(A, B) {
    var m = A.length, n = A[0].length, C = [];
    for (var i = 0; i < m; i++) {
        C[i] = [];
        for (var j = 0; j < n; j++) C[i][j] = A[i][j] - B[i][j];
    }
    return C;
}

function TransMatrix(A) {
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++) {
        AT[i] = [];
        for (var j = 0; j < m; j++) AT[i][j] = A[j][i];
    }
    return AT;
}


function task_a(matrix) {
    let diag_res = []
    for (let i = 0; i < matrix[0].length; i++) {
        diag_res.push(matrix[i].reduce((a, b) => a + b))
    }
    let D = create(diag_res)
    let M = NotSumMatrix(TransMatrix(matrix), D)
    let M_ = M.slice()
    for (let i = 0; i < M_.length; i++) {
        M_[M_.length - 1][i] = 1
    }
    let b_vector = Array(M_.length).fill(0)
    b_vector[M_.length - 1] = 1
    X = multMatrix2(InverseMatrix(M_), b_vector, b_vector.length)
    // console.log(InverseMatrix(M_))
    return X
}



vector = task_a(matrix)
console.log(`Составьте граф марковского процесса, запишите систему уравнений Колмогорова и \
найдите установившиеся вероятности состояний:\n--> ${vector}`)