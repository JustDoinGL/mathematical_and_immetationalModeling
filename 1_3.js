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

function task3(matrix, k) {
    var matrix_p = matrix.slice(0);
    // console.log(matrix_p)
    for (let i = 1; i < k; i++) {
        matrix_p = skip_j_state(matrix, matrix_p)
    }
    return matrix_p
}

function skip_j_state(matrix, matrix_pr) {
    len_p = matrix.length
    new_matrix = Array(len_p).fill(0)
    for (let i = 0; i < new_matrix.length; i++) {
        new_matrix[i] = Array(len_p).fill(0)
    }
    for (let i = 0; i < len_p; i++) {
        for (let j = 0; j < len_p; j++) {
            let s = 0
            for (let m = 0; m < len_p; m++) {
                if (m != j) {
                    s += matrix[i][m] * matrix_pr[m][j]
                }
                new_matrix[i][j] = s
            }
        }
    }
    return new_matrix
}






// Задание 3
// вероятность первого перехода за 9 шагов из состояния 7 в состояние 11;
let k = 9
answer3 = task3(matrix, k)
let i = 7, j = 11
console.log(`Вероятность первого перехода за k=${k} шагов из состояния ${i} в состояние ${j} \n--> ${answer3[i - 1][j - 1]}`)