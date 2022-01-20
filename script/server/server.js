const app = require('./sever.config.js');
const DEVIN = require('./DEVIN.js');
const USERSEARCH = require('./USERSEARCH.js');
const PAGE = require('./PAGE.js')
module.exports = () => {
    try {
        DEVIN();
        USERSEARCH();
        PAGE();
        app.listen(3000);
    } catch (e) {
        console.error(e);
    }
}
