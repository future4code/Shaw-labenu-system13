import Turma from "../classes/Turma"
import { connection } from "./connection"

export const insertTurma = async (turma: Turma): Promise<any> => {
    const resposta = await connection('TURMA').insert({
        id: turma.id,
        nome: turma.nome,
        modulo: turma.modulo.toString()
    })

    return resposta
}