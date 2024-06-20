function dateConvert(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);
  
    // Extract day, month, and year from the Date object
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();
  
    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Format day with leading zero if needed
    const formattedDay = day < 10 ? `0${day}` : day;
  
    // Get the month name
    const formattedMonth = monthNames[month];
  
    // Return the formatted date string
    return `${formattedDay} ${formattedMonth} ${year}`;
  }

export default dateConvert;