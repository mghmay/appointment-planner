import { v4 as uuidv4 } from 'uuid';

export function getNewIdNumber() {
  return uuidv4();
}

export function getDateString(date) {
  const [day, month, year] = date
    .toLocaleDateString("en-GB")
    .split("/");
  return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
};

export function getTimeString(time) {
  const analogueClockConverter = ( hour, minute ) => {
    const padMinute = (minute) => minute < 10 ? `0${minute}` : minute;
    if ( hour > 12 ) {
      return `${hour % 12}:${padMinute(minute)}pm`;
    } else if ( hour === 12) {
      return `12:${padMinute(minute)}pm`
    } else if (hour === 0) {
      return `12:${padMinute(minute)}am`
    }
  return `${hour}:${padMinute(minute)}am`
  }
  const timeRegEx = time.toTimeString()
    .match(/^\d{2}:\d{2}/)
  const timeArray = timeRegEx.toString().split(":")
  const hour = Number(timeArray[0]);
  const minute = Number(timeArray[1])
  
  return analogueClockConverter( hour, minute );
}