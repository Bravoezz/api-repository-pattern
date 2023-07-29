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
import { TiposDocumento } from "./TiposDocumento";
import { TiposUsuario } from "./TiposUsuario";
import { HistorialTarjetasAnuladas } from "./HistorialTarjetasAnuladas";

@Index("usuarios_documento_unique", ["documento"], { unique: true })
@Index("usuarios_tipo_documento_id_foreign", ["tipoDocumentoId"], {})
@Index("usuarios_tipo_usuario_id_foreign", ["tipoUsuarioId"], {})
@Entity("usuarios")
export class Usuarios {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "nombres", length: 50 })
  nombres: string;

  @Column("varchar", { name: "apellidos", length: 50 })
  apellidos: string;

  @Column("varchar", { name: "correo", length: 50 })
  correo: string;

  @Column("varchar", { name: "celular", length: 20 })
  celular: string;

  @Column("varchar", { name: "documento", length: 30 })
  documento: string;

  @Column("bigint", { name: "tipo_documento_id", unsigned: true })
  tipoDocumentoId: number;

  @Column("bigint", { name: "tipo_usuario_id", unsigned: true })
  tipoUsuarioId: number;

  @Column("datetime", { name: "fecha_nacimiento", nullable: true })
  fechaNacimiento: Date | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => Tramites, (tramites) => tramites.tramitador)
  tramites: Tramites[];

  @OneToMany(() => Tramites, (tramites) => tramites.usuario)
  tramites2: Tramites[];

  @OneToMany(() => HistorialTarjetasAnuladas, (historial_tarjetas_anuladas) => historial_tarjetas_anuladas.usuario)
  historialTarjetasAnuladas: HistorialTarjetasAnuladas[];

  @ManyToOne(
    () => TiposDocumento,
    (tiposDocumento) => tiposDocumento.usuarios,
    { onDelete: "RESTRICT", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "tipo_documento_id", referencedColumnName: "id" }])
  tipoDocumento: TiposDocumento;

  @ManyToOne(() => TiposUsuario, (tipos_usuario) => tipos_usuario.usuarios, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tipo_usuario_id", referencedColumnName: "id" }])
  tipoUsuario: TiposUsuario;
}
