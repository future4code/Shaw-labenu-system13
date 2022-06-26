import { v4 as uuid } from "uuid"

export default class Turma {
    public id: string
    public docentes: string[]
    public estudantes: string[]
    public modulo: number

    constructor(
        public nome: string,
    ){
        this.id = uuid()
        this.docentes = []
        this.estudantes = []
        this.modulo = 0
    }
}