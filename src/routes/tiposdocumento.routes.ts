import { param } from "express-validator";
import {TiposDocumentoController} from "../controllers/TiposDocumentoController";

export const TiposDocumentoRoutes = [{
    method: "get",
    route: "/tiposdoc",
    controller: TiposDocumentoController,
    action: "all",
    validation: []
}, {
    method: "get",
    route: "/tiposdoc/:id",
    controller: TiposDocumentoController,
    action: "one",
    validation: [
        param("id").isInt().withMessage("El parámetro ingresado no es válido")
    ]
}]