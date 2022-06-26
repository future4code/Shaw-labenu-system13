import Estudante from "../classes/Estudante"
import { connection } from "./connection"

const formatStringToDate = (date: string): Date => {
    // DD/MM/YYYY to Date
    const day = date.substring(0, 2)
    const month = date.substring(3, 5)
    const year = date.substring(6)
    const newDate = `${year}-${month}-${day}`

    return new Date(newDate)
}

export const insertEstudante = async (estudante: Estudante): Promise<any> => {
    const resposta = await connection('ESTUDANTE').insert({
        id: estudante.getId(),
        nome: estudante.nome,
        email: estudante.email,
        data_nasc: formatStringToDate(estudante.dataNasc),
        turma_id: estudante.turmaId
    })

    return resposta
}