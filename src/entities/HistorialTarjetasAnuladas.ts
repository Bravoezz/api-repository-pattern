import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Usuarios } from "./Usuarios";

@Index("historial_tarjetas_anuladas_usuario_id_foreign", ["usuarioId"], {})
@Entity("historial_tarjetas_anuladas")
export class HistorialTarjetasAnuladas
{
    @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
    id: number;

    @Column("bigint", { name: "usuario_id", unsigned: true })
    usuarioId: number;

    @Column("tinyint", { name: "reactivado", width: 1, default: false})
    reactivado: boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @ManyToOne(() => Usuarios, (usuarios) => usuarios.historialTarjetasAnuladas, {
        onDelete: "RESTRICT",
        onUpdate: "NO ACTION",
    })
    @JoinColumn([{ name: "usuario_id", referencedColumnName: "id" }])
    usuario: Usuarios;
}