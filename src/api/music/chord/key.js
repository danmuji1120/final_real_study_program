const KEYS_SHOP = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const KEYS_FLAT = [
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

function setRangeKey(keys, startIndex, endIndex) {
  result = [];
  if (startIndex >= 0 && endIndex < keys.length && startIndex <= endIndex) {
    for (let i = startIndex; i <= endIndex; i++) {
      result.push(keys[i]);
    }
    return result;
  } else {
    return false;
  }
}

class KeyGenerator {
  constructor() {
    this.keysShop = KEYS_SHOP;
    this.keysFlat = KEYS_FLAT;
    this.rangeKeysShop = setRangeKey(this.keysShop, 0, this.keysShop.length);
    this.rangeKeysFlat = setRangeKey(this.keysFlat, 0, this.keysFlat.length);
  }
  setRangeKeysShop(startIndex, endIndex) {
    result = setRangeKey(this.keysShop, startIndex, endIndex);
    if (result) {
      this.rangeKeysShop = result;
    } else {
      return false;
    }
  }
  setRangeKeysFlat(startIndex, endIndex) {
    result = setRangeKey(this.keysFlat, startIndex, endIndex);
    if (result) {
      this.rangeKeysFlat = result;
    } else {
      return false;
    }
  }

  randomKeyShop() {
    return this.rangeKeysShop[
      Math.floor(Math.random() * this.rangeKeysShop.length)
    ];
  }
  randomKeyFlat() {
    return this.rangeKeysFlat[
      Math.floor(Math.random() * this.rangeKeysFlat.length)
    ];
  }
}

module.exports = KeyGenerator;
