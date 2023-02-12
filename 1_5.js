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

function task5(matrix, i, j) {
    let matrix_pr = matrix.slice(0)
    let result = matrix.slice(0)
    for (let z = 0; z < 1500; z++) {
        matrix_pr = skip_j_state(matrix, matrix_pr)
        result[i - 1][j - 1] = result[i - 1][j - 1] + (matrix_pr[i - 1][j - 1] * z)
    }
    result = result[9][2]
    return result
}


// Задание 5
// среднее количество шагов для перехода из состояния 10 в состояние 3;
let i = 10, j = 3
answer5 = task5(matrix, i, j)
console.log(`Среднее количество шагов для перехода из состояния ${i} в состояние ${j} \n--> ${answer5}`)