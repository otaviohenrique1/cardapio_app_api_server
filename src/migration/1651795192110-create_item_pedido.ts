import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { getConnection } from "typeorm";
import { ItemPedido } from "../entity/ItemPedido";
import { coluna_pedidoId, coluna_primary_key, coluna_quantidade, coluna_produtoId, if_table_not_exist } from "../utils/constantes_migration";

const NOME_TABELA = 'item_pedido';

export class createItemPedido1651795192110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_produtoId,
        coluna_quantidade,
        coluna_pedidoId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(ItemPedido)
      .values([
        pedido_produto_1, pedido_produto_2
      ])
      .execute();
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const pedido_produto_1 = {
  id: 1,
  produtoId: 1,
  quantidade: 1,
  pedidoId: 1
};

const pedido_produto_2 = {
  id: 2,
  produtoId: 2,
  quantidade: 1,
  pedidoId: 1
};
