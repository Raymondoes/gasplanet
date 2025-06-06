const express = require(`express`);
const path = require(`path`);
const expressServer = express();

expressServer.set('trust proxy', true);
expressServer.set(`view engine`, `ejs`);
expressServer.use(express.static(`views`));

expressServer.get(`/`, (req, res) => {
    const ip = req.ip;
    console.log(`Client IP: ${ip}`);
    res.render(`index`);
});

expressServer.listen(4000);
