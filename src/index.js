module.exports = function toReadable(number) {
  let textNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  let textNumberDecimal = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let textNumberTen = ['ten', 'twenty', 'thirty', 'forty', 'fifty',  'sixty', 'seventy', 'eighty', 'ninety']
  let textNumberHundred = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']

  switch (number) {
    case 0:
      return `${textNumber[0]}`;
      case 1:
      return `${textNumber[1]}`;
     case 2:
      return `${textNumber[2]}`;
     case 3:
      return `${textNumber[3]}`;
     case 4:
      return `${textNumber[4]}`;
     case 5:
      return `${textNumber[5]}`;
     case 6:
      return `${textNumber[6]}`;
     case 7:
      return `${textNumber[7]}`;
     case 8:
      return `${textNumber[8]}`;
     case 9:
      return `${textNumber[9]}`;
     case 10:
      return `${textNumberTen[0]}`;
     case 11:
      return `${textNumberDecimal[0]}`;
     case 12:
      return `${textNumberDecimal[1]}`;
     case 13:
      return `${textNumberDecimal[2]}`;
     case 14:
      return `${textNumberDecimal[3]}`;
     case 15:
      return `${textNumberDecimal[4]}`;
     case 16:
      return `${textNumberDecimal[5]}`;
     case 17:
      return `${textNumberDecimal[6]}`;
     case 18:
      return `${textNumberDecimal[7]}`;
     case 19:
      return `${textNumberDecimal[8]}`;
     case 20:
      return `${textNumberTen[1]}`;
     case 30:
      return `${textNumberTen[2]}`;
     case 40:
      return `${textNumberTen[3]}`;
     case 50:
      return `${textNumberTen[4]}`;
     case 60:
      return `${textNumberTen[5]}`;
     case 70:
      return `${textNumberTen[6]}`;
     case 80:
      return `${textNumberTen[7]}`;
     case 90:
      return `${textNumberTen[8]}`;
     case 100:
      return `${textNumberHundred[0]}`;
     case 200:
      return `${textNumberHundred[1]}`;
     case 300:
      return `${textNumberHundred[2]}`;
     case 400:
      return `${textNumberHundred[3]}`;
     case 500:
      return `${textNumberHundred[4]}`;
     case 600:
      return `${textNumberHundred[5]}`;
     case 700:
      return `${textNumberHundred[6]}`;
     case 800:
      return `${textNumberHundred[7]}`;
     case 900:
      return `${textNumberHundred[8]}`;
     case 21:
      return `${textNumberTen[1]}-${textNumber[1]}`;
     case 22:
      return `${textNumberTen[1]}-${textNumber[2]}`;
     case 33:
      return `${textNumberTen[2]}-${textNumber[3]}`;
     case 44:
      return `${textNumberTen[3]}-${textNumber[4]}`;
     case 55:
      return `${textNumberTen[4]}-${textNumber[5]}`;
     case 66:
      return `${textNumberTen[5]}-${textNumber[6]}`;
     case 77:
      return `${textNumberTen[6]}-${textNumber[7]}`;
     case 88:
      return `${textNumberTen[7]}-${textNumber[8]}`;
     case 99:
      return `${textNumberTen[8]}-${textNumber[9]}`;
     case 101:
      return `${textNumberHundred[0]} one`;
     case 102:
      return `${textNumberHundred[0]} two`;
     case 103:
      return `${textNumberHundred[0]} three`;
     case 104:
      return `${textNumberHundred[0]} four`;
     case 105:
      return `${textNumberHundred[0]} five`;
     case 106:
      return `${textNumberHundred[0]} six`;
     case 107:
      return `${textNumberHundred[0]} seven`;
     case 108:
      return `${textNumberHundred[0]} eight`;
     case 109:
      return `${textNumberHundred[0]} nine`;
     case 110:
      return `${textNumberHundred[0]} ten`;
     case 111:
      return `${textNumberHundred[0]} eleven`;
     case 112:
      return `${textNumberHundred[0]} twelve`;
     case 113:
      return `${textNumberHundred[0]} thirteen`;
     case 114:
      return `${textNumberHundred[0]} fourteen`;
     case 115:
      return `${textNumberHundred[0]} fifteen`;
     case 116:
      return `${textNumberHundred[0]} sixteen`;
     case 117:
      return `${textNumberHundred[0]} seventeen`;
     case 118:
      return `${textNumberHundred[0]} eighteen`;
     case 119:
      return `${textNumberHundred[0]} nineteen`;
     case 120:
      return `${textNumberHundred[0]} twenty`;
     case 121:
      return `${textNumberHundred[0]} twenty-one`;
     case 122:
      return `${textNumberHundred[0]} twenty-two`;
     case 123:
      return `${textNumberHundred[0]} twenty-three`;
     case 124:
      return `${textNumberHundred[0]} twenty-four`;
     case 125:
      return `${textNumberHundred[0]} twenty-five`;
     case 126:
      return `${textNumberHundred[0]} twenty-six`;
     case 127:
      return `${textNumberHundred[0]} twenty-seven`;
     case 128:
      return `${textNumberHundred[0]} twenty-eight`;
     case 129:
      return `${textNumberHundred[0]} twenty-nine`;
     case 130:
      return `${textNumberHundred[0]} thirty`;
     case 131:
      return `${textNumberHundred[0]} thirty-one`;
     case 132:
      return `${textNumberHundred[0]} thirty-two`;
     case 133:
      return `${textNumberHundred[0]} thirty-three`;
     case 134:
      return `${textNumberHundred[0]} thirty-four`;
     case 135:
      return `${textNumberHundred[0]} thirty-five`;
     case 136:
      return `${textNumberHundred[0]} thirty-six`;
     case 137:
      return `${textNumberHundred[0]} thirty-seven`;
     case 138:
      return `${textNumberHundred[0]} thirty-eight`;
     case 139:
      return `${textNumberHundred[0]} thirty-nine`;
     case 140:
      return `${textNumberHundred[0]} forty`;
     case 141:
      return `${textNumberHundred[0]} forty-one`;
     case 142:
      return `${textNumberHundred[0]} forty-two`;
     case 143:
      return `${textNumberHundred[0]} forty-three`;
     case 144:
      return `${textNumberHundred[0]} forty-four`;
     case 145:
      return `${textNumberHundred[0]} forty-five`;
     case 146:
      return `${textNumberHundred[0]} forty-six`;
     case 147:
      return `${textNumberHundred[0]} forty-seven`;
