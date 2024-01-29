const MiddleStudy = require("./middleStudyContainer");
const setCorrectId = require("../AnalyzeRecord/setCorrectId");

ANSWERCOUNT = 3;

class LowerStudy extends MiddleStudy {
  constructor(wordBox, settings) {
    super(wordBox);
    this.settings = settings;
    this.status = "before start";
    this.alreadyAnswer = [];
    this.message = { question: [], statusText: "", statusColor: "" };
    this.answerCount = ANSWERCOUNT;
    this.incorrectAnswerNoteMode = false;
    this.incorrectAnswerNoteList = [];
    this.incorrectAnswerNoteCount = 0;
  }
  start() {
    this.setQuestionIdList();
    this.setRandomIdList();
    this.setCurrentId();
    this.message.question = this.getQuestionData();
    this.generateRecordContainer();
    while (this.moveIndex()) {
      this.generateRecordContainer();
    }
    this.status = "proceeding";
    this.message.statusText = `다음 ${
      this.settings.contentText[this.questionIndex]
    }를 보고 ${this.settings.contentText[this.answerIndex]}를 입력하세요.`;
  }
  startIncorrectAnswerNote() {
    this.message.statusText = "";
    for (let i = 0; i < this.incorrectAnswerNoteCount; i++) {
      this.message.statusText += "오답노트의 ";
    }
    this.message.statusText += "오답노트를 실행하려면 엔터를 입력하세요.";
    this.message.statusColor = "black";
    this.setQuestionIdList(this.incorrectAnswerNoteList);
    this.setRandomIdList();
    this.incorrectAnswerNoteList = [];
    this.questionIndex = 0;
    this.answerIndex = 1;
    this.status = "stop";
    this.incorrectAnswerNoteCount += 1;
    this.record = {};
    this.generateRecordContainer();
    while (this.moveIndex()) {
      this.generateRecordContainer();
    }
  }
  nextQuestion() {
    if (this.setCurrentId()) {
      this.message.question = this.getQuestionData();
      this.status = "proceeding";
      this.message.statusText = `다음 ${
        this.settings.contentText[this.questionIndex]
      }를 보고 ${this.settings.contentText[this.answerIndex]}를 입력하세요.`;
      this.message.statusColor = "black";
      return true; // 계속
    } else {
      return this.changeQuestion();
    }
  }
  // 문제를 전환한다.
  changeQuestion() {
    if (this.settings.testMode === "oneWay") {
      this.setCorrectPersent();
      return false; // 종료
    } else if (this.settings.testMode === "twoWay") {
      if (this.questionIndex !== 0) {
        this.setCorrectPersent();
        return false; // 종료
      } else {
        this.changeIndex();
        this.generateRecordContainer();
        this.setRandomIdList();
        this.setCurrentId();
        this.message.question = this.getQuestionData();
        this.status = "precessing";
        this.message.statusText = `이제 ${
          this.settings.contentText[this.questionIndex]
        }을 보고 ${this.settings.contentText[this.answerIndex]}를 입력하세요.`;
        this.message.statusColor = "black";
        return true;
      }
    }
  }
  answer(userAnswer) {
    if (this.answerEvent(userAnswer)) {
      return true;
    } else {
      if (!this.incorrectAnswerNoteMode) {
        this.save();
        this.incorrectAnswerNoteMode = true;
      }
      if (
        this.settings.incorrectAnswerNote &&
        this.incorrectAnswerNoteList.length !== 0
      ) {
        this.startIncorrectAnswerNote();
        return true;
      } else {
        this.message.statusText = "종료 엔터 입력시 메인화면으로 돌아가기";
        this.message.statusColor = "black";
        return false;
      }
    }
  }

