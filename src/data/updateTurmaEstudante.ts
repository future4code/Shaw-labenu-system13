import { connection } from "./connection"

export const updateTurmaEstudante = async (id: string, turmaId: string): Promise<any> => {
    const resposta = await connection('ESTUDANTE')
    .where('id', id)
    .update({turma_id: turmaId})

    return resposta
}