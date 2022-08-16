import { IngredienteOpcional } from "../entity/IngredientesOpcionais";

export default {
  render(ingrediente_opcional: IngredienteOpcional) {
    const {
      id, nome, preco, itemPedidoId, produtoId
    } = ingrediente_opcional;

    return {
      id, nome, preco, itemPedidoId, produtoId
    };
  },

  renderMany(ingredientes_opcionais: IngredienteOpcional[]) {
    return ingredientes_opcionais.map(ingrediente_opcional => this.render(ingrediente_opcional));
  }
};