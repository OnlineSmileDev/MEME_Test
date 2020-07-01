import moment from "moment";

export const monthList = [
    { label: 'Jan', value: '01' },
    { label: 'Feb', value: '02' },
    { label: 'March', value: '03' },
    { label: 'April', value: '04' },
    { label: 'May', value: '05' },
    { label: 'June', value: '06' },
    { label: 'July', value: '07' },
    { label: 'August', value: '08' },
    { label: 'Sept', value: '09' },
    { label: 'Oct', value: '10' },
    { label: 'Nov', value: '11' },
    { label: 'Dec', value: '12' },
];

export const dayList = () => {
    let arr = []
    for (let i = 1; i < 31; ++i)
        arr.push({ label: i.toString(), value: i.toString() });
    return arr;
}

export const yearList = () => {
    let arr = []
    for (let i = 2007; i > 1920; --i)
        arr.push({ label: i.toString(), value: i.toString() });
    return arr;
}

export const getAge = (dob) => {
    var now = moment(new Date()); //todays date
    var from = moment(dob); // another date
    var duration = moment.duration(now.diff(from));
    return duration.asYears().toFixed(0);
}

export const toHeightString = (height) => {
    return `${Math.floor(height / 12)}'${height % 12}"`;
}
export const fromHeightString = (height) => {
    const ft = height.substring(0, height.indexOf('\''));
    const inches = height.substring(height.indexOf('\'') + 1, 1 + height.indexOf('"') - height.indexOf('\''));
    // console.log(`height=${height}, ft=${ft}, inces=${inches}`);
    return (parseInt(ft) * 12) + parseInt(inches);
}