import { getConnection, MigrationInterface, QueryRunner, Table } from "typeorm";
import Produto from "../entity/Produto";
import { coluna_ativo, coluna_codigo, coluna_data_cadastro, coluna_data_modificacao_cadastro, coluna_descricao, coluna_nome, coluna_preco, coluna_primary_key, coluna_quantidade, coluna_tipo_produto, coluna_unidade_quantidade, coluna_empresaId, if_table_not_exist } from "../utils/constantes_migration";
import { ProdutoTypes } from "../utils/interfaces_types";

const NOME_TABELA = 'produto';

export class createProduto1651795175311 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA, if_table_not_exist);
    await queryRunner.createTable(new Table({
      name: NOME_TABELA,
      columns: [
        coluna_primary_key,
        coluna_nome,
        coluna_preco,
        coluna_ativo,
        coluna_codigo,
        coluna_descricao,
        coluna_quantidade,
        coluna_unidade_quantidade,
        coluna_tipo_produto,
        coluna_data_cadastro,
        coluna_data_modificacao_cadastro,
        coluna_empresaId,
      ],
    }), if_table_not_exist);

    /* Seeder - Retirar quando for para producao */
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Produto)
      .values([
        produto_1, produto_2, produto_3,
        produto_4, produto_5, produto_6,
        produto_7, produto_8, produto_9
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(NOME_TABELA);
  }
}

const produto_1: ProdutoTypes = {
  id: 1,
  nome: 'X-Burguer 1',
  codigo: '622f056b-1294-450e-9ee0-52fd5e94f164',
  ativo: true,
  preco: 15,
  descricao: 'Hamburguer basico 1',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 1,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_2: ProdutoTypes = {
  id: 2,
  nome: 'X-Burguer 2',
  codigo: 'c409b0ae-8eb3-45f4-8392-b44024391cc2',
  ativo: true,
  preco: 12,
  descricao: 'Hamburguer basico 2',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 1,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_3: ProdutoTypes = {
  id: 3,
  nome: 'X-Burguer 3',
  codigo: '8215ea8f-798e-4dae-9d6c-1c286aca3e58',
  ativo: true,
  preco: 10,
  descricao: 'Hamburguer basico 3',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 2,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_4: ProdutoTypes = {
  id: 4,
  nome: 'X-Burguer 4',
  codigo: '504e69f7-5d7e-433b-b939-d2cbb8cba9c7',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 4',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 2,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_5: ProdutoTypes = {
  id: 5,
  nome: 'X-Burguer 5',
  codigo: '1b1e69a4-12d4-434c-a723-8092d238bb6d',
  ativo: true,
  preco: 25,
  descricao: 'Hamburguer basico 5',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 3,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_6: ProdutoTypes = {
  id: 6,
  nome: 'X-Burguer 6',
  codigo: '8fe089c6-1f8f-4319-8f82-a5d550458fdb',
  ativo: true,
  preco: 28,
  descricao: 'Hamburguer basico 6',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 3,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_7: ProdutoTypes = {
  id: 7,
  nome: 'X-Burguer 7',
  codigo: '82d03edd-9ba3-4909-82f5-67332e115c1a',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 7',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 4,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_8: ProdutoTypes = {
  id: 8,
  nome: 'X-Burguer 8',
  codigo: '0a304aea-fe08-4f39-9f56-24abfd2ed65f',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 8',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 4,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};

const produto_9: ProdutoTypes = {
  id: 9,
  nome: 'X-Burguer 9',
  codigo: '9b56e506-1519-4b81-aaf9-604ae6ed0f1c',
  ativo: true,
  preco: 20,
  descricao: 'Hamburguer basico 9',
  data_cadastro: new Date(),
  data_modificacao_cadastro: new Date,
  empresaId: 4,
  quantidade: 1,
  unidade_quantidade: "unidade (un)",
  tipo_produto: "Comida"
};
