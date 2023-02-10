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
    case 23:
      return `${textNumberTen[1]}-${textNumber[3]}`;
    case 24:
      return `${textNumberTen[1]}-${textNumber[4]}`;
    case 25:
      return `${textNumberTen[1]}-${textNumber[5]}`;
    case 26:
      return `${textNumberTen[1]}-${textNumber[6]}`;
    case 27:
      return `${textNumberTen[1]}-${textNumber[7]}`;
    case 28:
      return `${textNumberTen[1]}-${textNumber[8]}`;
    case 29:
      return `${textNumberTen[1]}-${textNumber[9]}`;
    case 31:
      return `${textNumberTen[2]}-${textNumber[1]}`;
    case 32:
      return `${textNumberTen[2]}-${textNumber[2]}`;
    case 33:
      return `${textNumberTen[2]}-${textNumber[3]}`;
    case 34:
      return `${textNumberTen[2]}-${textNumber[4]}`;
    case 35:
      return `${textNumberTen[2]}-${textNumber[5]}`;
    case 36:
      return `${textNumberTen[2]}-${textNumber[6]}`;
    case 37:
      return `${textNumberTen[2]}-${textNumber[7]}`;
    case 38:
      return `${textNumberTen[2]}-${textNumber[8]}`;
    case 39:
      return `${textNumberTen[2]}-${textNumber[9]}`;
    case 41:
      return `${textNumberTen[3]}-${textNumber[1]}`;
    case 42:
      return `${textNumberTen[3]}-${textNumber[2]}`;
    case 43:
      return `${textNumberTen[3]}-${textNumber[3]}`;
    case 44:
      return `${textNumberTen[3]}-${textNumber[4]}`;
    case 45:
      return `${textNumberTen[3]}-${textNumber[5]}`;
    case 46:
      return `${textNumberTen[3]}-${textNumber[6]}`;
    case 47:
      return `${textNumberTen[3]}-${textNumber[7]}`;
    case 48:
      return `${textNumberTen[3]}-${textNumber[8]}`;
    case 49:
      return `${textNumberTen[3]}-${textNumber[9]}`;
    case 51:
      return `${textNumberTen[4]}-${textNumber[1]}`;
    case 52:
      return `${textNumberTen[4]}-${textNumber[2]}`;
    case 53:
      return `${textNumberTen[4]}-${textNumber[3]}`;
    case 54:
      return `${textNumberTen[4]}-${textNumber[4]}`;
    case 55:
      return `${textNumberTen[4]}-${textNumber[5]}`;
    case 56:
      return `${textNumberTen[4]}-${textNumber[6]}`;
    case 57:
      return `${textNumberTen[4]}-${textNumber[7]}`;
    case 58:
      return `${textNumberTen[4]}-${textNumber[8]}`;
    case 59:
      return `${textNumberTen[4]}-${textNumber[9]}`;
    case 61:
      return `${textNumberTen[5]}-${textNumber[1]}`;
    case 62:
      return `${textNumberTen[5]}-${textNumber[2]}`;
    case 63:
      return `${textNumberTen[5]}-${textNumber[3]}`;
    case 64:
      return `${textNumberTen[5]}-${textNumber[4]}`;
    case 65:
      return `${textNumberTen[5]}-${textNumber[5]}`;
    case 66:
      return `${textNumberTen[5]}-${textNumber[6]}`;
    case 67:
      return `${textNumberTen[5]}-${textNumber[7]}`;
    case 68:
      return `${textNumberTen[5]}-${textNumber[8]}`;
    case 69:
      return `${textNumberTen[5]}-${textNumber[9]}`;
    case 71:
      return `${textNumberTen[6]}-${textNumber[1]}`;
    case 72:
      return `${textNumberTen[6]}-${textNumber[2]}`;
    case 73:
      return `${textNumberTen[6]}-${textNumber[3]}`;
    case 74:
      return `${textNumberTen[6]}-${textNumber[4]}`;
    case 75:
      return `${textNumberTen[6]}-${textNumber[5]}`;
    case 76:
      return `${textNumberTen[6]}-${textNumber[6]}`;
    case 77:
      return `${textNumberTen[6]}-${textNumber[7]}`;
    case 78:
      return `${textNumberTen[6]}-${textNumber[8]}`;
    case 79:
      return `${textNumberTen[6]}-${textNumber[9]}`;
    case 81:
      return `${textNumberTen[7]}-${textNumber[1]}`;
    case 82:
      return `${textNumberTen[7]}-${textNumber[2]}`;
    case 83:
      return `${textNumberTen[7]}-${textNumber[3]}`;
    case 84:
      return `${textNumberTen[7]}-${textNumber[4]}`;
    case 85:
      return `${textNumberTen[7]}-${textNumber[5]}`;
    case 86:
      return `${textNumberTen[7]}-${textNumber[6]}`;
    case 87:
      return `${textNumberTen[7]}-${textNumber[7]}`;
    case 88:
      return `${textNumberTen[7]}-${textNumber[8]}`;
    case 89:
      return `${textNumberTen[7]}-${textNumber[9]}`;
    case 91:
      return `${textNumberTen[8]}-${textNumber[1]}`;
    case 92:
      return `${textNumberTen[8]}-${textNumber[2]}`;
    case 93:
      return `${textNumberTen[8]}-${textNumber[3]}`;
    case 94:
      return `${textNumberTen[8]}-${textNumber[4]}`;
    case 95:
      return `${textNumberTen[8]}-${textNumber[5]}`;
    case 96:
      return `${textNumberTen[8]}-${textNumber[6]}`;
    case 97:
      return `${textNumberTen[8]}-${textNumber[7]}`;
    case 98:
      return `${textNumberTen[8]}-${textNumber[8]}`;
    case 99:
      return `${textNumberTen[8]}-${textNumber[9]}`;
    case 101:
      return `${textNumberHundred[0]} and ${textNumber[1]}`;
    case 102:
      return `${textNumberHundred[0]} and ${textNumber[2]}`;
    case 103:
      return `${textNumberHundred[0]} and ${textNumber[3]}`;
    case 104:
      return `${textNumberHundred[0]} and ${textNumber[4]}`;
    case 105:
      return `${textNumberHundred[0]} and ${textNumber[5]}`;
    case 106:
      return `${textNumberHundred[0]} and ${textNumber[6]}`;
    case 107:
      return `${textNumberHundred[0]} and ${textNumber[7]}`;
    case 108:
      return `${textNumberHundred[0]} and ${textNumber[8]}`;
    case 109:
      return `${textNumberHundred[0]} and ${textNumber[9]}`;
    case 110:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}`;
    case 111:
      return `${textNumberHundred[0]} and ${textNumberDecimal[0]}`;
    case 112:
      return `${textNumberHundred[0]} and ${textNumberDecimal[1]}`;
    case 113:
      return `${textNumberHundred[0]} and ${textNumberDecimal[2]}`;
    case 114:
      return `${textNumberHundred[0]} and ${textNumberDecimal[3]}`;
    case 115:
      return `${textNumberHundred[0]} and ${textNumberDecimal[4]}`;
    case 116:
      return `${textNumberHundred[0]} and ${textNumberDecimal[5]}`;
    case 117:
      return `${textNumberHundred[0]} and ${textNumberDecimal[6]}`;
    case 118:
      return `${textNumberHundred[0]} and ${textNumberDecimal[7]}`;
    case 119:
      return `${textNumberHundred[0]} and ${textNumberDecimal[8]}`;
    case 120:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}`;
    case 121:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[1]}`;
    case 122:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[2]}`;
    case 123:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[3]}`;
    case 124:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[4]}`;
    case 125:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[5]}`;
    case 126:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[6]}`;
    case 127:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[7]}`;
    case 128:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[8]}`;
    case 129:
      return `${textNumberHundred[0]} and ${textNumberTen[1]}-${textNumber[9]}`;
    case 130:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}`;   
              case 131:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[1]}`;
    case 132:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[2]}`;
    case 133:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[3]}`;
    case 134:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[4]}`;
    case 135:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[5]}`;
    case 136:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[6]}`;
    case 137:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[7]}`;
    case 138:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[8]}`;
    case 139:
      return `${textNumberHundred[0]} and ${textNumberTen[2]}-${textNumber[9]}`;
    case 140:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[0]}`;
    case 141:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[1]}`;
    case 142:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[2]}`;
    case 143:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[3]}`;
    case 144:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[4]}`;
    case 145:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[5]}`;
    case 146:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[6]}`;
    case 147:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[7]}`;
    case 148:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[8]}`;
    case 149:
      return `${textNumberHundred[0]} and ${textNumberTen[3]}-${textNumber[9]}`;
    case 150:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[0]}`;
    case 151:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[1]}`;
    case 152:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[2]}`;
    case 153:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[3]}`;
    case 154:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[4]}`;
    case 155:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[5]}`;
    case 156:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[6]}`;
    case 157:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[7]}`;
    case 158:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[8]}`;
    case 159:
      return `${textNumberHundred[0]} and ${textNumberTen[4]}-${textNumber[9]}`;
    case 160:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[0]}`;
    case 161:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[1]}`;
    case 162:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[2]}`;
    case 163:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[3]}`;
    case 164:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[4]}`;
    case 165:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[5]}`;
    case 166:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[6]}`;
    case 167:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[7]}`;
    case 168:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[8]}`;
    case 169:
      return `${textNumberHundred[0]} and ${textNumberTen[5]}-${textNumber[9]}`;
    case 170:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[0]}`;
    case 171:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[1]}`;
    case 172:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[2]}`;
    case 173:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[3]}`;
    case 174:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[4]}`;
    case 175:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[5]}`;
    case 176:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[6]}`;
    case 177:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[7]}`;
    case 178:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[8]}`;
    case 179:
      return `${textNumberHundred[0]} and ${textNumberTen[6]}-${textNumber[9]}`;
    case 180:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[0]}`;
    case 181:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[1]}`;
    case 182:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[2]}`;
    case 183:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[3]}`;
    case 184:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[4]}`;
    case 185:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[5]}`;
    case 186:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[6]}`;
    case 187:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[7]}`;
    case 188:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[8]}`;
    case 189:
      return `${textNumberHundred[0]} and ${textNumberTen[7]}-${textNumber[9]}`;
    case 190:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[0]}`;
    case 191:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[1]}`;
    case 192:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[2]}`;
    case 193:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[3]}`;
    case 194:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[4]}`;
    case 195:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[5]}`;
    case 196:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[6]}`;
    case 197:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[7]}`;
    case 198:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[8]}`;
    case 199:
      return `${textNumberHundred[0]} and ${textNumberTen[8]}-${textNumber[9]}`;
    case 200:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[0]}`;
    case 201:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[1]}`;
    case 202:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[2]}`;
    case 203:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[3]}`;
    case 204:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[4]}`;
    case 205:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[5]}`;
    case 206:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[6]}`;
    case 207:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[7]}`;
    case 208:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[8]}`;
    case 209:
      return `${textNumberHundred[1]} and ${textNumberTen[0]}-${textNumber[9]}`;
    case 210:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[0]}`;
    case 211:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[1]}`;
    case 212:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[2]}`;
    case 213:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[3]}`;
    case 214:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[4]}`;
    case 215:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[5]}`;
    case 216:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[6]}`;
    case 217:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[7]}`;
    case 218:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[8]}`;
    case 219:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}-${textNumber[9]}`;
    case 220:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[0]}`;
    case 221:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[1]}`;
    case 222:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[2]}`;
    case 223:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[3]}`;
    case 224:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[4]}`;
    case 225:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[5]}`;
    case 226:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[6]}`;
    case 227:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[7]}`;
    case 228:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[8]}`;
    case 229:
      return `${textNumberHundred[1]} and ${textNumberTen[2]}-${textNumber[9]}`;
    case 230:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[0]}`;
              case 231:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[1]}`;
    case 232:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[2]}`;
    case 233:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[3]}`;
    case 234:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[4]}`;
    case 235:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[5]}`;
    case 236:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[6]}`;
    case 237:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[7]}`;
    case 238:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[8]}`;
    case 239:
      return `${textNumberHundred[1]} and ${textNumberTen[3]}-${textNumber[9]}`;
    case 241:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[1]}`;
    case 242:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[2]}`;
    case 243:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[3]}`;
    case 244:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[4]}`;
    case 245:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[5]}`;
    case 246:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[6]}`;
    case 247:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[7]}`;
    case 248:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[8]}`;
    case 249:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}-${textNumber[9]}`;
    case 251:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[1]}`;
    case 252:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[2]}`;
    case 253:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[3]}`;
    case 254:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[4]}`;
    case 255:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[5]}`;
    case 256:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[6]}`;
    case 257:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[7]}`;
    case 258:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[8]}`;
    case 259:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}-${textNumber[9]}`;
    case 261:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[1]}`;
    case 262:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[2]}`;
    case 263:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[3]}`;
    case 264:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[4]}`;
    case 265:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[5]}`;
    case 266:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[6]}`;
    case 267:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[7]}`;
    case 268:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[8]}`;
    case 269:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}-${textNumber[9]}`;
    case 271:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[1]}`;
    case 272:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[2]}`;
    case 273:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[3]}`;
    case 274:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[4]}`;
    case 275:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[5]}`;
    case 276:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[6]}`;
    case 277:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[7]}`;
    case 278:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[8]}`;
    case 279:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}-${textNumber[9]}`;
    case 281:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[1]}`;
    case 282:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[2]}`;
    case 283:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[3]}`;
    case 284:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[4]}`;
    case 285:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[5]}`;
    case 286:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[6]}`;
    case 287:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[7]}`;
    case 288:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[8]}`;
    case 289:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}-${textNumber[9]}`;
    case 291:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[1]}`;
    case 292:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[2]}`;
    case 293:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[3]}`;
    case 294:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[4]}`;
    case 295:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[5]}`;
    case 296:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[6]}`;
    case 297:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[7]}`;
    case 298:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[8]}`;
    case 299:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}-${textNumber[9]}`;
    case 311:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[1]}`;
    case 312:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[2]}`;
    case 313:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[3]}`;
    case 314:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[4]}`;
    case 315:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[5]}`;
    case 316:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[6]}`;
    case 317:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[7]}`;
    case 318:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[8]}`;
    case 319:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}-${textNumber[9]}`;
    case 321:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[1]}`;
    case 322:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[2]}`;
    case 323:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[3]}`;
    case 324:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[4]}`;
    case 325:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[5]}`;
    case 326:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[6]}`;
    case 327:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[7]}`;
    case 328:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[8]}`;
    case 329:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}-${textNumber[9]}`;
    case 331:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[1]}`;
    case 332:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[2]}`;
    case 333:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[3]}`;
    case 334:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[4]}`;
    case 335:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[5]}`;
    case 336:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[6]}`;
    case 337:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[7]}`;
    case 338:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[8]}`;
    case 339:
      return `${textNumberHundred[2]} and ${textNumberTen[3]}-${textNumber[9]}`;
    case 341:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[1]}`;
    case 342:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[2]}`;
    case 343:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[3]}`;
    case 344:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[4]}`;
    case 345:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[5]}`;
              case 346:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[6]}`;
    case 347:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[7]}`;
    case 348:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[8]}`;
    case 349:
      return `${textNumberHundred[2]} and ${textNumberTen[4]}-${textNumber[9]}`;
    case 351:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[1]}`;
    case 352:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[2]}`;
    case 353:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[3]}`;
    case 354:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[4]}`;
    case 355:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[5]}`;
    case 356:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[6]}`;
    case 357:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[7]}`;
    case 358:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[8]}`;
    case 359:
      return `${textNumberHundred[2]} and ${textNumberTen[5]}-${textNumber[9]}`;
    case 361:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[1]}`;
    case 362:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[2]}`;
    case 363:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[3]}`;
    case 364:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[4]}`;
    case 365:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[5]}`;
    case 366:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[6]}`;
    case 367:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[7]}`;
    case 368:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[8]}`;
    case 369:
      return `${textNumberHundred[2]} and ${textNumberTen[6]}-${textNumber[9]}`;
    case 371:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[1]}`;
    case 372:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[2]}`;
    case 373:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[3]}`;
    case 374:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[4]}`;
    case 375:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[5]}`;
    case 376:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[6]}`;
    case 377:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[7]}`;
    case 378:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[8]}`;
    case 379:
      return `${textNumberHundred[2]} and ${textNumberTen[7]}-${textNumber[9]}`;
    case 381:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[1]}`;
    case 382:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[2]}`;
    case 383:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[3]}`;
    case 384:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[4]}`;
    case 385:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[5]}`;
    case 386:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[6]}`;
    case 387:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[7]}`;
    case 388:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[8]}`;
    case 389:
      return `${textNumberHundred[2]} and ${textNumberTen[8]}-${textNumber[9]}`;
    case 391:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[1]}`;
    case 392:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[2]}`;
    case 393:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[3]}`;
    case 394:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[4]}`;
    case 395:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[5]}`;
    case 396:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[6]}`;
    case 397:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[7]}`;
    case 398:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[8]}`;
    case 399:
      return `${textNumberHundred[2]} and ${textNumberTen[9]}-${textNumber[9]}`;
    case 401:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[1]}`;
    case 402:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[2]}`;
    case 403:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[3]}`;
    case 404:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[4]}`;
    case 405:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[5]}`;
    case 406:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[6]}`;
    case 407:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[7]}`;
    case 408:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[8]}`;
    case 409:
      return `${textNumberHundred[3]} and ${textNumberTen[0]}-${textNumber[9]}`;
    case 411:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[1]}`;
    case 412:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[2]}`;
    case 413:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[3]}`;
    case 414:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[4]}`;
    case 415:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[5]}`;
    case 416:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[6]}`;
    case 417:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[7]}`;
    case 418:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[8]}`;
    case 419:
      return `${textNumberHundred[3]} and ${textNumberTen[1]}-${textNumber[9]}`;
    case 421:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[1]}`;
    case 422:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[2]}`;
    case 423:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[3]}`;
    case 424:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[4]}`;
    case 425:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[5]}`;
    case 426:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[6]}`;
    case 427:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[7]}`;
    case 428:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[8]}`;
    case 429:
      return `${textNumberHundred[3]} and ${textNumberTen[2]}-${textNumber[9]}`;
    case 431:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[1]}`;
    case 432:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[2]}`;
    case 433:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[3]}`;
    case 434:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[4]}`;
    case 435:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[5]}`;
    case 436:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[6]}`;
    case 437:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[7]}`;
    case 438:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[8]}`;
    case 439:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[9]}`;
    case 441:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[1]}`;
    case 442:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[2]}`;
    case 443:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[3]}`;
    case 444:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[4]}`;
    case 445:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[5]}`;
    case 446:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[6]}`;
    case 447:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[7]}`;
    case 448:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[8]}`;
    case 449:
      return `${textNumberHundred[3]} and ${textNumberTen[4]}-${textNumber[9]}`;
    case 451:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[1]}`;
              case 452:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[2]}`;
    case 453:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[3]}`;
    case 454:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[4]}`;
    case 455:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[5]}`;
    case 456:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[6]}`;
    case 457:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[7]}`;
    case 458:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[8]}`;
    case 459:
      return `${textNumberHundred[3]} and ${textNumberTen[5]}-${textNumber[9]}`;
    case 460:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[0]}`;
    case 461:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[1]}`;
    case 462:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[2]}`;
    case 463:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[3]}`;
    case 464:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[4]}`;
    case 465:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[5]}`;
    case 466:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[6]}`;
    case 467:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[7]}`;
    case 468:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[8]}`;
    case 469:
      return `${textNumberHundred[3]} and ${textNumberTen[6]}-${textNumber[9]}`;
    case 470:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[0]}`;
    case 471:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[1]}`;
    case 472:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[2]}`;
    case 473:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[3]}`;
    case 474:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[4]}`;
    case 475:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[5]}`;
    case 476:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[6]}`;
    case 477:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[7]}`;
    case 478:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[8]}`;
    case 479:
      return `${textNumberHundred[3]} and ${textNumberTen[7]}-${textNumber[9]}`;
    case 480:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[0]}`;
    case 481:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[1]}`;
    case 482:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[2]}`;
    case 483:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[3]}`;
    case 484:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[4]}`;
    case 485:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[5]}`;
    case 486:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[6]}`;
    case 487:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[7]}`;
    case 488:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[8]}`;
    case 489:
      return `${textNumberHundred[3]} and ${textNumberTen[8]}-${textNumber[9]}`;
    case 490:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[0]}`;
    case 491:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[1]}`;
    case 492:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[2]}`;
    case 493:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[3]}`;
    case 494:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[4]}`;
    case 495:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[5]}`;
    case 496:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[6]}`;
    case 497:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[7]}`;
    case 498:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[8]}`;
    case 499:
      return `${textNumberHundred[3]} and ${textNumberTen[9]}-${textNumber[9]}`;
    case 500:
      return `${textNumberHundred[4]}`;
    case 501:
      return `${textNumberHundred[4]} and ${textNumber[1]}`;
    case 502:
      return `${textNumberHundred[4]} and ${textNumber[2]}`;
    case 503:
      return `${textNumberHundred[4]} and ${textNumber[3]}`;
    case 504:
      return `${textNumberHundred[4]} and ${textNumber[4]}`;
    case 505:
      return `${textNumberHundred[4]} and ${textNumber[5]}`;
    case 506:
      return `${textNumberHundred[4]} and ${textNumber[6]}`;
    case 507:
      return `${textNumberHundred[4]} and ${textNumber[7]}`;
    case 508:
      return `${textNumberHundred[4]} and ${textNumber[8]}`;
    case 509:
      return `${textNumberHundred[4]} and ${textNumber[9]}`;
    case 510:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[0]}`;
    case 511:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[1]}`;
    case 512:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[2]}`;
    case 513:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[3]}`;
    case 514:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[4]}`;
    case 515:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[5]}`;
    case 516:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[6]}`;
    case 517:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[7]}`;
    case 518:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[8]}`;
    case 519:
      return `${textNumberHundred[4]} and ${textNumberTen[0]}-${textNumber[9]}`;
    case 520:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[0]}`;
    case 521:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[1]}`;
    case 522:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[2]}`;
    case 523:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[3]}`;
    case 524:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[4]}`;
    case 525:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[5]}`;
    case 526:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[6]}`;
    case 527:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[7]}`;
    case 528:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[8]}`;
    case 529:
      return `${textNumberHundred[4]} and ${textNumberTen[1]}-${textNumber[9]}`;
    case 530:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[0]}`;
    case 531:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[1]}`;
    case 532:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[2]}`;
    case 533:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[3]}`;
    case 534:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[4]}`;
    case 535:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[5]}`;
    case 536:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[6]}`;
    case 537:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[7]}`;
    case 538:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[8]}`;
    case 539:
      return `${textNumberHundred[4]} and ${textNumberTen[2]}-${textNumber[9]}`;
    case 540:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[0]}`;
    case 541:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[1]}`;
    case 542:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[2]}`;
    case 543:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[3]}`;
    case 544:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[4]}`;
    case 545:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[5]}`;
    case 546:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[6]}`;
    case 547:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[7]}`;
    case 548:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[8]}`;
    case 549:
      return `${textNumberHundred[4]} and ${textNumberTen[3]}-${textNumber[9]}`;
    case 550:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[0]}`;
          case 551:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[1]}`;
    case 552:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[2]}`;
    case 553:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[3]}`;
    case 554:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[4]}`;
    case 555:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[5]}`;
    case 556:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[6]}`;
    case 557:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[7]}`;
    case 558:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[8]}`;
    case 559:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[9]}`;
    case 560:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[0]}`;
    case 561:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[1]}`;
    case 562:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[2]}`;
    case 563:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[3]}`;
    case 564:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[4]}`;
    case 565:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[5]}`;
    case 566:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[6]}`;
    case 567:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[7]}`;
    case 568:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[8]}`;
    case 569:
      return `${textNumberHundred[4]} and ${textNumberTen[5]}-${textNumber[9]}`;
    case 570:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[0]}`;
    case 571:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[1]}`;
    case 572:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[2]}`;
    case 573:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[3]}`;
    case 574:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[4]}`;
    case 575:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[5]}`;
    case 576:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[6]}`;
    case 577:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[7]}`;
    case 578:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[8]}`;
    case 579:
      return `${textNumberHundred[4]} and ${textNumberTen[6]}-${textNumber[9]}`;
    case 580:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[0]}`;
    case 581:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[1]}`;
    case 582:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[2]}`;
    case 583:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[3]}`;
    case 584:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[4]}`;
    case 585:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[5]}`;
    case 586:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[6]}`;
    case 587:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[7]}`;
    case 588:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[8]}`;
    case 589:
      return `${textNumberHundred[4]} and ${textNumberTen[7]}-${textNumber[9]}`;
    case 590:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[0]}`;
    case 591:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[1]}`;
    case 592:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[2]}`;
    case 593:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[3]}`;
    case 594:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[4]}`;
    case 595:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[5]}`;
    case 596:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[6]}`;
    case 597:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[7]}`;
    case 598:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[8]}`;
    case 599:
      return `${textNumberHundred[4]} and ${textNumberTen[8]}-${textNumber[9]}`;
    case 600:
      return `${textNumberHundred[5]}-${textNumber[0]}`;
    case 601:
      return `${textNumberHundred[5]}-${textNumber[1]}`;
    case 602:
      return `${textNumberHundred[5]}-${textNumber[2]}`;
    case 603:
      return `${textNumberHundred[5]}-${textNumber[3]}`;
    case 604:
      return `${textNumberHundred[5]}-${textNumber[4]}`;
    case 605:
      return `${textNumberHundred[5]}-${textNumber[5]}`;
    case 606:
      return `${textNumberHundred[5]}-${textNumber[6]}`;
    case 607:
      return `${textNumberHundred[5]}-${textNumber[7]}`;
    case 608:
      return `${textNumberHundred[5]}-${textNumber[8]}`;
    case 609:
      return `${textNumberHundred[5]}-${textNumber[9]}`;
    case 610:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[0]}`;
    case 611:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[1]}`;
    case 612:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[2]}`;
    case 613:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[3]}`;
    case 614:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[4]}`;
    case 615:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[5]}`;
    case 616:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[6]}`;
    case 617:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[7]}`;
    case 618:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[8]}`;
    case 619:
      return `${textNumberHundred[5]} and ${textNumberTen[0]}-${textNumber[9]}`;
    case 620:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[0]}`;
    case 621:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[1]}`;
    case 622:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[2]}`;
    case 623:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[3]}`;
    case 624:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[4]}`;
    case 625:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[5]}`;
    case 626:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[6]}`;
    case 627:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[7]}`;
    case 628:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[8]}`;
    case 629:
      return `${textNumberHundred[5]} and ${textNumberTen[1]}-${textNumber[9]}`;
    case 630:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[0]}`;
    case 631:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[1]}`;
    case 632:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[2]}`;
    case 633:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[3]}`;
    case 634:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[4]}`;
    case 635:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[5]}`;
    case 636:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[6]}`;
    case 637:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[7]}`;
    case 638:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[8]}`;
    case 639:
      return `${textNumberHundred[5]} and ${textNumberTen[2]}-${textNumber[9]}`;
    case 640:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[0]}`;
    case 641:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[1]}`;
    case 642:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[2]}`;
    case 643:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[3]}`;
    case 644:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[4]}`;
    case 645:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[5]}`;
        case 646:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[6]}`;
    case 647:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[7]}`;
    case 648:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[8]}`;
    case 649:
      return `${textNumberHundred[5]} and ${textNumberTen[3]}-${textNumber[9]}`;
    case 650:
      return `${textNumberHundred[5]}-${textNumberTen[0]}`;
    case 651:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[1]}`;
    case 652:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[2]}`;
    case 653:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[3]}`;
    case 654:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[4]}`;
    case 655:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[5]}`;
    case 656:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[6]}`;
    case 657:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[7]}`;
    case 658:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[8]}`;
    case 659:
      return `${textNumberHundred[5]}-${textNumberTen[0]}-${textNumber[9]}`;
    case 660:
      return `${textNumberHundred[5]}-${textNumberTen[1]}`;
    case 661:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[1]}`;
    case 662:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[2]}`;
    case 663:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[3]}`;
    case 664:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[4]}`;
    case 665:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[5]}`;
    case 666:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[6]}`;
    case 667:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[7]}`;
    case 668:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[8]}`;
    case 669:
      return `${textNumberHundred[5]}-${textNumberTen[1]}-${textNumber[9]}`;
    case 670:
      return `${textNumberHundred[5]}-${textNumberTen[2]}`;
    case 671:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[1]}`;
    case 672:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[2]}`;
    case 673:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[3]}`;
    case 674:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[4]}`;
    case 675:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[5]}`;
    case 676:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[6]}`;
    case 677:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[7]}`;
    case 678:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[8]}`;
    case 679:
      return `${textNumberHundred[5]}-${textNumberTen[2]}-${textNumber[9]}`;
    case 680:
      return `${textNumberHundred[5]}-${textNumberTen[3]}`;
    case 681:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[1]}`;
    case 682:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[2]}`;
    case 683:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[3]}`;
    case 684:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[4]}`;
    case 685:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[5]}`;
    case 686:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[6]}`;
    case 687:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[7]}`;
    case 688:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[8]}`;
    case 689:
      return `${textNumberHundred[5]}-${textNumberTen[3]}-${textNumber[9]}`;
    case 690:
      return `${textNumberHundred[5]}-${textNumberTen[4]}`;
    case 691:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[1]}`;
    case 692:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[2]}`;
    case 693:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[3]}`;
    case 694:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[4]}`;
    case 695:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[5]}`;
    case 696:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[6]}`;
    case 697:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[7]}`;
    case 698:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[8]}`;
    case 699:
      return `${textNumberHundred[5]}-${textNumberTen[4]}-${textNumber[9]}`;
    case 700:
      return `${textNumberHundred[5]}-${textNumberTen[5]}`;
    case 701:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[1]}`;
    case 702:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[2]}`;
    case 703:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[3]}`;
    case 704:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[4]}`;
    case 705:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[5]}`;
    case 706:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[6]}`;
    case 707:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[7]}`;
    case 708:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[8]}`;
    case 709:
      return `${textNumberHundred[5]}-${textNumberTen[5]}-${textNumber[9]}`;
    case 710:
      return `${textNumberHundred[5]}-${textNumberTen[6]}`;
    case 711:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[1]}`;
    case 712:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[2]}`;
    case 713:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[3]}`;
    case 714:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[4]}`;
    case 715:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[5]}`;
    case 716:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[6]}`;
    case 717:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[7]}`;
    case 718:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[8]}`;
    case 719:
      return `${textNumberHundred[5]}-${textNumberTen[6]}-${textNumber[9]}`;
    case 720:
      return `${textNumberHundred[5]}-${textNumberTen[7]}`;
    case 721:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[1]}`;
    case 722:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[2]}`;
    case 723:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[3]}`;
    case 724:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[4]}`;
    case 725:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[5]}`;
    case 726:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[6]}`;
    case 727:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[7]}`;
    case 728:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[8]}`;
    case 729:
      return `${textNumberHundred[5]}-${textNumberTen[7]}-${textNumber[9]}`;
    case 730:
      return `${textNumberHundred[5]}-${textNumberTen[8]}`;
    case 731:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[1]}`;
    case 732:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[2]}`;
    case 733:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[3]}`;
    case 734:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[4]}`;
    case 735:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[5]}`;
    case 736:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[6]}`;
    case 737:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[7]}`;
    case 738:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[8]}`;
    case 739:
      return `${textNumberHundred[5]}-${textNumberTen[8]}-${textNumber[9]}`;
    case 740:
      return `${textNumberHundred[5]}-${textNumberTen[9]}`;
                  case 741:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[1]}`;
    case 742:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[2]}`;
    case 743:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[3]}`;
    case 744:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[4]}`;
    case 745:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[5]}`;
    case 746:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[6]}`;
    case 747:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[7]}`;
    case 748:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[8]}`;
    case 749:
      return `${textNumberHundred[5]}-${textNumberTen[9]}-${textNumber[9]}`;
    case 750:
      return `${textNumberHundred[6]}-${textNumberTen[0]}`;
    case 751:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[1]}`;
    case 752:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[2]}`;
    case 753:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[3]}`;
    case 754:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[4]}`;
    case 755:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[5]}`;
    case 756:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[6]}`;
    case 757:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[7]}`;
    case 758:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[8]}`;
    case 759:
      return `${textNumberHundred[6]}-${textNumberTen[1]}-${textNumber[9]}`;
    case 760:
      return `${textNumberHundred[6]}-${textNumberTen[2]}`;
    case 761:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[1]}`;
    case 762:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[2]}`;
    case 763:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[3]}`;
    case 764:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[4]}`;
    case 765:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[5]}`;
    case 766:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[6]}`;
    case 767:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[7]}`;
    case 768:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[8]}`;
    case 769:
      return `${textNumberHundred[6]}-${textNumberTen[2]}-${textNumber[9]}`;
    case 770:
      return `${textNumberHundred[6]}-${textNumberTen[3]}`;
    case 771:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[1]}`;
    case 772:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[2]}`;
    case 773:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[3]}`;
    case 774:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[4]}`;
    case 775:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[5]}`;
    case 776:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[6]}`;
    case 777:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[7]}`;
    case 778:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[8]}`;
    case 779:
      return `${textNumberHundred[6]}-${textNumberTen[3]}-${textNumber[9]}`;
    case 780:
      return `${textNumberHundred[6]}-${textNumberTen[4]}`;
    case 781:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[1]}`;
    case 782:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[2]}`;
    case 783:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[3]}`;
    case 784:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[4]}`;
    case 785:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[5]}`;
    case 786:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[6]}`;
    case 787:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[7]}`;
    case 788:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[8]}`;
    case 789:
      return `${textNumberHundred[6]}-${textNumberTen[4]}-${textNumber[9]}`;
    case 790:
      return `${textNumberHundred[6]}-${textNumberTen[5]}`;
    case 791:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[1]}`;
    case 792:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[2]}`;
    case 793:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[3]}`;
    case 794:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[4]}`;
    case 795:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[5]}`;
    case 796:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[6]}`;
    case 797:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[7]}`;
    case 798:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[8]}`;
    case 799:
      return `${textNumberHundred[6]}-${textNumberTen[5]}-${textNumber[9]}`;
    case 800:
      return `${textNumberHundred[6]}-${textNumberTen[6]}`;
    case 801:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[1]}`;
    case 802:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[2]}`;
    case 803:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[3]}`;
    case 804:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[4]}`;
    case 805:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[5]}`;
    case 806:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[6]}`;
    case 807:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[7]}`;
    case 808:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[8]}`;
    case 809:
      return `${textNumberHundred[6]}-${textNumberTen[6]}-${textNumber[9]}`;
    case 810:
      return `${textNumberHundred[6]}-${textNumberTen[7]}`;
    case 811:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[1]}`;
    case 812:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[2]}`;
    case 813:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[3]}`;
    case 814:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[4]}`;
    case 815:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[5]}`;
    case 816:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[6]}`;
    case 817:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[7]}`;
    case 818:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[8]}`;
    case 819:
      return `${textNumberHundred[6]}-${textNumberTen[7]}-${textNumber[9]}`;
    case 820:
      return `${textNumberHundred[6]}-${textNumberTen[8]}`;
    case 821:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[1]}`;
    case 822:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[2]}`;
    case 823:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[3]}`;
    case 824:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[4]}`;
    case 825:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[5]}`;
    case 826:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[6]}`;
    case 827:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[7]}`;
    case 828:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[8]}`;
    case 829:
      return `${textNumberHundred[6]}-${textNumberTen[8]}-${textNumber[9]}`;
    case 830:
      return `${textNumberHundred[6]}-${textNumberTen[9]}`;
    case 831:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[1]}`;
    case 832:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[2]}`;
    case 833:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[3]}`;
    case 834:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[4]}`;
    case 835:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[5]}`;
              case 836:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[6]}`;
    case 837:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[7]}`;
    case 838:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[8]}`;
    case 839:
      return `${textNumberHundred[6]}-${textNumberTen[9]}-${textNumber[9]}`;
    case 840:
      return `${textNumberHundred[7]}-${textNumberTen[0]}`;
    case 841:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[1]}`;
    case 842:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[2]}`;
    case 843:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[3]}`;
    case 844:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[4]}`;
    case 845:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[5]}`;
    case 846:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[6]}`;
    case 847:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[7]}`;
    case 848:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[8]}`;
    case 849:
      return `${textNumberHundred[7]}-${textNumberTen[1]}-${textNumber[9]}`;
    case 850:
      return `${textNumberHundred[7]}-${textNumberTen[2]}`;
    case 851:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[1]}`;
    case 852:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[2]}`;
    case 853:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[3]}`;
    case 854:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[4]}`;
    case 855:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[5]}`;
    case 856:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[6]}`;
    case 857:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[7]}`;
    case 858:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[8]}`;
    case 859:
      return `${textNumberHundred[7]}-${textNumberTen[2]}-${textNumber[9]}`;
    case 860:
      return `${textNumberHundred[7]}-${textNumberTen[3]}`;
    case 861:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[1]}`;
    case 862:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[2]}`;
    case 863:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[3]}`;
    case 864:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[4]}`;
    case 865:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[5]}`;
    case 866:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[6]}`;
    case 867:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[7]}`;
    case 868:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[8]}`;
    case 869:
      return `${textNumberHundred[7]}-${textNumberTen[3]}-${textNumber[9]}`;
    case 870:
      return `${textNumberHundred[7]}-${textNumberTen[4]}`;
    case 871:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[1]}`;
    case 872:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[2]}`;
    case 873:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[3]}`;
    case 874:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[4]}`;
    case 875:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[5]}`;
    case 876:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[6]}`;
    case 877:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[7]}`;
    case 878:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[8]}`;
    case 879:
      return `${textNumberHundred[7]}-${textNumberTen[4]}-${textNumber[9]}`;
    case 880:
      return `${textNumberHundred[7]}-${textNumberTen[5]}`;
    case 881:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[1]}`;
    case 882:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[2]}`;
    case 883:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[3]}`;
    case 884:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[4]}`;
    case 885:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[5]}`;
    case 886:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[6]}`;
    case 887:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[7]}`;
    case 888:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[8]}`;
    case 889:
      return `${textNumberHundred[7]}-${textNumberTen[5]}-${textNumber[9]}`;
    case 890:
      return `${textNumberHundred[7]}-${textNumberTen[6]}`;
    case 891:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[1]}`;
    case 892:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[2]}`;
    case 893:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[3]}`;
    case 894:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[4]}`;
    case 895:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[5]}`;
    case 896:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[6]}`;
    case 897:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[7]}`;
    case 898:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[8]}`;
    case 899:
      return `${textNumberHundred[7]}-${textNumberTen[6]}-${textNumber[9]}`;
    case 900:
      return `${textNumberHundred[7]}-${textNumberTen[7]}`;
    case 901:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[1]}`;
    case 902:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[2]}`;
    case 903:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[3]}`;
    case 904:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[4]}`;
    case 905:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[5]}`;
    case 906:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[6]}`;
    case 907:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[7]}`;
    case 908:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[8]}`;
    case 909:
      return `${textNumberHundred[7]}-${textNumberTen[7]}-${textNumber[9]}`;
    case 910:
      return `${textNumberHundred[7]}-${textNumberTen[8]}`;
    case 911:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[1]}`;
    case 912:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[2]}`;
    case 913:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[3]}`;
    case 914:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[4]}`;
    case 915:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[5]}`;
    case 916:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[6]}`;
    case 917:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[7]}`;
    case 918:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[8]}`;
    case 919:
      return `${textNumberHundred[7]}-${textNumberTen[8]}-${textNumber[9]}`;
    case 920:
      return `${textNumberHundred[7]}-${textNumberTen[9]}`;
    case 921:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[1]}`;
    case 922:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[2]}`;
    case 923:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[3]}`;
    case 924:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[4]}`;
    case 925:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[5]}`;
    case 926:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[6]}`;
    case 927:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[7]}`;
    case 928:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[8]}`;
    case 929:
      return `${textNumberHundred[7]}-${textNumberTen[9]}-${textNumber[9]}`;
    case 930:
      return `${textNumberHundred[8]}-${textNumberTen[0]}`;
     case 931:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[1]}`;
    case 932:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[2]}`;
    case 933:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[3]}`;
    case 934:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[4]}`;
    case 935:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[5]}`;
    case 936:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[6]}`;
    case 937:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[7]}`;
    case 938:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[8]}`;
    case 939:
      return `${textNumberHundred[8]}-${textNumberTen[1]}-${textNumber[9]}`;
    case 941:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[1]}`;
    case 942:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[2]}`;
    case 943:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[3]}`;
    case 944:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[4]}`;
    case 945:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[5]}`;
    case 946:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[6]}`;
    case 947:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[7]}`;
    case 948:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[8]}`;
    case 949:
      return `${textNumberHundred[8]}-${textNumberTen[2]}-${textNumber[9]}`;
    case 951:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[1]}`;
    case 952:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[2]}`;
    case 953:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[3]}`;
    case 954:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[4]}`;
    case 955:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[5]}`;
    case 956:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[6]}`;
    case 957:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[7]}`;
    case 958:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[8]}`;
    case 959:
      return `${textNumberHundred[8]}-${textNumberTen[3]}-${textNumber[9]}`;
    case 961:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[1]}`;
    case 962:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[2]}`;
    case 963:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[3]}`;
    case 964:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[4]}`;
    case 965:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[5]}`;
    case 966:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[6]}`;
    case 967:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[7]}`;
    case 968:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[8]}`;
    case 969:
      return `${textNumberHundred[8]}-${textNumberTen[4]}-${textNumber[9]}`;
    case 971:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[1]}`;
    case 972:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[2]}`;
    case 973:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[3]}`;
    case 974:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[4]}`;
    case 975:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[5]}`;
    case 976:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[6]}`;
    case 977:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[7]}`;
    case 978:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[8]}`;
    case 979:
      return `${textNumberHundred[8]}-${textNumberTen[5]}-${textNumber[9]}`;
    case 981:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[1]}`;
    case 982:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[2]}`;
    case 983:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[3]}`;
    case 984:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[4]}`;
    case 985:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[5]}`;
    case 986:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[6]}`;
    case 987:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[7]}`;
    case 988:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[8]}`;
    case 989:
      return `${textNumberHundred[8]}-${textNumberTen[6]}-${textNumber[9]}`;
    case 991:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[1]}`;
    case 992:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[2]}`;
    case 993:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[3]}`;
    case 994:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[4]}`;
    case 995:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[5]}`;
    case 996:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[6]}`;
    case 997:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[7]}`;
    case 998:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[8]}`;
    case 999:
      return `${textNumberHundred[8]}-${textNumberTen[7]}-${textNumber[9]}`;     
          
    }  
}
