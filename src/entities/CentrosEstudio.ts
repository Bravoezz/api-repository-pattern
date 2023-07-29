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
import { Tramites } from "./Tramites";
import { TiposPasajero } from "./TiposPasajero";

@Index("nombre_unique", ["nombre"], { unique: true })
@Index("centros_estudio_tipo_pasajero_id_foreign", ["tipoCeId"], {})
@Entity("centros_estudio")
export class CentrosEstudio {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "nombre", length: 90 })
  nombre: string;

  @Column("bigint", { name: "tipo_pasajero_id", unsigned: true })
  tipoCeId: number;

  @Column("tinyint", { name: "activo", width: 1, default: true })
  activo: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => Tramites, (tramites) => tramites.centroEstudio)
  tramites: Tramites[];

  @ManyToOne(() => TiposPasajero, (tipos_pasajero) => tipos_pasajero.centroEstudio, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tipo_pasajero_id", referencedColumnName: "id" }])
  tipoPasajero: TiposPasajero;
}
