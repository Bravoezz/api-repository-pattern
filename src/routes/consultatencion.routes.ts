import { check } from "express-validator";
import { ConsultaAtencionController } from "../controllers/ConsultaAtencionController";

export const ConsultaAtencioRoutes = [{
    method: "post",
    route: "/consulta-atencion/estado",
    controller: ConsultaAtencionController,
    action: "consultaEstadoxDNI",
    validation: [
        check("dni")
        .isLength({ min: 8 })
        .withMessage("No es un documento válido")
    ]
},{
    method: "get",
    route: "/consulta-atencion/combo-data",
    controller: ConsultaAtencionController,
    action: "comboBoxData",
    validation: []
},{
    method: "post",
    route: "/consulta-atencion/centros-estudio",
    controller: ConsultaAtencionController,
    action: "centrosEstudio",
    validation: [
        check("tipo")
        .isInt()
        .custom((value) => value < 5)
        .withMessage("El tipo ingresado no es válido")
    ]
}]