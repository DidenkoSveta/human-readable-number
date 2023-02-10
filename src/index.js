
const assert = require('assert');

function toReadable(number) {
  switch (number) {
    case 0:
      return 'zero';
    case 1:
      return 'one';
    default:
      return number;
  }
}

it('Should return \'zero\' when 0 given', () => {
  const readable = toReadable(0);
  assert.equal(readable, 'zero');
});
it('Should return \'one\' when 1 given', () => {
  const readable = toReadable(1);
  assert.equal(readable, 'one');
});
