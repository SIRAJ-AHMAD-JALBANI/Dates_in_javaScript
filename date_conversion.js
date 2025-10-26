const currentDate = new Date()
const currentDateFormat = `Current Date and Time: ${currentDate}`
console.log(currentDateFormat)

function formatDateMMDDYYYY(currentDate){
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${date}/${year}`
}

function formatDateLong(currentDate){
    const month = currentDate.getMonth() ;
    const monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December']
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  return `Formatted Date (Month Day, Year): ${monthArr[month]} ${date}, ${year}`
}
console.log(formatDateLong(currentDate))