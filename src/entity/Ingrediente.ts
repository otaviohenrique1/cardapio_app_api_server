import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Produto from "./Produto";

@Entity('ingrediente')
export class Ingrediente extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  quantidade: number;

  @Column()
  unidade_quantidade: string; // unidade, ml, l, mg, g, kg
  
  @Column()
  removivel: boolean;
  
  /*
  @Column()
  removivel: string; // ('Removivel' e 'Não removivel')
  */
  
  /* 1 ou mais ingredientes para 1 produto */
  @ManyToOne(() => Produto, produto => produto.ingredientes)
  @JoinColumn({ name: 'produtoId' })
  produto: Produto;

  @Column({ type: 'integer', unsigned: true })
  produtoId: number;
}
