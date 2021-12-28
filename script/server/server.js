const DEVIN = require('./DEVIN.js');
const USERSEARCH = require('./USERSEARCH.js');
const app = require('./sever.config.js');

module.exports = () => {
    try {
        DEVIN();
        USERSEARCH();
        app.listen(3000);
    } catch (e) {
        console.error(e);
    }

}
