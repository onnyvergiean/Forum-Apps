export default function postedAt(date) {
  const dateNow = new Date();
  const datePosted = new Date(date);
  const dateDifferent = dateNow - datePosted;
  const dateDifferentInDays = Math.floor(dateDifferent / (1000 * 3600 * 24));
  const dateDifferentInHours = Math.floor(dateDifferent / (1000 * 3600));
  const dateDifferentInMinutes = Math.floor(dateDifferent / (1000 * 60));
  const dateDifferentInSeconds = Math.floor(dateDifferent / 1000);

  if (dateDifferentInDays > 0) {
    return `${Math.floor(dateDifferentInDays)} hari lalu`;
  }
  if (dateDifferentInHours > 0) {
    return `${Math.floor(dateDifferentInHours)} jam lalu`;
  }
  if (dateDifferentInMinutes > 0) {
    return `${Math.floor(dateDifferentInMinutes)} menit lalu`;
  }
  if (dateDifferentInSeconds > 0) {
    return `${Math.floor(dateDifferentInSeconds)} detik lalu`;
  }
  return 'baru saja';
}
