export const MS_PER_DAY = 1000 * 60 * 60 * 24;

export const PINNED_DATE_STRING = 'Sat, 08 Jun 2019 00:00:00 GMT';
export const PINNED_DAY_CYCLE = 9; // 9 instead of 10 for index counting

export const SKILL_TITLE_NAME = 'Martha\'s Daily Flavors';

export const BUCKET_NAME = 'marthas-flavor-skill';
export const CALENDAR_KEY = 'flavor-cycle.json';
export const CALENDAR_BUCKET_PARAMS = {
    Bucket: BUCKET_NAME,
    Key: CALENDAR_KEY,
};

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

export const WORD_MAPPINGS = {
    'Rasp': 'Raspberry',
    'Choc': 'Chocolate',
}