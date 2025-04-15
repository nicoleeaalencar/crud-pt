const Usuario = require("../model/user");
 
const usuarioController = {
    create: async (request, response) => {
        try {
            const { nome, email, senha } = request.body;
 
            const usuarioCriado = await Usuario.create({ nome, email, senha });
 
            return response.status(201).json({
                msg:" o usuario foi crido com sucesso",
                usuarioCriado
            })
             
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: " Ocorreu um erro ao acessar a API"
            })
        }
    },
    update: async (request, response) => {
        try {
            const { id } = request.params;
            const { nome, email, senha } = request.body;
 
            if(!nome || !email || !senha) {
                return response.status(400).json({
                    msg: "Campos incompleto"
                });
            }
 
            const userExiste = await Usuario.findByPk(id);
            if(!userExiste) {
                return response.status(400).json({
                    msg: "usuario não encontrado"
                });
            }
 
            await Usuario.update({
                nome, email, senha
            }, {
                where: {
                    id: id
                }
            });
        } catch (error) {
            return response.status(500).json({
                msg: " Ocorreu um erro ao acessar a API"
            })
        }
     },
    findAll: async (request, response) => {
        try {
            const user = await Usuario.findAll()
 
            return response.status(201).json(user)
        } catch (erro) {
            return response.status(500).json({
                msg: " Ocorreu um erro interno ao buscar todos os usuarios"
            })
        }
    },
    delete: async (request, response) => {
        try {
            const { id } = request.params;
            const existeUsuario = await User.findByPk(id)
     
 
            if (!existeUsuario) {
                return response.status(400).json({
                    msg: "Usuario não foi encontrado"
                })
            }
            await Usuario.destroy({
                where: {
                    id: id
                }
            })
            return response.status(200).json({
                msg: " o usuario foi deletado com sucesso"
            })
 
        } catch (erro) {
            return response.status(500).json({
                msg: " Ocorreu um erro interno ao deletar o usuario"
            })
        }
    },
    findById: async (request, response) => {
        try {
           
            const { id } = request.params;
 
            const usuarioEncontrado = await Usuario.findByPk(id);
 
            if (!existeUsuario) {
             
                return response.status(204).json({
                    msg: "usuario não foi encontrado"
                })
            }
            return response.status(200).json(usuarioEncontrado)
             
        } catch (error) {
            return response.status(500).json({
                msg: " Ocorreu um erro interno ao deletar o usuario"
            })
        }
    }
}
 
module.exports = usuarioController;