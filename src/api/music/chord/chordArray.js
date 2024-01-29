const MAJOR_SCALE = ["IM7", "IIm7", "IIIm7", "IVM7", "V7", "VIm7", "VIIdim7"];

class ScaleGenerator {
  constructor() {
    this.majorScale = MAJOR_SCALE;
    this.mainScale = this.majorScale;
  }
  choiceMainScale(scaleIndex) {
    if (scaleIndex == 0) {
      this.mainScale = this.majorScale;
    } else {
      this.mainScale = this.mainScale;
    }
  }
  randomChord() {
    return this.majorScale[Math.floor(Math.random() * this.majorScale.length)];
  }
  randomChordArray(count = 4) {
    let result = "";
    for (let i = 0; i < count; i++) {
      result += this.randomChord();
      if (i < count - 1) {
        result += " - ";
      }
    }

    return result;
  }
}

const test = new ScaleGenerator();

for (let i = 0; i < 20; i++) {
  console.log(test.randomChordArray());
}