  answerEvent(userAnswer) {
    // console.log("오답노트리스트: ", this.incorrectAnswerNoteList);
    // console.log("남은 문제 리스트", this.randomIdList);
    if (userAnswer === true) {
      this.forceCorrectProcess();
      console.log(this.record);
      return true;
    } else {
      if (this.status === "stop") {
        console.log("상태가 stop일 경우");
        if (this.moveIndex()) {
          console.log("다음 정답인덱스");
          this.message.statusText = this.message.statusText = `이제 ${
            this.settings.contentText[this.questionIndex]
          }을 보고 ${
            this.settings.contentText[this.answerIndex]
          }를 입력하세요.`;
          this.message.statusColor = "black";
          this.status = "proceeding";
          return true; // 계속
        } else {
          return this.nextQuestion();
        }
      } else {
        this.answerProcessing(userAnswer);
        return true;
      }
    }
  }
  answerProcessing(userAnswer) {
    const answerData = this.getAnswerData();
    let valueToggle = false;
    answerData.forEach((value, index) => {
      if (this.settings.ignoreSpecial) {
        console.log("특수문자 무시 on");
        userAnswer = userAnswer
          .replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/gi, "")
          .replace(/[\s]/gi, "");
        value = value
          .replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/gi, "")
          .replace(/[\s]/gi, "");
      }
      // 답이 같은 경우
      if (value === userAnswer) {
        valueToggle = true;
        // 이미 입력한 답일 경우
        if (this.alreadyAnswer.includes(index)) {
          console.log(
            "현재 인덱스: ",
            index,
            "이미 입력한 인덱스: ",
            this.alreadyAnswer
          );
          this.message.statusText = "이미 입력한 답입니다.";
          this.message.statusColor = "red";
        } else {
          // 답이 같은데 이미 입력한 답이 아닐 경우
          this.record[this.getCurrentId()][
            `${this.questionIndex}-${this.answerIndex}`
          ].push(index);
          this.alreadyAnswer.push(index);
          if (this.alreadyAnswer.length === this.getAnswerData().length) {
            console.log("모든 정답을 맞춤");
            this.answerCount = ANSWERCOUNT;
            this.message.statusText = "정답. 엔터를 입력하면 다음 문제";
            this.message.statusColor = "green";
            this.status = "stop";
            this.alreadyAnswer = [];
          } else {
            this.message.statusText = `정답, 또 다른 ${
              this.settings.contentText[this.answerIndex]
            }`;
            this.message.statusColor = "green";
          }
        }
      }
    });
    // 답이 틀릴 경우
    if (valueToggle === false) {
      this.answerCount -= 1;
      if (this.answerCount === 0) {
        this.message.statusText = `정답은 ${this.getAnswerData()}. 엔터를 입력하면 다음 문제`;
        this.message.statusColor = "red";
        this.alreadyAnswer = [];
        this.answerCount = ANSWERCOUNT;
        this.status = "stop";
        // 오답노트에 ID추가
        if (!this.incorrectAnswerNoteList.includes(this.getCurrentId())) {
          this.incorrectAnswerNoteList.push(this.getCurrentId());
        }
      } else {
        this.message.statusText = `틀린 답입니다. 남은 기회${this.answerCount}`;
        this.message.statusColor = "red";
      }
    }
  }
  getMessage() {
    return this.message;
  }
  setCorrectPersent() {
    const correctIdList = setCorrectId(this.record, this.wordBox);
    const correctPerWordBox =
      (correctIdList.length / Object.keys(this.wordBox).length) * 100;
    this.message.question = `전체 ${Object.keys(this.wordBox).length}개중 ${
      correctIdList.length
    }개 정답\n 정답률: ${parseInt(correctPerWordBox)}`;
  }
  forceCorrectProcess() {
    this.wordBox[this.getCurrentId()][this.answerIndex].forEach(
      (value, index) => {
        if (
          !this.record[this.getCurrentId()][
            `${this.questionIndex}-${this.answerIndex}`
          ].includes(index)
        ) {
          this.record[this.getCurrentId()][
            `${this.questionIndex}-${this.answerIndex}`
          ].push(index);
        }
      }
    );
    console.log("강제 정답 처리");
    this.answerCount = ANSWERCOUNT;
    this.message.statusText = "강제 정답 처리. 엔터를 입력하면 다음 문제";
    this.message.statusColor = "green";
    this.status = "stop";
    this.alreadyAnswer = [];
  }
}

module.exports = LowerStudy;
