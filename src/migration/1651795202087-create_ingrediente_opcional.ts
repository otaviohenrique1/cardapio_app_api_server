import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { if_table_not_exist, coluna_primary_key, coluna_nome, coluna_preco, coluna_itemPedidoId, coluna_produtoId } from "../utils/constantes_migration";

const NOME_TABELA = 'ingrediente_opcional';

export class createIngredienteOpcional1651795202087 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_preco,
        coluna_itemPedidoId,
        coluna_produtoId,
      ],
    }), if_table_not_exist);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}
