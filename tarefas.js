class Tarefa {
    constructor(nome, categoria, realizada) {
        let possibleCategories = ["lazer", "compras", "estudo"]

        if (typeof (nome) !== "string") {
            throw new Error("Nome não é string.")
        }
        if (!possibleCategories.includes(categoria)) {
            throw new Error("Categoria inválida.")
        }
        if (typeof (realizada) !== "boolean") {
            throw new Error("\"Realizada\" deve ser booleano.")
        }

        this.nome = nome
        this.categoria = categoria
        this.realizada = realizada
    }
}

const tarefas = [
    new Tarefa("Passear com o cachorro", "lazer", false),
    new Tarefa("Comprar ovos", "compras", true)
]

console.log(tarefas)