export function formatDate(ISODate) {
  const date = new Date(ISODate).toLocaleDateString();
  const time = new Date(ISODate).toLocaleTimeString();
  const day = new Date(ISODate).toLocaleDateString("en-US", {
    weekday: "long",
  });
  return {
    date,
    time,
    day,
  };
  // return `${formattedDayOfWeek}, ${formattedDate} at ${formattedTime}`;
}
