import {
    Column,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { CentrosEstudio } from "./CentrosEstudio";
import { Tramites } from "./Tramites";

@Index("tipo_unique", ["tipo"], { unique: true })
@Entity("tipos_pasajero")
export class TiposPasajero 
{
    @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "tipo", length: 50 })
    tipo: string;

    @Column("varchar", { name: "categoria_ce", length: 50 })
    tipoCe: string;

    @OneToMany(
        () => CentrosEstudio,
        (centrosEstudio) => centrosEstudio.tipoCeId
    )
    centroEstudio: CentrosEstudio[];

    @OneToMany(
        () => Tramites,
        (tramites) => tramites.tipoPasajero
    )
    tramites: Tramites[];
}