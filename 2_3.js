matrix = [
    [0, 5, 0, 0, 0, 0, 0, 0],
    [3, 0, 5, 0, 0, 0, 0, 0],
    [0, 6, 0, 5, 0, 0, 0, 0],
    [0, 0, 6, 0, 5, 0, 0, 0],
    [0, 0, 0, 6, 0, 5, 0, 0],
    [0, 0, 0, 0, 6, 0, 5, 0],
    [0, 0, 0, 0, 0, 6, 0, 5],
    [0, 0, 0, 0, 0, 0, 6, 0]
]

let L = 5
let m = 2
let u = 3
let n = 5

const vector = [0.12181479395973797, 0.20302465659956329, 0.1691872138329694, 0.14098934486080783, 0.11749112071733986, 0.09790926726444989, 0.08159105605370824, 0.06799254671142353]


function task_c(vector, L) {
    C = []
    relative = 1 - vector[vector.length-1]
    C[0] = relative
    C[1] = relative * L
    return C
}


relative_absolute = task_c(vector, L)
console.log(`Найдите относительную и абсолютную интенсивность обслуживания:`)
console.log(`Относительная: ${relative_absolute[0]}\nАбсолютная: ${relative_absolute[1]}`)