import { connection } from "./connection"

export const selectAllHobbies = async (): Promise<any> => {
    const resposta = await connection('HOBBY').select()

    return resposta
}