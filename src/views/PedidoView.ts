import { Pedido } from "../entity/Pedido";
import itemPedidoView from "./ItemPedidoView";

export default {
  render(pedido: Pedido) {
    const {
      id, codigo, preco_total, cliente, status_pedido,
      lista_produtos, data_cadastro, data_modificacao_cadastro
    } = pedido;

    const pedido_lista_produtos = itemPedidoView
      .renderMany(lista_produtos);

    return {
      id, codigo, preco_total, cliente, status_pedido,
      pedido_lista_produtos,
      data_cadastro, data_modificacao_cadastro,
    };
  },

  renderMany(pedidos: Pedido[]) {
    return pedidos.map(pedido => this.render(pedido));
  }
};