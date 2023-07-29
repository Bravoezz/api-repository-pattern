import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AtencionTramites } from "./AtencionTramites";
import { Tramites } from "./Tramites";

@Index("estado_unique", ["estado"], { unique: true })
@Entity("estados_tramite")
export class EstadosTramite {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "estado", length: 50 })
  estado: string;

  @OneToMany(
    () => AtencionTramites,
    (atencionTramites) => atencionTramites.estado
  )
  atencionTramites: AtencionTramites[];

  @OneToMany(() => Tramites, (tramites) => tramites.ultimoEstado)
  tramites: Tramites[];
}
