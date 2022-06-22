import Usuario from "./Usuario";

export default class Estudante extends Usuario {
    constructor(
        nome: string,
        email: string,
        dataNasc: string,
        turmaId: string,
        public hobbies: string[]
    ){
        super(nome, email, dataNasc, turmaId)
    }
}