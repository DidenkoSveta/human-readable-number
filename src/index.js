function toReadable(number) {
  let readable;
  switch (number) {
    case 0:
      readable = 'zero';
      break;
    case 1:
      readable = 'one';
      break;
    case 2:
      readable = 'two';
      break;
    case 3:
      readable = 'three';
      break;
    case 4:
      readable = 'four';
      break;
    case 5:
      readable = 'five';
      break;
    case 6:
      readable = 'six';
      break;
    case 7:
      readable = 'seven';
      break;
    case 8:
      readable = 'eight';
      break;
    case 9:
      readable = 'nine';
      break;
    case 10:
      readable = 'ten';
      break;
    case 11:
      readable = 'eleven';
      break;
    case 12:
      readable = 'twelve';
      break;
    case 13:
      readable = 'thirteen';
      break;
    case 14:
      readable = 'fourteen';
      break;
    case 15:
      readable = 'fifteen';
      break;
    case 16:
      readable = 'sixteen';
      break;
    case 17:
      readable = 'seventeen';
      break;
    case 18:
      readable = 'eighteen';
      break;
    case 19:
      readable = 'nineteen';
      break;
    case 20:
      readable = 'twenty';
      break;
    case 30:
      readable = 'thirty';
      break;
    case 40:
      readable = 'forty';
      break;
    case 50:
      readable = 'fifty';
      break;
    case 60:
      readable = 'sixty';
      break;
    case 70:
      readable = 'seventy';
      break;
    case 80:
      readable = 'eighty';
      break;
    case 90:
      readable = 'ninety';
      break;
    default:
      if (number < 100) {
        readable = toReadable(number - number % 10) + '-' + toReadable(number % 10);
      } else if (number < 1000) {
        readable = toReadable(number - number % 100) + ' ' + toReadable(number % 100);
      } else if (number < 1000000) {
        readable = toReadable(number - number % 1000) + ' ' + toReadable(number % 1000);
      } else if (number < 1000000000) {
        readable = toReadable(number - number % 1000000) + ' ' + toReadable(number % 1000000);
      } else if (number < 1000000000000) {
        readable = toReadable(number - number % 1000000000) + ' ' + toReadable(number % 1000000000);
      } else if (number < 1000000000000000) {
        readable = toReadable(number - number % 1000000000000) + ' ' + toReadable(number % 1000000000000);
      } else if (number < 1000000000000000000) {
        readable = toReadable(number - number % 1000000000000000) + ' ' + toReadable(number % 1000000000000000);
      }
  }
  return readable;
}
module.exports = toReadable;
