const methods = {
    hasLoggedIn(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        const adminUser = "ranongadmin";
        const adminPassword = "Ranong_04ADMIN";
        if (username == adminUser && password == adminPassword) {
            return res.status(200).send("loggedIn-S");
        } else {
            return res.status(200).send(null);
        }
    },
};

module.exports = {...methods };