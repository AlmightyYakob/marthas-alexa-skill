export const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const PINNED_EPOCH_TIME_MS = 1559966400000;
export const PINNED_DAY_CYCLE = 9; // 9 instead of 10 for index counting

export const SKILL_TITLE_NAME = 'Martha\'s Daily Flavors';

export const BUCKET_NAME = 'marthas-flavor-skill';
export const CALENDAR_KEY = 'flavor-cycle.json';
export const CALENDAR_BUCKET_PARAMS = {
  Bucket: BUCKET_NAME,
  Key: CALENDAR_KEY,
};

export const DANDEE_SSML_STRING = '<phoneme alphabet="ipa" ph="ˈdæn.di">Dandee</phoneme>';
export const CREME_SSML_STRING = '<phoneme alphabet="ipa" ph="kɹiːm">Creme</phoneme>';

export const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const MONTHS = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const WORD_MAPPINGS = [
  {
    search: /Rasp(\s)/ig,
    backwardSearch: /Raspberry(\s)/ig,
    replace: 'Raspberry$1',
    backwardReplace: 'Rasp$1',
  },
  {
    search: /Choc(\s)/ig,
    replace: 'Chocolate$1',
  },
  {
    search: /Cr(?:e|è)me(\s)/ig,
    replace: 'Cream$1',
  },
  {
    search: /(P\/B)/ig,
    replace: 'Peanut Butter',
  },
];
