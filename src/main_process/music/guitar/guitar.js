class Guitar {
  constructor() {
    this.tuneList = {
      standard: ["E4", "B3", "G3", "D3", "A2", "E2"],
      dropD: ["E4", "B3", "G3", "D3", "A2", "D2"],
      halfStepDown: ["D#4", "A#3", "F#3", "C#3", "G#2", "D#2"],
      wholeStepDown: ["D4", "A3", "F3", "C3", "G2", "D2"],
    };
    this.noteArray = [
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
    this.tune = this.tuneList.standard;
    this.maxFlat = 22;
  }
  getTuneList() {
    return Object.keys(this.tuneList);
  }
  setTune(tuneName) {
    if (this.getTuneList().includes(tuneName)) {
      this.tune = this.tuneList[tuneName];
      return true;
    } else {
      return false;
    }
  }
}
const test = new Guitar();

// 노트를 입력하면 노트에 해당하는 라인의 프렛을 모두 출력
