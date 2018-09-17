// createdAt display helper
export function timeSince(timeStamp) {
  const now = new Date();
  const secondsPast = (now.getTime() - new Date(timeStamp).getTime()) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast, 10) + 's ago';
  }

  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60, 10) + 'm ago';
  }

  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600, 10) + 'h ago';
  }

  if (secondsPast > 86400) {
    const day = new Date(timeStamp).getDate();
    const month = new Date(timeStamp).toDateString().match(/ [a-zA-Z]*/)[0].replace(" ", "");
    const year = new Date(timeStamp).getFullYear() === now.getFullYear() ? "" : " " + new Date(timeStamp).getFullYear();

    return day + " " + month + year;
  }
}
