import { Request, Response } from "express"
import { TiposDocumento } from "../entities/TiposDocumento"
import { HttpError } from "../utils"
import { AppDataSource } from "../dataSource"

export class TiposDocumentoController
{
    private model = AppDataSource.getRepository(TiposDocumento);

    async all(req: Request, res: Response)
    {
        const docs = await this.model.find({
            select: ['documento', 'abreviatura'],
            relations: []
        })

        return res.json(docs)
    }

    async one(req: Request, res: Response)
    {
        const { id } = req.params;

        const doc = await this.model.findOne({
            select: ['documento', 'abreviatura'],
            relations: [],
            where: {id: parseInt(id)}
        })

        if (!doc) throw new HttpError(404, "Not found.")

        return res.json(doc)
    }
}