
// const timezone =
// Pins a date to a given day of the flavor cycle 
const CYCLE_TO_DATE_PINNING = {
    cycle: 10,
    date: Date(2019, 5, 8, 12),
};

const getCurrentCycle = (currentDate) => {
    const dayDifference = currentDate - CYCLE_TO_DATE_PINNING.date;
    return (dayDifference + CYCLE_TO_DATE_PINNING.cycle) % 10;
};