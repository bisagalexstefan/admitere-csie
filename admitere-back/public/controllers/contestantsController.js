let Contestants = require('../models').Contestants;

module.exports.addContestants = (req, res) => {
  Contestants.findOne({
    where: {
      id: 1
    }, raw: true,
  }).then((result) => {

    let increment = parseInt(req.body.increase) + parseInt(result.number);

    Contestants.update(
        {number: increment},
        {
          where: {
            id: 1
          }
        }).then(() => {
      res.status(200).send('Number increased with ' + req.body.increase);
    }).catch((err) => {
      res.status(400).send(err.message)
    })

  });

};

module.exports.deleteContestants = (req, res) => {
  Contestants.findOne({
    where: {
      id: 1
    }, raw: true,
  }).then((result) => {

    let increment = parseInt(result.number) - parseInt(req.body.increase);

    Contestants.update(
        {number: increment},
        {
          where: {
            id: 1
          }
        }).then(() => {
      res.status(200).send('Number decreased with ' + req.body.increase);
    }).catch((err) => {
      res.status(400).send(err.message)
    })

  });
};

module.exports.getContestants = (req, res) => {
  Contestants.findOne({
    where: {
      id: 1
    }, raw: true,
  }).then((result) => {
    res.status(200).send({message: result.number});
  }).catch((err) => {
    res.status(400).send({message: err.message});
  })

};