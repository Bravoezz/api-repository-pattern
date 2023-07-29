import { Request, Response } from "express"
import { AppDataSource } from "../dataSource"

// import { Tramites } from "../entities/Tramites"
import { HistorialTarjetasAnuladas } from "../entities/HistorialTarjetasAnuladas"
import { TiposDocumento } from "../entities/TiposDocumento";
import { TiposPasajero } from "../entities/TiposPasajero";
import { Estaciones } from "../entities/Estaciones";
import { CentrosEstudio } from "../entities/CentrosEstudio";
// import { Usuarios } from "../entities/Usuarios"

export class ConsultaAtencionController
{
    // private tramites = AppDataSource.getRepository(Tramites)

    async consultaEstadoxDNI(req: Request, res: Response)
    {
        const { dni } = req.body

        const historialTarjetasAnuladas = AppDataSource.getRepository(HistorialTarjetasAnuladas);

        const historialUser = await historialTarjetasAnuladas.findOne({ 
            relations: ['usuario'],
            select: ['usuario'],
            where: {
                usuario: { documento: dni },
                reactivado: false
            } 
        })

        if (historialUser) {
            res.json({
                'es_nuevo': false,
                'nombre_completo':"Bravo Ramos Joel Brayan",
                'mensaje': ['Su tarjeta ha sido anulada.','Su tarjeta ha sido bloqueada'] //TODO: armar mensaje
            })

            return
        }

        // const tramite = await this.tramites.findOne({
        //     relations: ['usuario'],
        //     select: ['caducidadTarjeta'],
        //     where: {
        //         usuario: { documento: dni }
        //     }
        // })

        // if (tramite) {
        //     res.json({
        //         'es_nuevo': false,
        //         'nombre_completo': tramite.usuario.nombres + ' ' + tramite.usuario.apellidos,
        //         'mensaje': ['Su tarjeta está vigente o vencida.'] //TODO: armar mensaje, validar vigencia
        //     })

        //     return
        // }

        res.json({
            'es_nuevo': true
        })
    }

    async comboBoxData(req: Request, res: Response)
    {
        const tiposDocumento = AppDataSource.getRepository(TiposDocumento);

        const docs = await tiposDocumento.find({
            select: ['id', 'documento', 'abreviatura'],
            relations: []
        })

        const tiposPasajero = AppDataSource.getRepository(TiposPasajero);

        const pasajeros = await tiposPasajero.find({
            select: ['id', 'tipo'],
            relations: []
        });

        const stations = AppDataSource.getRepository(Estaciones);

        const estaciones = await stations.find({
            select: ['id', 'nombre'],
            relations: [],
            where: {activo: true}
        });

        res.json({
            'tipos_documento': docs,
            'tipos_pasajero': pasajeros,
            'estaciones': estaciones
        })
    }

    async centrosEstudio(req: Request, res: Response)
    {
        const { tipo } = req.body

        const centrosEstudio = AppDataSource.getRepository(CentrosEstudio);

        const ces = await centrosEstudio.find({
            select: ['id', 'nombre'],
            where: {
                tipoPasajero: { id: tipo },
            }
        });

        res.json(ces);
    }
}

