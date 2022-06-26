import { connection } from "./connection"

export const updateModuloTurma = async (id: string, modulo: string): Promise<any> => {
    const resposta = await connection('TURMA')
    .where('id', id)
    .update({modulo: modulo})

    return resposta
}