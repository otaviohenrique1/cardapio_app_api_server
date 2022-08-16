import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { ItemPedido } from "./ItemPedido";

@Entity('pedido_ingrediente_removido')
export class IngredienteRemovido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
 
  /* muitos opcionais em 1 pedido */
  @ManyToOne(() => ItemPedido, itemPedido => itemPedido.ingredientes_removidos)
  @JoinColumn({ name: 'itemPedidoId' })
  itemPedido: ItemPedido;

  @Column({ type: 'integer', unsigned: true })
  itemPedidoId: number;
}
