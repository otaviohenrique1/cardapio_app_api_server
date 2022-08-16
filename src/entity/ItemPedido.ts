import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido";
import { IngredienteRemovido } from "./IngredientesRemovidos";
import { IngredienteOpcional } from "./IngredientesOpcionais";
import Produto from "./Produto";

@Entity('item_pedido')
export class ItemPedido extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /* Arrumar */
  /* Ver se vai mudar de 'OneToOne' para 'OneToMany'*/
  @OneToOne(() => Produto, (produto) => produto.itemPedido)
  @JoinColumn({ name: 'produtoId' })
  produto: Produto;

  @Column({ type: 'integer', unsigned: true })
  produtoId: number;

  @Column()
  quantidade: number;

  /* muitos produtos em 1 pedido */
  @ManyToOne(() => Pedido, pedido => pedido.lista_produtos)
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido;

  @Column({ type: 'integer', unsigned: true })
  pedidoId: number;

  /* 1 produto do pedido pode ter nenhum ou 1 ou mais opcionais */
  /* Ver se vai ser opcional */
  @OneToMany(() => IngredienteOpcional, opcional => opcional.itemPedido, {
    cascade: ['insert']
  })
  ingredientes_opcionais: IngredienteOpcional[];

  /* Nenhum ou 1 ou mais ingredientes podem ser removidos de 1 produto */
  /* Ver se vai ser opcional */
  @OneToMany(() => IngredienteRemovido, ingrediente_removido => ingrediente_removido.itemPedido, {
    cascade: ['insert']
  })
  ingredientes_removidos: IngredienteRemovido[];
}
