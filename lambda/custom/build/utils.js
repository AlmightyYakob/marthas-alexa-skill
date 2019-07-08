"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceStrings = exports.getCalendar = exports.getCurrentCycle = exports.getDate = void 0;

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getDate = (date, day) => {
  const returnDate = date ? (0, _moment.default)(date) : (0, _moment.default)();
  returnDate.hours(0).minutes(0).seconds(0).milliseconds(0).utcOffset(-240);
  if (day) returnDate.day(day);
  return returnDate.toDate();
};

exports.getDate = getDate;

const getCurrentCycle = currentDate => {
  const pinnedDate = getDate(_constants.PINNED_EPOCH_TIME_MS);
  console.log('CURRENT DATE', currentDate);
  console.log('PINNED DATE', pinnedDate);
  console.log('RAW DIFF', (currentDate - pinnedDate) / _constants.MS_PER_DAY);
  const dayDifference = Math.ceil((currentDate - pinnedDate) / _constants.MS_PER_DAY);
  return (dayDifference + _constants.PINNED_DAY_CYCLE) % 18;
};

exports.getCurrentCycle = getCurrentCycle;

const getCalendar = async () => {
  const s3 = new _awsSdk.default.S3();
  return JSON.parse((await s3.getObject(_constants.CALENDAR_BUCKET_PARAMS).promise()).Body.toString());
};

exports.getCalendar = getCalendar;

const replaceStrings = string => {
  let newString = string;

  _constants.WORD_MAPPINGS.forEach(word => newString = newString.replace(word.search, word.replace));

  return newString;
};

exports.replaceStrings = replaceStrings;