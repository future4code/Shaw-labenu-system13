import { connection } from "./connection"

export const selectTurmaById = async (id: string): Promise<any> => {
    const resposta = await connection('TURMA')
    .where('id', id)
    .select()

    return resposta
}