import {
    MS_PER_DAY,
    PINNED_DATE_STRING,
    PINNED_DAY_CYCLE,
} from './constants';


export const getCurrentCycle = (currentDate) => {
    const pinnedDate = new Date(PINNED_DATE_STRING);

    console.log('Current Date', currentDate);
    console.log('Pinned Date', pinnedDate);

    const dayDifference = Math.floor((currentDate - pinnedDate)/MS_PER_DAY);
    console.log('Diff', dayDifference);

    return (dayDifference + PINNED_DAY_CYCLE) % 18;
};
