import { Entity, Column, ManyToOne, OneToMany, Generated, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Imagem } from "./Imagem";
import { Ingrediente } from "./Ingrediente";
import { IngredienteOpcional } from "./IngredientesOpcionais";
import { ItemPedido } from "./ItemPedido";
import Empresa from "./Empresa";

@Entity('produto')
export default class Produto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  @Generated('uuid')
  codigo: string;

  @Column()
  data_cadastro: Date;

  @Column()
  data_modificacao_cadastro: Date;

  @Column()
  preco: number;

  @Column()
  descricao: string;

  /* ativo => status_produto ou situacao_produto */
  @Column()
  ativo: boolean; // 'ativo' => true, 'inativo' => false
  // ativo: string; // ('ativo', 'inativo', 'rejeitado', 'testes'), caso seja do tipo string

  @Column()
  quantidade: number;

  @Column()
  unidade_quantidade: string; // unidade, ml, l, mg, g, kg

  @Column()
  tipo_produto: string; // ('comida' e 'bebida')

  /* 1 produto com 1 ou mais imagens */
  @OneToMany(() => Imagem, imagem => imagem.produto, {
    cascade: ['insert', 'update', 'remove']
  })
  imagens: Imagem[];

  /* muitos produtos cadastradas por 1 usuario  */
  @ManyToOne(() => Empresa, (empresa) => empresa.produtos)
  @JoinColumn({ name: 'empresaId' })
  empresa: Empresa;

  @Column({ type: 'integer', unsigned: true })
  empresaId: number;

  /* 1 produto com 1 ou mais ingredientes */
  /* Ver se vai ser opcional */
  @OneToMany(() => Ingrediente, ingrediente => ingrediente.produto, {
    cascade: ['insert', 'update', 'remove']
  })
  ingredientes: Ingrediente[];

  /* Arrumar */
  @OneToOne(() => ItemPedido, (itemPedido) => itemPedido.produto)
  itemPedido: ItemPedido;
  
  /* 1 produto do pedido pode ter nenhum ou 1 ou mais opcionais */
  /* Ver se vai ser opcional */
  /* Ver se vai ser cadastrado no cadastro da produto */
  @OneToMany(() => IngredienteOpcional, opcional => opcional.itemPedido, {
    cascade: ['insert', 'update', 'remove']
  })
  lista_opcionais: IngredienteOpcional[];
}
