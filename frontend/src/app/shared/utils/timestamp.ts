export function timestamp(): string {
  let now = new Date(),
    year_ = now.getFullYear(),
    month_ = (now.getMonth() + 1),
    day_ = now.getDate(),
    seconds_ = now.getSeconds(),
    minutes_ = now.getMinutes(),
    hours_ = now.getHours();

  let year = year_,
    month = month_ > 9 ? month_.toString() : "0" + month_,
    day = day_ > 9 ? day_.toString() : "0" + day_,
  hours = hours_ > 9 ? hours_.toString() : "0" + hours_,
  minutes = minutes_ > 9 ? minutes_.toString() : "0" + minutes_,
  seconds = seconds_ > 9 ? seconds_.toString() : "0" + seconds_;
  return year + month + day + hours + minutes + seconds;
}
