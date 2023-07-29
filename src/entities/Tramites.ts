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
} from "typeorm"
import { AtencionTramites } from "./AtencionTramites"
import { CentrosEstudio } from "./CentrosEstudio"
import { Estaciones } from "./Estaciones"
import { TiposTramite } from "./TiposTramite"
import { Usuarios } from "./Usuarios"
import { EstadosTramite } from "./EstadosTramite"
import { TiposPasajero } from "./TiposPasajero"

@Index("tramites_centro_estudio_id_foreign", ["centroEstudioId"], {})
@Index("tramites_codigo_atencion_unique", ["codigoAtencion"], { unique: true })
@Index("tramites_estacion_id_foreign", ["estacionId"], {})
@Index("tramites_tipo_tramite_id_foreign", ["tipoTramiteId"], {})
@Index("tramites_tramitador_id_foreign", ["tramitadorId"], {})
@Index("tramites_ultimo_estado_id_foreign", ["ultimoEstadoId"], {})
@Index("tramites_tipo_pasajero_id_foreign", ["tipoPasajeroId"], {})
@Index("tramites_usuario_id_foreign", ["usuarioId"], {})
@Entity("tramites")
export class Tramites {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number

  @Column("bigint", { name: "codigo_atencion", unsigned: true })
  codigoAtencion: string

  @Column("bigint", { name: "tipo_tramite_id", unsigned: true })
  tipoTramiteId: number

  @Column("bigint", { name: "tipo_pasajero_id", unsigned: true })
  tipoPasajeroId: number

  @Column("bigint", { name: "usuario_id", unsigned: true })
  usuarioId: number

  @Column("bigint", { name: "tramitador_id", unsigned: true })
  tramitadorId: number

  @Column("bigint", { name: "estacion_id", unsigned: true })
  estacionId: number

  @Column("bigint", {name: "centro_estudio_id", unsigned: true, nullable: true })
  centroEstudioId: number | null

  @Column("bigint", { name: "ultimo_estado_id", unsigned: true })
  ultimoEstadoId: number

  @Column("date", { name: "caducidad_carnet", nullable: true })
  caducidadCarnet: string | null

  @Column("date", { name: "caducidad_tarjeta", nullable: true })
  caducidadTarjeta: string | null

  @Column("datetime", { name: "fecha_cita", nullable: true })
  fechaCita: Date | null

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date

  @OneToMany(
    () => AtencionTramites,
    (atencionTramites) => atencionTramites.tramite
  )
  atencionTramites: AtencionTramites[]

  @ManyToOne(
    () => CentrosEstudio,
    (centrosEstudio) => centrosEstudio.tramites,
    { onDelete: "RESTRICT", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "centro_estudio_id", referencedColumnName: "id" }])
  centroEstudio: CentrosEstudio

  @ManyToOne(() => Estaciones, (estaciones) => estaciones.tramites, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "estacion_id", referencedColumnName: "id" }])
  estacion: Estaciones

  @ManyToOne(() => TiposTramite, (tipos_tramite) => tipos_tramite.tramites, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tipo_tramite_id", referencedColumnName: "id" }])
  tipoTramite: TiposTramite

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.tramites, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tramitador_id", referencedColumnName: "id" }])
  tramitador: Usuarios

  @ManyToOne(
    () => EstadosTramite,
    (estadosTramite) => estadosTramite.tramites,
    { onDelete: "RESTRICT", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "ultimo_estado_id", referencedColumnName: "id" }])
  ultimoEstado: EstadosTramite

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.tramites2, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
  usuario: Usuarios

  @ManyToOne(() => TiposPasajero, (tipos_pasajero) => tipos_pasajero.tramites, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tipo_pasajero_id", referencedColumnName: "id" }])
  tipoPasajero: CentrosEstudio
}
