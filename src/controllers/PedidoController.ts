import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Pedido } from "../entity/Pedido";
import pedidoView from "../views/PedidoView";
import { valida_alualizacao_pedido, valida_criacao_pedido } from "../utils/SchemasValidacao";

interface ItemPedidoTypes {
  produtoId: number;
  quantidade: number;
}

/**
 * Listar todas os pedidos cadastrados
 */
export async function listar_pedidos(request: Request, response: Response, next: NextFunction) {
  const pedidoRepository = getRepository(Pedido);
  const pedido = await pedidoRepository.find();
  return response.json(pedido);
}

/**
 * Busca um pedido cadastrado usando o codigo do mesmo e exibe os seus dados
 */
export async function busca_pedido(request: Request, response: Response, next: NextFunction) {
  const { id } = request.params;
  const pedidoRepository = getRepository(Pedido);
  const pedido = await pedidoRepository.findOneOrFail(id, { relations: ['lista_produtos'] });
  return response.json(pedidoView.render(pedido));
}

/**
 * Cadastra um pedido
 */
export async function criar_pedido(request: Request, response: Response, next: NextFunction) {
  const {
    nome, status_pedido, preco_total,
    data_cadastro, data_modificacao_cadastro
  } = request.body;

  const pedidoRepository = getRepository(Pedido);

  const requestItemPedido = request.body.ingredientes as ItemPedidoTypes[];
  const lista_produtos = requestItemPedido.map((itemPedido) => {
    const { produtoId, quantidade } = itemPedido;
    return { produtoId, quantidade };
  });

  const data = {
    nome, status_pedido, lista_produtos, preco_total,
    data_cadastro, data_modificacao_cadastro
  };

  await valida_criacao_pedido.validate(data, { abortEarly: false });
  const pedido = pedidoRepository.create(data);
  await pedidoRepository.save(pedido);

  return response.status(201).json(pedido);
}

/**
 * Atualiza os dados de um pedido, usando o codigo do mesmo para busca-lo no banco de dados
 */
export async function atualizar_pedido(request: Request, response: Response, next: NextFunction) {
  const { id, status_pedido, data_modificacao_cadastro } = request.body;
  const pedidoRepository = getRepository(Pedido);
  const data = { status_pedido, data_modificacao_cadastro };

  await valida_alualizacao_pedido.validate(data, { abortEarly: false });
  const pedido = await pedidoRepository.update(id, data);

  return response.status(201).json(pedido);
}
