import { v4 as uuid } from "uuid"

export default class Usuario {
    public id: string
    constructor(
        public nome: string,
        public email: string,
        public dataNasc: string,
        public turmaId: string
    ){
        this.id = uuid()
    }

    getId = () => {
        return this.id
    }
}
