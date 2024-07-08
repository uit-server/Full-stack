function isFutureDate(inputDate) {
    const input = new Date(inputDate);
    const today = new Date();

    // Compare the input date with today's date
    return input < today;
}

export default isFutureDate;