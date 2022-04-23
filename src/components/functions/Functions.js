import { v4 as uuidv4 } from 'uuid';

export function getNewIdNumber() {
  return uuidv4();
}

export function getDateString(date) {
  const [month, day, year] = date
    .toLocaleDateString("en-GB")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};