import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ItemPedido } from "./ItemPedido";
import Produto from "./Produto";

@Entity('ingrediente_opcional')
export class IngredienteOpcional extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;
  
  /* muitos opcionais em 1 pedido */
  @ManyToOne(() => ItemPedido, itemPedido => itemPedido.ingredientes_opcionais)
  @JoinColumn({ name: 'itemPedidoId' })
  itemPedido: ItemPedido;

  @Column({ type: 'integer', unsigned: true })
  itemPedidoId: number;

  /* muitos opcionais em 1 produto */
  @ManyToOne(() => Produto, produto => produto.lista_opcionais)
  @JoinColumn({ name: 'produtoId' })
  produto: Produto;

  @Column({ type: 'integer', unsigned: true })
  produtoId: number;
}
