import { Request, Response } from "express"
import { selectAllDocente } from "../data/selectAllDocente"

export const getAllDocente = async (req: Request, res: Response): Promise<void> => {
    try {
        selectAllDocente()
        .then(response => {
            res.status(200).send({response: response})
        })
        
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}