import { connection } from "./connection"

export const selectEstudanteByNome = async (nome: string): Promise<any> => {
    const resposta = await connection('ESTUDANTE')
    .where('nome', nome)
    .select()

    return resposta
}