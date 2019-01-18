const Clarifai = require('clarifai');

const app = new Clarifai.App({
<<<<<<< HEAD
    apiKey: 'a75a1d62d7574812b090480079d6a0a5'
=======
    apiKey: 'YOUR_API_KEY_HERE'
>>>>>>> 6d830c47116186d134fb1252e28cce5602580785
});

const handleApiCall = (req, res) => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('unable to connect to API'));
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
