export const getDaysInMonthsAndDays = (days) => {
    const daysInCurrentMonth = () => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    }
    const months = Math.floor(days / daysInCurrentMonth());
    const remainingDays = Math.floor(days % daysInCurrentMonth());

    return {
        months: months,
        remainingDays: remainingDays
    };
}