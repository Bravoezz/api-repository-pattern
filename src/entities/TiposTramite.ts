import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tramites } from "./Tramites";

@Index("tramite_unique", ["tramite"], { unique: true })
@Entity("tipos_tramite")
export class TiposTramite {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "tramite", length: 50 })
  tramite: string;

  @OneToMany(() => Tramites, (tramites) => tramites.tipoTramite)
  tramites: Tramites[];
}
