import { Ingrediente } from "../entity/Ingrediente";

export default {
  render(ingrediente: Ingrediente) {
    const {
      id, nome, quantidade, unidade_quantidade, produtoId, removivel
    } = ingrediente;

    return {
      id, nome, quantidade, unidade_quantidade, produtoId, removivel
    };
  },

  renderMany(ingredientes: Ingrediente[]) {
    return ingredientes.map(ingrediente => this.render(ingrediente));
  }
};