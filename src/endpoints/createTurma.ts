import { Request, Response } from "express"
import Turma from "../classes/Turma"
import { insertTurma } from "../data/insertTurma"

export const createTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const nome = req.body.nome

        if (!nome){
            res.status(422)
            throw new Error('Campo "nome" inválido.')
        }

        const novaTurma = new Turma(nome)

        insertTurma(novaTurma)
        .then(() => {
            res.status(201).send({message: 'Nova turma criada', turma: novaTurma})
        })

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}