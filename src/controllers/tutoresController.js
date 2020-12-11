const tutores = require('../models/tutores');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const create = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const tutor = new tutores(req.body);
  tutor.save(function(err) {
    if (err) {
      res.status(424).send({ message: err.message })
    }
    res.status(201).send(tutor.toJSON())
  });
};

const getAll = (req, res) => {
  const authHeader = req.get('authorization');
  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };
  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };
    tutores.find((err, tutores) => {
      if(err) {
        return res.status(424).send({ message: err.message });
      };
      return res.status(200).send(tutores);
    });
  });  
};

const login = (req, res) => {
  tutores.findOne({ email: req.body.email }, function(error, tutor) {
    if (!tutor) {
      return res.status(404).send(`Não existe tutor com o email ${req.body.email}`);
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, tutor.senha);
    if (!senhaValida) {
      return res.status(403).send('Senha não confere.');
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

const deleteTutor = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const id = req.params.id;
		tutores.find({ id }, (err, tutor) => {
			if (tutor.length > 0) {
				tutores.deleteOne({ id }, (err) => {
					err	? res.status(424).send({ message: err.message }) : res.status(200).send({
						status: true,
						mensagem: 'Tutor excluído com sucesso',
					});
				});
			} else {
				res.status(404).send('Tutor não encontrado');
			}
		});
	});
};

module.exports = {
  create,
  getAll,
  login,
  deleteTutor
};