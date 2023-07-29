import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Agentes } from "./Agentes";
import { EstadosTramite } from "./EstadosTramite";
import { Tramites } from "./Tramites";

@Index("atencion_tramites_agente_id_foreign", ["agenteId"], {})
@Index("atencion_tramites_estado_id_foreign", ["estadoId"], {})
@Index("atencion_tramites_tramite_id_foreign", ["tramiteId"], {})
@Entity("atencion_tramites")
export class AtencionTramites {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("bigint", { name: "tramite_id", unsigned: true })
  tramiteId: number;

  @Column("bigint", { name: "agente_id", nullable: true, unsigned: true })
  agenteId: number | null;

  @Column("bigint", { name: "estado_id", unsigned: true })
  estadoId: number;

  @Column("varchar", { name: "comentario", nullable: true, length: 1500 })
  comentario: number | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @ManyToOne(() => Agentes, (agentes) => agentes.atencionTramites, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "agente_id", referencedColumnName: "id" }])
  agente: Agentes;

  @ManyToOne(
    () => EstadosTramite,
    (estadosTramite) => estadosTramite.atencionTramites,
    { onDelete: "RESTRICT", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "estado_id", referencedColumnName: "id" }])
  estado: EstadosTramite;

  @ManyToOne(() => Tramites, (tramites) => tramites.atencionTramites, {
    onDelete: "RESTRICT",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tramite_id", referencedColumnName: "id" }])
  tramite: Tramites;
}
