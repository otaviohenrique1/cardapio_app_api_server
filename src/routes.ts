import { Router } from "express";
import { atualizar_empresa, buscar_empresa, criar_empresa, listar_empresas, login_empresa } from "./controllers/EmpresaController";
import { atualizar_produto, busca_produto, criar_produto, listar_produtos, apagar_produto } from "./controllers/ProdutoController";
import { atualizar_pedido, busca_pedido, criar_pedido, listar_pedidos } from "./controllers/PedidoController";
import { atualizar_cliente, busca_cliente, criar_cliente, listar_clientes, login_cliente } from "./controllers/ClienteController";
import { atualizar_administrador, buscar_administrador, criar_administrador, listar_administradores, login_administrador } from "./controllers/AdministradorController";
import multer from "multer";
import uploadConfig from "./config/uploads";
// import passport from "passport";
// import session from "express-session";

const routes = Router();
const upload = multer(uploadConfig);

/**
 * Rotas do usuario (empresa cliente do sistema)
 */
routes.get('/empresa', listar_empresas);
routes.get('/empresa/:id', buscar_empresa);
routes.post('/empresa', criar_empresa);
routes.put('/empresa/:id', atualizar_empresa);
routes.post('/empresa/login', login_empresa);

/**
 * Rotas da produto
 */
routes.get('/produto/cardapio/:id', listar_produtos);
routes.get('/produto/:id', busca_produto);
routes.post('/produto', upload.array('imagem'), criar_produto);
routes.put('/produto/:id', upload.array('imagem'), atualizar_produto);
routes.delete('/produto/:id', apagar_produto);

/**
 * Rotas do pedido
 */
routes.get('/pedido/:id', listar_pedidos);
routes.get('/pedido/:id', busca_pedido);
routes.post('/pedido', criar_pedido);
routes.put('/pedido/:id', atualizar_pedido);

/**
 * Rotas do cliente (Clientes da empresa cliente)
 */
routes.get('/empresa/:empresa_id/cliente', listar_clientes);
routes.get('/cliente/:id', busca_cliente);
routes.post('/cliente', criar_cliente);
routes.put('/cliente/:id', atualizar_cliente);
routes.post('/cliente/login', login_cliente);
// routes.post('/cliente/login2', passport.authenticate('local'));
// routes.post('/cliente/login2', clienteController.login2);

/**
 * Rotas do administrador (Empresa que vende o sistema)
 */
routes.get('/administrador', listar_administradores);
routes.get('/administrador/:id', buscar_administrador);
routes.post('/administrador', criar_administrador);
routes.put('/administrador/:id', atualizar_administrador);
routes.post('/administrador/login', login_administrador);

export default routes;
