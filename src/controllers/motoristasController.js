const motoristas = require('../models/motoristas');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

const getMotoristasByBairro = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const bairro = req.query.bairro;
		motoristas.find({ bairros: bairro }, function (err, motoristas) {
			if (err) {
				res.status(500).send({ message: err.message });
			}
			res.status(200).send(motoristas);
		});
	});
};

const getMotoristasByCidade = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const cidade = req.query.cidade;
		motoristas.find({ cidade: cidade, ativo: true }, function (err, motoristas) {
			if (err) {
				res.status(500).send({ message: err.message });
			}
			res.status(200).send(motoristas);
		});
	});
};

const getMotoristasByHorario = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const horario = req.query.horario;
		motoristas.find({ horarios: horario }, function (err, motoristas) {
			if (err) {
				res.status(500).send({ message: err.message });
			}
			res.status(200).send(motoristas);
		});
	});
};

const getAll = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		motoristas.find(function (err, motoristas) {
			err ? res.status(424).send({ message: err.message }) : res.status(200).send(motoristas);
		});
	});
};

const getMotoristasAtivos = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		motoristas.find({ ativo: true }, function (err, motoristas) {
			if (err) {
				res.status(424).send({ message: err.message });
			} else {
				res.status(200).send(motoristas);
			}
		});
	});
};

const getMotoristasByCidadeByAtivos = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const cidade = req.query.cidade;
		motoristas.find({ cidade: cidade, ativo: true }, function (err, motoristas) {
			if (err) {
				res.status(500).send({ message: err.message });
			}
			res.status(200).send(motoristas);
		});
	});
};

const postMotorista = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		let motorista = new motoristas(req.body);
		motorista.save((err) => {
			err	? res.status(424).send({ message: err.message }) : res.status(201).send({
				status: true,
				message: 'Novo Motorista cadastrado com sucesso',
			});
		});
	});
};

const getById = (req, res) => {
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
		motoristas.find({ id }, (err, motoristas) => {
			if (err) {
				res.status(424).send({ message: err.message });
			} else {
				res.status(200).send(motoristas);
			}
		});
	});
};

const deleteMotorista = (req, res) => {
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
		motoristas.find({ id }, (err, motorista) => {
			if (motorista.length > 0) {
				motoristas.deleteOne({ id }, (err) => {
					err	? res.status(424).send({ message: err.message }) : res.status(200).send({
						status: true,
						mensagem: 'Motorista excluído com sucesso',
					});
				});
			} else {
				res.status(404).send('Motorista não encontrado');
			}
		});
	});
};

const putMotorista = (req, res) => {
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
		motoristas.updateMany({ id }, { $set: req.body }, function (err, motoristas) {
			if (err) {
				res.status(500).send({ message: err.message });
			} else {
				res.status(200).send({ message: 'Motorista atualizado com sucesso!' });
			}
		});
	});
};

module.exports = {
	getMotoristasByBairro,
	getMotoristasByCidade,
	getMotoristasByHorario,
	getAll,
	getMotoristasAtivos,
	getMotoristasByCidadeByAtivos,
	postMotorista,
	getById,
	deleteMotorista,
	putMotorista,
};