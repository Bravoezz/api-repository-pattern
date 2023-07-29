import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Estaciones } from "./Estaciones"
import { TiposDocumento } from "./TiposDocumento"
import { AtencionTramites } from "./AtencionTramites"

@Index("agentes_documento_unique", ["documento"], { unique: true })
@Index("agentes_estacion_asignada_id_foreign", ["estacionAsignadaId"], {})
@Index("agentes_tipo_documento_id_foreign", ["tipoDocumentoId"], {})
@Entity("agentes")
export class Agentes {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "nombres", length: 50 })
  nombres: string;

  @Column("varchar", { name: "apellidos", length: 50 })
  apellidos: string;

  @Column("varchar", { name: "celular", nullable: true, length: 20 })
  celular: string | null;

  @Column("varchar", { name: "documento", length: 30 })
  documento: string;

  @Column("bigint", { name: "tipo_documento_id", unsigned: true })
  tipoDocumentoId: number;

  @Column("bigint", {
    name: "estacion_asignada_id",
    nullable: true,
    unsigned: true,
  })
  estacionAsignadaId: number | null;

  @Column("tinyint", { name: "activo", width: 1, default: true })
  activo: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Estaciones, (estaciones) => estaciones.agentes, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "estacion_asignada_id", referencedColumnName: "id" }])
  estacionAsignada: Estaciones;

  @ManyToOne(() => TiposDocumento, (tipos_documento) => tipos_documento.agentes, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tipo_documento_id", referencedColumnName: "id" }])
  tipoDocumento: TiposDocumento;

  @OneToMany(
    () => AtencionTramites,
    (atencionTramites) => atencionTramites.agente
  )
  atencionTramites: AtencionTramites[];
}
