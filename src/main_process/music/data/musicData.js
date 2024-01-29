const musicData = {
  relativePitch: {
    name: "상대음감",
    level: {
      level01: {
        question: ["C3-B3"],
        answer: [-2, -1, 1, 2],
        len: 1,
        count: 30,
      },
      level02: {
        question: ["C3-B3"],
        answer: [-4, -3, 3, 4],
        len: 1,
        count: 30,
      },
      level03: {
        question: ["C3-B3"],
        answer: [-6, -5, 5, 6],
        len: 1,
        count: 30,
      },
      level04: {
        question: ["C3-B3"],
        answer: [-8, -7, 7, 8],
        len: 1,
        count: 30,
      },
      level05: {
        question: ["C3-B3"],
        answer: [-10, -9, 9, 10],
        len: 1,
        count: 30,
      },
    },
    info: "",
  },
  absolutePitch: {
    name: "절대음감",
    level: { level01: {}, level02: {} },
    info: "",
  },
};

module.exports = musicData;
