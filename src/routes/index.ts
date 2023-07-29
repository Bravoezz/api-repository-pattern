import { Request, Response, NextFunction } from 'express'
import { TiposDocumentoRoutes } from "./tiposdocumento.routes"
import { ConsultaAtencioRoutes } from './consultatencion.routes';
import { validationResult } from 'express-validator'

const routes = [
    ...TiposDocumentoRoutes,
    ...ConsultaAtencioRoutes
];

export default function configureRoutes(app: any): void {
    routes.forEach(route => {
        (app as any)[route.method](
            route.route,
            ...route.validation,
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const errors = validationResult(req);
                    
                    if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                    }

                    await (new (route.controller as any))[route.action](req, res, next)
                } 
                catch (error) {
                    next(error)
                }
            }
        );
    });
}