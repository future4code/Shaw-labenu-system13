import { connection } from "./connection"

export const updateTurmaDocente = async (id: string, turmaId: string): Promise<any> => {
    const resposta = await connection('DOCENTE')
    .where('id', id)
    .update({turma_id: turmaId})

    return resposta
}