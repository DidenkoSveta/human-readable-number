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
      return `${textNumberHundred[0]} and ${textNumberTen[3]}`;
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
      return `${textNumberHundred[0]} and ${textNumberTen[4]}`;
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
      return `${textNumberHundred[0]} and ${textNumberTen[5]}`;
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
      return `${textNumberHundred[0]} and ${textNumberTen[6]}`;
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
      return `${textNumberHundred[0]} and ${textNumberTen[7]}`;
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
      return `${textNumberHundred[0]} and ${textNumberTen[8]}`;
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
      return `${textNumberHundred[1]}`;
     case 201:
      return `${textNumberHundred[1]} and ${textNumber[1]}`;
     case 202:
      return `${textNumberHundred[1]} and ${textNumber[2]}`;
     case 203:
      return `${textNumberHundred[1]} and ${textNumber[3]}`;
     case 204:
      return `${textNumberHundred[1]} and ${textNumber[4]}`;
     case 205:
      return `${textNumberHundred[1]} and ${textNumber[5]}`;
     case 206:
      return `${textNumberHundred[1]} and ${textNumber[6]}`;
     case 207:
      return `${textNumberHundred[1]} and ${textNumber[7]}`;
     case 208:
      return `${textNumberHundred[1]} and ${textNumber[8]}`;
     case 209:
      return `${textNumberHundred[1]} and ${textNumber[9]}`;
     case 210:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}`;
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
      return `${textNumberHundred[1]} and ${textNumberTen[2]}`;
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
      return `${textNumberHundred[1]} and ${textNumberTen[3]}`;
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
     case 240:
      return `${textNumberHundred[1]} and ${textNumberTen[4]}`;
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
     case 250:
      return `${textNumberHundred[1]} and ${textNumberTen[5]}`;
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
     case 260:
      return `${textNumberHundred[1]} and ${textNumberTen[6]}`;
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
     case 270:
      return `${textNumberHundred[1]} and ${textNumberTen[7]}`;
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
     case 280:
      return `${textNumberHundred[1]} and ${textNumberTen[8]}`;
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
     case 290:
      return `${textNumberHundred[1]} and ${textNumberTen[9]}`;
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
     case 300:
      return `${textNumberHundred[2]}`;
     case 301:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[1]}`;
     case 302:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[2]}`;
     case 303:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[3]}`;
     case 304:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[4]}`;
     case 305:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[5]}`;
     case 306:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[6]}`;
     case 307:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[7]}`;
     case 308:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[8]}`;
     case 309:
      return `${textNumberHundred[2]} and ${textNumberTen[0]}-${textNumber[9]}`;
     case 310:
      return `${textNumberHundred[2]} and ${textNumberTen[1]}`;
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
     case 320:
      return `${textNumberHundred[2]} and ${textNumberTen[2]}`;
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
     case 330:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}`;
     case 331:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[1]}`;
     case 332:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[2]}`;
     case 333:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[3]}`;
     case 334:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[4]}`;
     case 335:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[5]}`;
     case 336:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[6]}`;
     case 337:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[7]}`;
     case 338:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[8]}`;
     case 339:
      return `${textNumberHundred[3]} and ${textNumberTen[3]}-${textNumber[9]}`;
     case 340:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}`;
     case 341:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[1]}`;
     case 342:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[2]}`;
     case 343:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[3]}`;
     case 344:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[4]}`;
     case 345:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[5]}`;
     case 346:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[6]}`;
     case 347:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[7]}`;
     case 348:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[8]}`;
     case 349:
      return `${textNumberHundred[4]} and ${textNumberTen[4]}-${textNumber[9]}`;
     case 350:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}`;
     case 351:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[1]}`;
     case 352:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[2]}`;
     case 353:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[3]}`;
     case 354:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[4]}`;
     case 355:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[5]}`;
     case 356:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[6]}`;
     case 357:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[7]}`;
     case 358:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[8]}`;
     case 359:
      return `${textNumberHundred[5]} and ${textNumberTen[5]}-${textNumber[9]}`;
     case 360:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}`;
     case 361:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[1]}`;
     case 362:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[2]}`;
     case 363:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[3]}`;
     case 364:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[4]}`;
     case 365:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[5]}`;
     case 366:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[6]}`;
     case 367:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[7]}`;
     case 368:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[8]}`;
     case 369:
      return `${textNumberHundred[6]} and ${textNumberTen[6]}-${textNumber[9]}`;
     case 370:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}`;
     case 371:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[1]}`;
     case 372:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[2]}`;
     case 373:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[3]}`;
     case 374:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[4]}`;
     case 375:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[5]}`;
     case 376:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[6]}`;
     case 377:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[7]}`;
     case 378:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[8]}`;
     case 379:
      return `${textNumberHundred[7]} and ${textNumberTen[7]}-${textNumber[9]}`;
     case 380:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}`;
     case 381:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[1]}`;
     case 382:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[2]}`;
     case 383:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[3]}`;
     case 384:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[4]}`;
     case 385:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[5]}`;
     case 386:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[6]}`;
     case 387:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[7]}`;
     case 388:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[8]}`;
     case 389:
      return `${textNumberHundred[8]} and ${textNumberTen[8]}-${textNumber[9]}`;
     case 390:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}`;
     case 391:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[1]}`;
     case 392:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[2]}`;
     case 393:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[3]}`;
     case 394:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[4]}`;
     case 395:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[5]}`;
     case 396:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[6]}`;
     case 397:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[7]}`;
     case 398:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[8]}`;
     case 399:
      return `${textNumberHundred[9]} and ${textNumberTen[9]}-${textNumber[9]}`;
     case 400:
      return `${textNumberHundred[0]}`;
     case 401:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[1]}`;
     case 402:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[2]}`;
     case 403:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[3]}`;
     case 404:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[4]}`;
     case 405:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[5]}`;
     case 406:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[6]}`;
     case 407:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[7]}`;
     case 408:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[8]}`;
     case 409:
      return `${textNumberHundred[0]} and ${textNumberTen[0]}-${textNumber[9]}`;
     case 410:
      return `${textNumberHundred[1]} and ${textNumberTen[1]}`;
              }
  
}
