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


function task4(matrix, k) {
    let matrix_pr = matrix.slice(0)
    len_p = matrix.length
    let result = Array(len_p).fill(0)
    for (let i = 0; i < len_p; i++) {
        result[i] = Array(len_p).fill(0)
    }
    for (let i = 1; i < k; i++) {
        matrix_pr = skip_j_state(matrix, matrix_pr)
        result = sum(result, matrix_pr)
    }
    return result
}

function sum(result, matrix_pr) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            result[i][j] = result[i][j] + matrix_pr[i][j]
        }
    }
    return result
}





// Задание 4
// вероятность перехода из состояния 5 в состояние 10 не позднее чем за 10 шагов;

let i = 5, j = 10, k = 10
answer4 = task4(matrix, k)
console.log(`Вероятность перехода из состояния ${i} в состояние ${j} не позднее чем за k=${k} шагов \n--> ${answer4[i - 1][j - 1]}`)