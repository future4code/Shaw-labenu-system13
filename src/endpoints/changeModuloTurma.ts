import { Request, Response } from "express"
import { selectTurmaById } from "../data/selectTurmaById"
import { updateModuloTurma } from "../data/updateModuloTurma"

export const changeModuloTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        const modulo = req.body.modulo

        const turma = await selectTurmaById(id)

        if (!turma.length){
            res.status(404)
            throw new Error('Turma com id fornecido não encontrada.')
        }

        updateModuloTurma(id, modulo)
        .then(response => {
            res.status(201).send({message: 'Módulo da turma alterado com sucesso!', response: response})
        })
        
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}