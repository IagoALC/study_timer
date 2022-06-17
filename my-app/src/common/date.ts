export function HoursToSeconds(time: string): string {
    const [hours, minutes, seconds] = time.split(':');
    const second = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds);
    return second.toString();
}

export function secondsToHours(time: number): any {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesFirst, minutesSecond] = minutes.toString().padStart(2, '0');
    const [secondsFirst, secondsSecond] = seconds.toString().padStart(2, '0');
    return [minutesFirst, minutesSecond, secondsFirst, secondsSecond];
}