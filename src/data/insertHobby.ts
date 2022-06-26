import { connection } from "./connection"
import { v4 as uuid } from "uuid"

export const insertHobby = async (hobby: string): Promise<any> => {
    const resposta = await connection('HOBBY').insert({
        id: uuid(),
        titulo: hobby
    })

    return resposta
}