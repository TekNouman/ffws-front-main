import dayjs from 'dayjs';
import { useTimer } from 'react-timer-hook';

export const draftStartDate = (date: string) =>
  dayjs(new Date(date).getTime()).format('ddd, MMM DD [at] hh:MM A');

export const useDateTimer = (date: string) =>
  useTimer({
    expiryTimestamp: new Date(date).getTime(),
  });
