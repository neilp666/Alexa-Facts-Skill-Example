const Alexa = require('alexa-sdk');

const APP_ID = undefined;
const SKILL_NAME = 'Silicon Valley Facts';
const GET_FACT_NAME = "Here's your Silicon Valley fact: ";
const HELP_MESSAGE = 'You can say tell me a fact about the valley, or you can say exit...What can I help you with';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye';

const data = ['It is a common but incorrect myth that Silicon Valley is bro culture. Silicon Valley is geek culture'
              ' A startup is a company designed to grow fast.'
              'Venture investors want to back intellectually honest entreprenuers that can talk about strengths and weaknesses'
            ];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHanders(handlers);
    alexa.execute();
};

const handlers = {
  'LaunchRequest': function() {
      this.emit('GetSiliconValleyFactIntent');
  },
  'GetSiliconValleyFactIntent': function() {

  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(':responseReady');

  },
  'AMAZON.CancelIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.StopIntent': function() {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },

};
