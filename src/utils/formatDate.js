function formatDate(inputDate) {
    const date = new Date(inputDate);

    // Array of month names
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Array of day names
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    // Extract day, month, year and day of the week
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = dayNames[date.getDay()];

    // Format the date string
    return `${day} ${month} ${year} (${dayOfWeek})`;
}




export default formatDate;