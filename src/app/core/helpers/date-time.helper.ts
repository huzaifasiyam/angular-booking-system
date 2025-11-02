import * as moment from 'moment';
// import { StyleCraftDefaultConstant } from '../constants/style-craft-default.constant';

export class DateTimeHelper {
  /**
   * Converts a date string into a moment object.
   * @param date The date string to convert.
   * @returns The moment object.
   */
  public static getMomentDate(date: string): moment.Moment {
    return moment(date);
  }

  /**
   * Returns a date and time string in ISO 8601 format without a timezone.
   * @param date The date string to format.
   * @returns A date and time string (e.g., "2023-08-28T10:30:00+05:30").
   */
  public static getDateAndTimeWithoutFormat(date: string): string {
    return moment(date).format();
  }

  /**
   * Returns a date and time string in 'DD-MM-YYYY HH:mm:ss' format.
   * @param date The date string to format.
   * @returns The formatted date and time string (e.g., "28-08-2023 10:30:00").
   */
  public static getDateAndTime(date: string): string {
    return moment(date).format('DD-MM-YYYY HH:mm:ss');
  }

  /**
   * Returns the current date in 'MM-DD-YYYY' format.
   * @returns The formatted date string (e.g., "08-28-2023").
   *
   * @remarks
   * This function does not use Moment.js, which is a bit inconsistent with the rest of the class.
   * It could be replaced with a Moment.js-based function for uniformity.
   * For example: `moment().format('MM-DD-YYYY');`
   */
  public static getTodayInMDYFormat(): string {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    return `${month}-${day}-${year}`;
  }

  /**
   * Returns a given date or the current date in 'MM-DD-YYYY' format.
   * @param dateString Optional. The date string to format. If not provided, uses the current date.
   * @returns The formatted date string (e.g., "08-28-2023").
   *
   * @remarks
   * Similar to `getTodayInMDYFormat`, this function does not use Moment.js.
   * It could be replaced with: `moment(dateString).format('MM-DD-YYYY');`
   */
  public static getDateInMDYFormat(dateString?: string): string {
    const date = dateString ? new Date(dateString) : new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  }

  /**
   * Returns a date string in 'DD-MM-YYYY' format.
   * @param date The date string to format.
   * @returns The formatted date string (e.g., "28-08-2023").
   */
  public static getDate(date: string): string {
    return moment(date).format('DD-MM-YYYY');
  }

  /**
   * Returns a date string in 'YYYY-MM-DD' format.
   * @param date The date string to format.
   * @returns The formatted date string (e.g., "2023-08-28").
   */
  public static getYearMonthDateFormat(date: string): string {
    return moment(date).format('YYYY-MM-DD');
  }

  /** 
   * Returns a date string in 'YYYY-MM-DD' format.
   * @param date The date string to format.
   * @returns The formatted date string (e.g., "2023-08-28").
   *
   * @remarks
   * This function is **redundant** as it has the same implementation and purpose as `getYearMonthDateFormat`.
   */
  public static getDatePayload(date: string): string {
    return moment(date).format('YYYY-MM-DD');
  }

  /**
   * Returns the time and seconds from a date string in 'HH:mm:ss' format.
   * @param date The date string to format.
   * @returns The formatted time string (e.g., "10:30:00").
   */
  public static getTimeAndSeconds(date: string): string {
    return moment(date).format('HH:mm:ss');
  }

  /**
   * Returns the time from a date string in 'hh:mm a' format (12-hour clock).
   * @param date The date string to format.
   * @returns The formatted time string (e.g., "10:30 am").
   */
  public static getTime(date: string): string {
    return moment(date).format('hh:mm a');
  }

  /**
   * Returns a date and time string in 'YYYY-MM-DD HH:mm:ss' format.
   * @param date The date string to format.
   * @returns The formatted date and time string (e.g., "2023-08-28 10:30:00").
   */
  public static getYearmonthDayHourMintuesSecond(date: string): string {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }

