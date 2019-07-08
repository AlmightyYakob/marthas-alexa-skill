"use strict";

var Alexa = _interopRequireWildcard(require("ask-sdk-core"));

var _utils = require("./utils");

var _constants = require("./constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* eslint-disable  func-names */

/* eslint-disable  no-console */
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },

  handle(handlerInput) {
    const cardText = `Welcome to the Martha's Dandee Creme Alexa Skill. How can I help?`;
    const speechText = `Welcome to the Martha's
      ${_constants.DANDEE_SSML_STRING} ${_constants.CREME_SSML_STRING}
      Alexa Skill. How can I help?`;
    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).withSimpleCard(_constants.SKILL_TITLE_NAME, cardText).getResponse();
  }

};
const TodaysFlavorsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'todays_flavors';
  },

  async handle(handlerInput) {
    const todaysDate = (0, _utils.getDate)();
    const calendar = await (0, _utils.getCalendar)();
    const currentCycle = (0, _utils.getCurrentCycle)(todaysDate);
    console.log('DATE', todaysDate);
    console.log('CYCLE', currentCycle);
    const flavors = calendar[currentCycle];
    const cardText = `Today's flavors are ${flavors.join(', ')}`;
    const speechText = (0, _utils.replaceStrings)(`Today's flavors are ${flavors.join(', ')}`);
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard(_constants.SKILL_TITLE_NAME, cardText).getResponse();
  }

};
const FutureFlavorsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'future_flavors';
  },

  async handle(handlerInput) {
    const calendar = await (0, _utils.getCalendar)();
    const dateSlot = handlerInput.requestEnvelope.request.intent.slots.future_date.value;
    const daySlot = handlerInput.requestEnvelope.request.intent.slots.day_of_the_week.value;
    console.log('DATE SLOT', dateSlot);
    console.log('DAY SLOT', daySlot);
    const date = (0, _utils.getDate)(dateSlot, daySlot);
    const currentCycle = (0, _utils.getCurrentCycle)(date);
    console.log('DATE', date);
    console.log('CYCLE', currentCycle);
    const flavors = calendar[currentCycle];
    const cardText = `The flavors for ${date.toUTCString().split(' ').slice(0, 4).join(' ')} are ${flavors.join(', ')}`;
    const speechText = (0, _utils.replaceStrings)(`
      <speak>
      The flavors for ${_constants.WEEKDAYS[date.getDay()]},

      <say-as interpret-as="date">????${date.getMonth() < 9 ? 0 : ''}${date.getMonth() + 1}${date.getDate() < 10 ? 0 : ''}${date.getDate()}</say-as>

      are ${flavors.join(', ')}
      </speak>
    `);
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard(_constants.SKILL_TITLE_NAME, cardText).getResponse();
  }

};
const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },

  handle(handlerInput) {
    const speechText = `You can ask for today's flavors by saying, what are today's flavors?
      You can also ask about the flavors for a future date.
      For example, you could say, what are the flavors for July 4th?`;
    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).withSimpleCard(_constants.SKILL_TITLE_NAME, speechText).getResponse();
  }

};
const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },

  handle(handlerInput) {
    const speechText = 'Goodbye!';
    return handlerInput.responseBuilder.speak(speechText).withSimpleCard(_constants.SKILL_TITLE_NAME, speechText).getResponse();
  }

};
const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },

  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  }

};
const ErrorHandler = {
  canHandle() {
    return true;
  },

  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    const speechText = 'Sorry, I can\'t understand the command. Please say again.';
    return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).withSimpleCard(_constants.SKILL_TITLE_NAME, speechText).getResponse();
  }

};
const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder.addRequestHandlers(LaunchRequestHandler, TodaysFlavorsIntentHandler, FutureFlavorsIntentHandler, HelpIntentHandler, CancelAndStopIntentHandler, SessionEndedRequestHandler).addErrorHandlers(ErrorHandler).lambda();