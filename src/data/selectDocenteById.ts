import { connection } from "./connection"

export const selectDocenteById = async (id: string): Promise<any> => {
    const resposta = await connection('DOCENTE')
    .where('id', id)
    .select()

    return resposta
}