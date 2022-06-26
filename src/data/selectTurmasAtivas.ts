import { connection } from "./connection"

export const selectTurmasAtivas = async (): Promise<any> => {
    const resposta = await connection('TURMA')
    .where('modulo', 'not', '0')
    .select()

    return resposta
}