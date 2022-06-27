import { connection } from "./connection"

export const selectTurmasAtivas = async (): Promise<any> => {
    const resposta = await connection('TURMA')
    .whereNot('modulo', '0')
    .select()

    return resposta
}