export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
  return formattedDate;
};

export const formatDatePikertoSQL = (originalDate) => {
  // const originalDate = new Date("Fri Mar 17 2023 00:00:00 GMT+0700 (Giờ Đông Dương)");

  const year = originalDate.getFullYear();
  const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
  const date = originalDate.getDate().toString().padStart(2, "0");
  const hours = originalDate.getHours().toString().padStart(2, "0");
  const minutes = originalDate.getMinutes().toString().padStart(2, "0");
  const seconds = originalDate.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  // "2023-03-17 00:00:00"

  return formattedDate;
};

export const formatSQLtoDatePicker = (formattedDate) => {
  // const formattedDate = "2023-04-03 16:59:20";

  const dateArray = formattedDate.split(" ");
  const datePart = dateArray[0].split("-");
  const timePart = dateArray[1].split(":");

  const year = parseInt(datePart[0], 10);
  const month = parseInt(datePart[1], 10) - 1;
  const day = parseInt(datePart[2], 10);
  const hour = parseInt(timePart[0], 10);
  const minute = parseInt(timePart[1], 10);
  const second = parseInt(timePart[2], 10);

  const originalDate = new Date(year, month, day, hour, minute, second);

  return originalDate;
};
