const motoristas = require('../models/motoristas');

const getAll = (req, res) => {
	motoristas.find(function (err, motoristas) {
		err ? res.status(424).send({ message: err.message }) : res.status(200).send(motoristas);
	});
};

const getAllMotoristasByBairro = (req, res) => {
	const bairro = req.query.bairro;
	if (bairro) {
		const motoristasByBairro = motoristas.filter((motorista) => motorista.bairro.includes(bairro));
		res.status(200).send(motoristasByBairro);
	} else {
		res.status(404).send('Motoristas sem Bairro cadastrado');
	}
};

const postMotorista = (req, res) => {
	let motorista = new motoristas(req.body);
	motorista.save((err) => {
		err
			? res.status(424).send({ message: err.message })
			: res.status(201).send({
					status: true,
					message: 'Novo Motorista cadastrado com sucesso',
			});
	});
};

const getById = (req, res) => {
	const id = req.params.id;
	motoristas.find({ id }, (err, motoristas) => {
		if (err) {
			res.status(424).send({ message: err.message });
		} else {
			res.status(200).send(motoristas);
		}
	});
};

const deleteMotorista = (req, res) => {
	const id = req.params.id;
	motoristas.find({ id }, (err, motorista) => {
		if (motorista.length > 0) {
			motoristas.deleteOne({ id }, (err) => {
				err
					? res.status(424).send({ message: err.message })
					: res.status(200).send({
							status: true,
							mensagem: 'Motorista excluído com sucesso',
					});
			});
		} else {
			res.status(404).send('Motorista não encontrado');
		}
	});
};

const putMotorista = (req, res) => {
	const id = req.params.id;
	motoristas.updateMany({ id }, { $set: req.body }, function (err, motoristas) {
		if (err) {
			res.status(500).send({ message: err.message });
		} else {
			res.status(200).send({ message: 'Motorista atualizado com sucesso!' });
		}
	});
};

module.exports = {
	getAll,
	getAllMotoristasByBairro,
	postMotorista,
	getById,
	deleteMotorista,
	putMotorista,
};