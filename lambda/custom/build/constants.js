"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WORD_MAPPINGS = exports.MONTHS = exports.WEEKDAYS = exports.CREME_SSML_STRING = exports.DANDEE_SSML_STRING = exports.CALENDAR_BUCKET_PARAMS = exports.CALENDAR_KEY = exports.BUCKET_NAME = exports.SKILL_TITLE_NAME = exports.PINNED_DAY_CYCLE = exports.PINNED_EPOCH_TIME_MS = exports.MS_PER_DAY = void 0;
const MS_PER_DAY = 1000 * 60 * 60 * 24;
exports.MS_PER_DAY = MS_PER_DAY;
const PINNED_EPOCH_TIME_MS = 1559966400000;
exports.PINNED_EPOCH_TIME_MS = PINNED_EPOCH_TIME_MS;
const PINNED_DAY_CYCLE = 9; // 9 instead of 10 for index counting

exports.PINNED_DAY_CYCLE = PINNED_DAY_CYCLE;
const SKILL_TITLE_NAME = 'Martha\'s Daily Flavors';
exports.SKILL_TITLE_NAME = SKILL_TITLE_NAME;
const BUCKET_NAME = 'marthas-flavor-skill';
exports.BUCKET_NAME = BUCKET_NAME;
const CALENDAR_KEY = 'flavor-cycle.json';
exports.CALENDAR_KEY = CALENDAR_KEY;
const CALENDAR_BUCKET_PARAMS = {
  Bucket: BUCKET_NAME,
  Key: CALENDAR_KEY
};
exports.CALENDAR_BUCKET_PARAMS = CALENDAR_BUCKET_PARAMS;
const DANDEE_SSML_STRING = `<phoneme alphabet="ipa" ph="ˈdæn.di">Dandee</phoneme>`;
exports.DANDEE_SSML_STRING = DANDEE_SSML_STRING;
const CREME_SSML_STRING = `<phoneme alphabet="ipa" ph="kɹiːm">Creme</phoneme>`;
exports.CREME_SSML_STRING = CREME_SSML_STRING;
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
exports.WEEKDAYS = WEEKDAYS;
const MONTHS = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
exports.MONTHS = MONTHS;
const WORD_MAPPINGS = [{
  search: /Rasp(\s)/ig,
  replace: 'Raspberry$1'
}, {
  search: /Choc(\s)/ig,
  replace: 'Chocolate$1'
}, {
  search: /Cr(?:e|è)me(\s)/ig,
  replace: 'Cream$1'
}, {
  search: /(P\/B)/ig,
  replace: 'Peanut Butter'
}];
exports.WORD_MAPPINGS = WORD_MAPPINGS;