var Alexa = require('alexa-sdk');
var APP_ID = "KEY";
var handlers = require('./src/handlers.js');

var Email_States = {
    TO_ADDRESS: "_TO_ADDRESS",
    SUBJECT: "_SUBJECT",
    BODY: "_BODY"

};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
        alexa.appID = APP_ID;

    alexa.registerHandlers(handlers);
    alexa.execute();
};

var newsSessionHandlers {
    "LaunchRequest": function () {
        this.handler.state = Email_States.TO_ADDRESS;
        this.emitWithState("AddSubject", true);
    },
    "AMAZON.StartOverIntent": function() {
        this.handler.state = GAME_STATES.START;
        this.emitWithState("StartGame", true);
    },
    "AMAZON.HelpIntent": function() {
        this.handler.state = GAME_STATES.HELP;
        this.emitWithState("helpTheUser", true);
    },
    "Unhandled": function () {
        var speechOutput = this.t("START_UNHANDLED");
        this.emit(":ask", speechOutput, speechOutput);
    }

}

var startCompositonHandler = Alexa.CreateStateHandler(Email_States.TO_ADDRESS, {
   "ComposeEmail": function (newEmail) {

   }
});

