import AWS from 'aws-sdk';

import {
    MS_PER_DAY,
    PINNED_DATE_STRING,
    PINNED_DAY_CYCLE,
    CALENDAR_BUCKET_PARAMS,
} from './constants';


export const getCurrentCycle = (currentDate) => {
    const pinnedDate = new Date(PINNED_DATE_STRING);
    const dayDifference = Math.floor((currentDate - pinnedDate)/MS_PER_DAY);
    return (dayDifference + PINNED_DAY_CYCLE) % 18;
};

export const getCalendar = async () => {
    const s3 = new AWS.S3();
    return JSON.parse((await s3.getObject(CALENDAR_BUCKET_PARAMS).promise()).Body.toString());
};