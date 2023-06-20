const { validateEmail } = require('../helpers/authHelper');

const loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (validateEmail(email) && password) {
        if (password === 'm295') {
            req.session.user = email;
            req.session.authenticated = true;
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({ message: 'Login was successful.' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(401).send({ error: 'Invalid password!' });
        }
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send({ error: "Email or Password isn't valid!" });
    }
};

const verifySession = (req, res) => {
    if (req.session.authenticated) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({ message: 'Session is valid.' });
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(401).send({ error: "Session isn't valid!" });
    }
};

module.exports = {
    loginUser,
    verifySession
};
