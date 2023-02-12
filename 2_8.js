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

let count = (vector) => {
    let c = 0;
    for (let i = 0; i < vector.length; i++) {
        c += vector[i]
    }
    return c
}
task_h = (vector, L) => 1 / (count(vector) * L)


answer_h = task_h(vector, L)
console.log(`Найти среднее время однократного простоя системы массового обслуживания:\n--> ${answer_h}`)