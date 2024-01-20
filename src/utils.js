export function convertDateString(inputDateString) {
  const inputDate = new Date(inputDateString);

  if (isNaN(inputDate.getTime())) {
    return null;
  }

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getReadableTime(inputDateString) {
  const inputDate = new Date(inputDateString);

  if (isNaN(inputDate.getTime())) {
    return null;
  }

  const options = { hour: "numeric", minute: "numeric", hour12: true };
  const readableTime = inputDate.toLocaleTimeString(undefined, options);

  return readableTime;
}

export function formatToCustomString(inputDateString) {
  const inputDate = new Date(inputDateString);

  if (isNaN(inputDate.getTime())) {
    return null;
  }

  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  const formattedString = inputDate.toLocaleDateString(undefined, options);

  return formattedString;
}

