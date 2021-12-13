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

    seInsereNaPagina(containerEl) {
        const item = document.createElement("li")

        const classes = ["item-tarefa", `categoria-${this.categoria}`]
        this.realizada ? classes.push("marcado") : null
        item.classList.add(...classes)

        item.innerHTML = this.nome

        containerEl.appendChild(item)
    }
}

const tarefas = [
    new Tarefa("Passear com o cachorro", "lazer", false),
    new Tarefa("Comprar ovos", "compras", true)
]

const lista = document.getElementById("lista-tarefas")
lista.innerHTML = ""
tarefas.forEach((tarefa) => tarefa.seInsereNaPagina(lista))