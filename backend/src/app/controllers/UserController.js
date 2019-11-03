const User = require("../models/User");

module.exports = {
  async index(req, res) {
    try {
      return res.json(await User.find());
    } catch (e) {
      return res.status(500).json({
        error: "Nenhum usuário encontrado"
      });
    }
  },
  async show(req, res) {
    try {
      return res.json(await User.findOne({ _id: req.params.id }));
    } catch (e) {
      return res.status(500).json({
        error: "Nenhum usuário encontrado"
      });
    }
  },
  async store(req, res) {
    try {
      await User.create(req.body);
      return res.status(201).json({ msg: "Usuário cadastrado!" });
    } catch (e) {
      return res.status(500).json({
        error: "Não foi possivel cadastrar"
      });
    }
  },
  async delete(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });

      if (user) {
        await User.deleteOne({ _id: req.params.id });
        return res.status(201).json({ msg: "Usuário Deletado!" });
      } else {
        return res.status(400).json({ msg: "Usuário não encontrado!" });
      }
    } catch (e) {
      return res.status(500).json({
        error: "Não foi possivel deletar"
      });
    }
  },
  async update(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });

      if (user) {
        await User.findOneAndUpdate({ _id: req.params.id }, req.body);
        return res.status(201).json({ msg: "Usuário Atualizado!" });
      } else {
        return res.status(400).json({ msg: "Usuário não encontrado!" });
      }
    } catch (e) {
      return res.status(500).json({
        error: "Não foi possivel deletar"
      });
    }
  }
};
