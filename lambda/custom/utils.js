import AWS from 'aws-sdk';
import moment from 'moment';

import {
    MS_PER_DAY,
    PINNED_EPOCH_TIME_MS,
    PINNED_DAY_CYCLE,
    CALENDAR_BUCKET_PARAMS,
    WORD_MAPPINGS,
} from './constants';


export const getDate = (date, day) => {
    const returnDate = date ? moment(date) : moment();
    returnDate
        .utcOffset(-240)
        .hours(0)
        .minutes(0)
        .seconds(0)
        .milliseconds(0);

    if (day) returnDate.day(day);
    return returnDate.toDate();
}

export const getCurrentCycle = (currentDate) => {
    const pinnedDate = getDate(PINNED_EPOCH_TIME_MS);

    console.log('CURRENT DATE', currentDate);
    console.log('PINNED DATE', pinnedDate);
    console.log('RAW DIFF', (currentDate - pinnedDate)/MS_PER_DAY);

    const dayDifference = Math.ceil((currentDate - pinnedDate)/MS_PER_DAY);
    return (dayDifference + PINNED_DAY_CYCLE) % 18;
};

export const getCalendar = async () => {
    const s3 = new AWS.S3();
    return JSON.parse((await s3.getObject(CALENDAR_BUCKET_PARAMS).promise()).Body.toString());
};

export const replaceStrings = (string) => {
    let newString = string;

    WORD_MAPPINGS.forEach(word => newString = newString.replace(word.search, word.replace));
    return newString;
};