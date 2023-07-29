import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agentes } from "./Agentes";
import { Usuarios } from "./Usuarios";

@Index("documento_unique", ["documento"], { unique: true })
@Entity("tipos_documento")
export class TiposDocumento {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "documento", length: 30 })
  documento: string;

  @Column("varchar", { name: "abreviatura", length: 10 })
  abreviatura: string;

  @OneToMany(() => Agentes, (agentes) => agentes.tipoDocumento)
  agentes: Agentes[];

  @OneToMany(() => Usuarios, (usuarios) => usuarios.tipoDocumento)
  usuarios: Usuarios[];
}
