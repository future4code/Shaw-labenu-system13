import { connection } from "./connection"

export const selectAllDocente = async (): Promise<any> => {
    const resposta = await connection('DOCENTE').select()

    return resposta
}