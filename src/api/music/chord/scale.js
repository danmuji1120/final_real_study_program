const yScale = {
  allScale: [
    "ionian",
    "dorian",
    "phrygian",
    "lydian",
    "mixolydian",
    "aeolian",
    "locrian",
    "wholeTone",
    "majorPentatonic",
    "minorPentatonic",
    "blues",
    "",
  ],
  allNote: [
    "C",
    ["C#", "Db"],
    "D",
    ["D#", "Eb"],
    "E",
    "F",
    ["F#", "Gb"],
    "G",
    ["G#", "Ab"],
    "A",
    ["A#", "Bb"],
    "B",
  ],
  majorScale: [
    "ionian",
    "dorian",
    "phrygian",
    "lydian",
    "mixolydian",
    "aeolian",
    "locrian",
  ],
  ionian: [0, 2, 4, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  aeolian: [0, 2, 3, 5, 7, 8, 10],
  locrian: [0, 1, 3, 5, 6, 8, 10],
  majorPentatonic: [0, 2, 4, 7, 9],
  minorPentatonic: [0, 3, 5, 7, 10],
  getAllList() {
    return this.allScale;
  },
  getScale(rootNote, scale) {
    const result = [];
    // console.log("rootNote", rootNote);
    const rootNoteIndex = this.allNote.indexOf(rootNote);
    // console.log("rootNoteIndex: ", rootNoteIndex);
    this[scale].forEach((noteIndex) => {
      noteIndex += rootNoteIndex;
      noteIndex = noteIndex % 12;
      // console.log("index: ", noteIndex, " note: ", this.allNote[noteIndex]);
      result.push(this.allNote[noteIndex]);
    });
    return result;
  },
};

console.log(yScale.getScale("C", "majorPentatonic"));

// const test = ["C", "D", "E"];

// console.log(test.indexOf("D"));
