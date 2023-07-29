import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./Usuarios";

@Entity("tipos_usuario")
@Index("tipo_unique", ["tipo"], { unique: true })
export class TiposUsuario {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "tipo", length: 50 })
  tipo: string;

  @OneToMany(() => Usuarios, (usuarios) => usuarios.tipoUsuario)
  usuarios: Usuarios[];
}
