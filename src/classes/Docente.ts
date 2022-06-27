import Usuario from "./Usuario";

export enum Especialidades {
    'JS' = 'JS',
    'CSS' = 'CSS',
    'REACT' = 'REACT',
    'TYPESCRIPT' = 'TYPESCRIPT',
    'POO' = 'POO'
}

export default class Docente extends Usuario {
    constructor(
        nome: string,
        email: string,
        dataNasc: string,
        turmaId: string,
        public especialidades: Especialidades[] = [Especialidades.JS]
    ){
        super(nome, email, dataNasc, turmaId)
    }
}