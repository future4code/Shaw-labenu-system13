export default class Turma {
    constructor(
        public id: string,
        public nome: string,
        public docentes: string[],
        public estudantes: string[],
        public modulo: number = 0
    ){}
}