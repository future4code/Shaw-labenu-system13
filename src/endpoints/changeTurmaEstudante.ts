import { Request, Response } from "express"
import { selectEstudanteById } from "../data/selectEstudanteById"
import { selectTurmaById } from "../data/selectTurmaById"
import { updateTurmaEstudante } from "../data/updateTurmaEstudante"

export const changeTurmaEstudante = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        const turmaId = req.body.turmaId

        const docente = await selectEstudanteById(id)
        const turma = await selectTurmaById(turmaId)

        if (!docente.length){
            res.status(404)
            throw new Error('Docente com id fornecido não encontrado.')
        }
        if (!turma.length){
            res.status(404)
            throw new Error('Turma com id fornecido não encontrada.')
        }

        updateTurmaEstudante(id, turmaId)
        .then(response => {
            res.status(201).send({message: "'turma_id' alterado com sucesso!"})
        })
        
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}