import { Request, Response } from "express"
import { selectEstudanteByNome } from "../data/selectEstudanteByNome"

export const getEstudanteByNome = async (req: Request, res: Response): Promise<void> => {
    try {
        let nome = req.query.nome as string

        if (!nome){
            nome = ''
        }

        const estudante = await selectEstudanteByNome(nome)

        if(!estudante.length){
            res.status(404)
            throw new Error("Nenhum resultado encontrado de estudante com nome fornecido.")
        }
        
        res.status(200).send({response: estudante})
        
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}