import Docente from "../classes/Docente";
import { connection } from "./connection";


const formatStringToDate = (date: string): Date => {
    // DD/MM/YYYY to Date
    const day = date.substring(0, 2)
    const month = date.substring(3, 5)
    const year = date.substring(6)
    const newDate = `${year}-${month}-${day}`

    return new Date(newDate)
}

export const insertDocente = async (docente: Docente): Promise<any> => {
    const resposta = await connection('DOCENTE').insert({
        id: docente.getId(),
        nome: docente.nome,
        email: docente.email,
        data_nasc: formatStringToDate(docente.dataNasc),
        turma_id: docente.turmaId
    })

    return resposta
}