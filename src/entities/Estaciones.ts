import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agentes } from "./Agentes";
import { Tramites } from "./Tramites";

@Index("estaciones_nombre_unique", ["nombre"], { unique: true })
@Index("estaciones_correo_unique", ["correo"], { unique: true })
@Entity("estaciones")
export class Estaciones {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("varchar", { name: "correo", nullable: true, length: 50 })
  correo: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("tinyint", { name: "activo", width: 1, default: true })
  activo: boolean;

  @OneToMany(() => Agentes, (agentes) => agentes.estacionAsignada)
  agentes: Agentes[];

  @OneToMany(() => Tramites, (tramites) => tramites.estacion)
  tramites: Tramites[];
}
