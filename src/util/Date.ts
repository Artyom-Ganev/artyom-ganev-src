/**
 * Date utilities
 */
export default class DateUtil {

    /**
     *
     * @param dateStr
     */
    public static parseDateFromString(dateStr: string): Date | null {
        if (!dateStr) {
            return null;
        }
        const arr = dateStr.split('-');
        const year = arr[0];
        const month = arr[1];
        const day = arr[2] || "1";
        if (!year || !month) {
            return null;
        }
        return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
    }
}