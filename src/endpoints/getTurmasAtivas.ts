import { Request, Response } from "express"
import { selectTurmasAtivas } from "../data/selectTurmasAtivas"

export const getTurmasAtivas = async (req: Request, res: Response): Promise<void> => {
    try {
        selectTurmasAtivas()
        .then(response => {
            res.status(200).send({response: response})
        })
        
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}