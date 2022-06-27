import { Request, Response } from "express"
import Estudante from "../classes/Estudante"
import { insertEstudante } from "../data/insertEstudante"
import { insertHobby } from "../data/insertHobby"
import { selectAllHobbies } from "../data/selectAllHobbies"

export const createEstudante = async (req: Request, res: Response): Promise<void> => {
    try {
        const {nome, email, dataNasc, turmaId} = req.body
        const hobbies: string[] = req.body.hobbies

        if (!nome || !email || !dataNasc || !turmaId){
            res.status(422)
            throw new Error('Campo "nome", "email", "dataNasc" ou "turmaId" inválido.')
        }

        const hobbiesTabela = await selectAllHobbies()
        hobbies.map(hobby => {
            if (!hobbiesTabela.some((element) => element.titulo === hobby)){
                insertHobby(hobby)
            }
        })

        const novoEstudante: Estudante = new Estudante(
            nome,
            email,
            dataNasc,
            turmaId,
            hobbies
        )

        insertEstudante(novoEstudante)
        .then(() => {
            res.status(201).send({message: 'Novo estudante criado', docente: novoEstudante})
        })

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}