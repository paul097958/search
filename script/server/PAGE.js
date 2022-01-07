const path = require('path');
const app = require('./sever.config.js');

module.exports = () => {

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(`./src/index.html`))
    });

    app.get('/css/index.css', (req, res) => {
        res.sendFile(path.resolve(`./src/css/index.css`))
    });

    app.get('/js/index.js', (req, res) => {
        res.sendFile(path.resolve(`./src/js/index.js`))
    });

    app.get('/img/paul.jpg', (req, res) => {
        res.sendFile(path.resolve(`./src/img/paul.jpg`))
    });

}
