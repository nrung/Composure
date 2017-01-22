var constants = require('./resources/constants');

module.exports = {
    'HelloWorldIntent': function () {
        this.emit(':tell', 'Hello World!');
    }
};