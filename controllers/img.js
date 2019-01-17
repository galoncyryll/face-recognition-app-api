const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '7833de21626943dea74b9ffda69ab497'
});

const handleApiCall = (req, res) => {
    app.models.predict({id: "a403429f2ddf4b49b307e318f00e528b"}, req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json(err));
}

const handleImg = (req, res, db) => {
    const { id } = req.body;
    db('users')
     .where('id', '=', id)
     .increment('entries', 1)
     .returning('entries')
     .then(entries => {
         res.json(entries[0]);
     })
     .catch(err => res.status(400).json('unable to get entries'));
}

module.exports = {
    handleImg,
    handleApiCall
}