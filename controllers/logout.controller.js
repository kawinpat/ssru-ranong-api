const methods = {
    hasLoggedOut(req, res) {
        let logOut = req.body.logOut;
        if (logOut == "logOut") {
            return res.status(200).send(null);
        } else {
            return res.status(200).send(null);
        }
    },
};

module.exports = {...methods };