  /**
   * Adds a specified number of minutes to a Date object.
   * @param date The Date object to modify.
   * @param minutes The number of minutes to add.
   * @returns The new Date object.
   */
  public static addMinutesToDate(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000);
  }

  /**
   * Returns a date string in 'MM/DD/YYYY' format.
   * @param date The Date object to format.
   * @returns The formatted date string (e.g., "08/28/2023").
   */
  public static getMonthDateYearFormat(date: Date): string {
    return moment(date).format('MM/DD/YYYY');
  }

  /**
   * Adds minutes to a date and returns the new time in 'hh:mm a' format.
   * @param date The date string.
   * @param minutes The number of minutes to add.
   * @returns The formatted time string (e.g., "11:00 am").
   *
   * @remarks
   * This function uses a helper function `addMinutesToDate`.
   */
  public static getAddedTime(date: string, minutes: number): string {
    const addedMinuteTime = this.addMinutesToDate(new Date(date), minutes);
    return moment(addedMinuteTime).format('hh:mm a');
  }

  /**
   * Adds minutes to a date and returns the new time in 'HH:mm' format (24-hour clock).
   * @param date The date string.
   * @param minutes The number of minutes to add.
   * @returns The formatted time string (e.g., "11:00").
   *
   * @remarks
   * This function is similar to `getAddedTime` but returns a 24-hour format.
   */
  public static getAddedTimeIn24(date: string, minutes: number): string {
    const addedMinuteTime = this.addMinutesToDate(new Date(date), minutes);
    return moment(addedMinuteTime).format('HH:mm');
  }

  /**
   * Adds minutes to a time string and returns the new time in 'hh:mm a' format.
   * @param timeStr The time string (e.g., "10:30 AM").
   * @param minutes The number of minutes to add.
   * @returns The formatted time string (e.g., "10:45 am").
   */
  public static getAddedTime1(timeStr: string, minutes: number): string {
    const today = moment().format('YYYY-MM-DD');
    const fullDateTime = moment(`${today} ${timeStr}`, [
      'YYYY-MM-DD hh:mm A',
      'YYYY-MM-DD HH:mm',
    ]);

    if (!fullDateTime.isValid()) {
      console.warn('Invalid time passed to getAddedTime:', timeStr);
      return '';
    }

    return fullDateTime.add(minutes, 'minutes').format('hh:mm a');
  }

  /**
   * Adds a desired time (hours, minutes, seconds) to a date string.
   * @param date The date string to modify.
   * @param desireTime An object containing the hours, minutes, and optional seconds to set.
   * @returns The modified date string in ISO 8601 format.
   */
  public static addDesireTime(
    date: string,
    desireTime: { [key: string]: number }
  ): string {
    const getDesireTime = moment(date).set({
      hour: desireTime['hours'],
      minute: desireTime['minutes'],
      second: desireTime['seconds'] || 0,
    });
    return moment(getDesireTime).format();
  }

  /**
   * Combines a date string and a time string into a single moment object.
   * @param date The date string in 'YYYY-MM-DD' format.
   * @param time The time string in 'hh:mm A' format.
   * @returns The combined moment object.
   */
  public static combineDateTime(date: string, time: string): moment.Moment {
    const combined = moment(`${date} ${time}`, 'YYYY-MM-DD hh:mm A');
    return combined;
  }

  /**
   * Converts a UTC date string to the user's local timezone.
   * @param date The UTC date string.
   * @returns The date string converted to the local timezone.
   */
  public static utcToLocal(date: string): string {
    return moment.utc(date).local().format();
  }

  /**
   * Converts a 12-hour time string to a 24-hour format.
   * @param time12hr The 12-hour time string (e.g., "01:30 PM").
   * @returns The 24-hour time string (e.g., "13:30").
   */
  public static convert12To24Hours(time12hr: string): string {
    const convertedTime = moment(time12hr, 'h:mm A').format('HH:mm');
    return convertedTime;
  }

  /**
   * Converts a 24-hour time string to a 12-hour format.
   * @param time24hr The 24-hour time string (e.g., "13:30").
   * @returns The 12-hour time string (e.g., "01:30 pm").
   */
  public static convert24To12Hours(time24hr: string): string {
    const convertedTime = moment(time24hr, 'HH:mm').format('hh:mm a');
    return convertedTime;
  }

  /**
   * Extracts the hour in 24-hour format from a time string.
   * @param time24hr The time string (e.g., "13:30").
   * @returns The hour as a string (e.g., "13").
   *
   * @remarks
   * This function is **redundant** as `convert12To24Hours` returns a 24-hour time string, and you can just split the string to get the hour.
   * For example: `moment("1:30 PM", "h:mm A").format("HH")` would also work.
   */
  public static get24hourformat(time24hr: string): string {
    const convertedTime = moment(time24hr, 'HH:mm A').format('HH');
    return convertedTime;
  }

  /**
   * Extracts the time from a date-time string and converts it to a 12-hour format.
   * @param dateTime The date-time string.
   * @returns The 12-hour time string (e.g., "01:30 pm").
   */
  public static convertDateTo12Hours(dateTime: string): string {
    const convertedTime = moment(dateTime).format('hh:mm a');
    return convertedTime;
  }

  /**
   * Returns a date string with the full month name.
   * @param fullDate The date or date string.
   * @returns The formatted date string (e.g., "August 28, 2023").
   */
  public static getMonthInText(fullDate: string | Date): string {
    return moment(fullDate).format('MMMM D, YYYY');
  }

  /**
   * Rounds a Date object to the nearest five minutes.
   * @param date The Date object to round.
   * @returns The rounded Date object.
   */
  public static roundToNearestFiveMinutes(date: Date): Date {
    const minutes = date.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 5) * 5;
    if (roundedMinutes === 60) {
      date.setHours(date.getHours() + 1);
      date.setMinutes(0);
    } else {
      date.setMinutes(roundedMinutes);
    }
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }

  /**
   * Rounds a time string to the nearest five minutes.
   * @param time The time string in 'HH:mm' format.
   * @returns The rounded time string in 'HH:mm' format.
   */
  public static roundUpToNearestFiveMinutes(time: string): string {
    const [hoursStr, minutesStr] = time.split(':');
    let hours = parseInt(hoursStr, 10);
    let minutes = parseInt(minutesStr, 10);
    const roundedMinutes = Math.ceil(minutes / 5) * 5;

    if (roundedMinutes === 60) {
      hours += 1;
      minutes = 0;
    } else {
      minutes = roundedMinutes;
    }

    if (hours === 24) {
      hours = 0;
    }

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  }

  /**
   * Parses a date string and returns a Date object.
   * @param date The date string, Date object, or null/undefined.
   * @returns The parsed Date object or null if parsing fails.
   */
  public static parserDate(
    date: string | Date | null | undefined
  ): Date | null {
    if (!date) return null;
    const parsedDate = moment(date, moment.ISO_8601, true);
    return parsedDate.isValid() ? parsedDate.toDate() : null;
  }

  /**
   * Formats a date string to an ISO string by setting the time to the current local time.
   * @param date The date string.
   * @returns The ISO 8601 date string with local time.
   *
   * @remarks
   * This function is **problematic**. The `toISOString()` method always returns a UTC time string,
   * regardless of the local time you set on the Date object, which can cause date shifts.
   * This is likely not the desired behavior and could lead to bugs. It's better to use Moment.js
   * or another robust library function that handles timezone conversions explicitly.
   */
  public static datePayload(date: string | null | undefined): string | null {
    if (!date) return null;
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const selectedDate: Date = new Date(date);
    selectedDate.setHours(currentHours);
    selectedDate.setMinutes(currentMinutes);
    return selectedDate.toISOString();
  }

  /**
   * Returns the current time in 'HH:mm' format (24-hour clock).
   * @returns The formatted time string (e.g., "10:30").
   */
  public static getHoursMinutes(): string {
    const currentDate = new Date();
    return moment(currentDate).format('HH:mm');
  }
}