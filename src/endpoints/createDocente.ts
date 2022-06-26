import { Request, Response } from "express";
import Docente, { Especialidades } from "../classes/Docente";
import { insertDocente } from "../data/insertDocente";


export const createDocente = async (req: Request, res: Response): Promise<void> => {
    try {
        const especialidadesEnumeradas = (especs: string[]): Especialidades[] => {
            let arrayEspecs: Especialidades[] = []
            for (const espec of especs) {
                switch (espec) {
                    case Especialidades.CSS:
                        arrayEspecs.push(Especialidades.CSS)
                        break
                    case Especialidades.JS:
                        arrayEspecs.push(Especialidades.JS)
                        break
                    case Especialidades.POO:
                        arrayEspecs.push(Especialidades.POO)
                        break
                    case Especialidades.REACT:
                        arrayEspecs.push(Especialidades.REACT)
                        break
                    case Especialidades.TYPESCRIPT:
                        arrayEspecs.push(Especialidades.TYPESCRIPT)
                        break
                }
            }
            return arrayEspecs
        }

        const {nome, email, dataNasc, turmaId, especialidades} = req.body

        if (!nome || !email || !dataNasc || turmaId){
            res.status(422)
            throw new Error('Campo "nome", "email", "dataNasc" ou "turmaId" inválido.')
        }

        const novoDocente: Docente = new Docente(
            nome,
            email,
            dataNasc,
            turmaId,
            especialidadesEnumeradas(especialidades)
        )

        insertDocente(novoDocente)
        .then(() => {
            res.status(201).send({message: 'Novo docente criado', docente: novoDocente})
        })

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}