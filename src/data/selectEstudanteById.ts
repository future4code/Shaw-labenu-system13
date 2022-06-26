import { connection } from "./connection"

export const selectEstudanteById = async (id: string): Promise<any> => {
    const resposta = await connection('ESTUDANTE')
    .where('id', id)
    .select()

    return resposta
}