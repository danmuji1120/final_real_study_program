const { ipcMain, ipcRenderer } = require("electron");
const MiddleStudy = require("./middleStudyContainer");
const saveRecord = require("./saveRecord");

ANSWERCOUNT = 2;

class LowerStudy extends MiddleStudy {
  constructor(wordBox, settings) {
    super(wordBox);
    this.settings = settings;
    this.record = {};
    this.printLog();
    this.setRecord();
    this.status = "before start";
    this.alreadyAnswer = [];
    this.message = { text: "", color: "" };
    this.answerCount = ANSWERCOUNT;
    this.incorrectAnswerNoteMode = false;
    this.incorrectAnswerNote = [];
  }
  printLog() {
    console.log("시험볼 데이터: ", this.wordBox);
    console.log("object: ", Object.keys(this.wordBox));
  }
  start() {
    this.setRandomIdList();
    this.setCurrentId();
    this.status = "proceeding";
    this.message.text = `다음 ${
      this.settings.contentText[this.questionIndex]
    }를 보고 ${this.settings.contentText[this.answerIndex]}를 입력하세요.`;
  }
  setRecord() {
    if (Object.keys(this.record).length === 0) {
      Object.keys(this.wordBox).forEach((element) => {
        this.record[element] = {};
      });
    }
    Object.keys(this.wordBox).forEach((element) => {
      this.record[element][`${this.questionIndex}-${this.answerIndex}`] = [];
    });
  }
  answerEvent(userAnswer) {
    console.log("정답 이벤트 실행");
    console.log("문제 인덱스: ", this.questionIndex);
    console.log("정답 인덱스: ", this.answerIndex);
    if (this.status === "stop") {
      console.log("상태가 stop일 경우");
      if (this.moveIndex()) {
        console.log("다음 정답인덱스");
        this.message.text = "";
        this.status = "proceeding";
        return true; // 계속
      } else {
        if (this.setCurrentId()) {
          this.status = "proceeding";
          this.message.text = `다음 ${
            this.settings.contentText[this.questionIndex]
          }를 보고 ${
            this.settings.contentText[this.answerIndex]
          }를 입력하세요.`;
          this.message.color = "black";

          return true; // 계속
        } else {
          if (this.settings.testMode === "oneWay") {
            return false; // 종료
          } else if (this.settings.testMode === "twoWay") {
            if (this.questionIndex !== 0) {
              return false;
            } else {
              this.changeIndex();
              this.setRecord();
              this.setRandomIdList();
              this.setCurrentId();
              this.status = "precessing";
              this.message.text = `이제 ${
                this.settings.contentText[this.questionIndex]
              }을 보고 ${
                this.settings.contentText[this.answerIndex]
              }를 입력하세요.`;
              this.message.color = "black";
              return true;
            }
          }
        }
      }
    } else {
      this.answerProcessing(userAnswer);
      return true;
    }
  }
  answerProcessing(userAnswer) {
    console.log("정답처리 시작");
    const answerData = this.getAnswerData();
    console.log("정답리스트: ", answerData);
    let valueToggle = false;
    answerData.forEach((value, index) => {
      console.log("현재의 정답: ", value);
      if (this.settings.ignoreSpecial) {
        console.log("특수문자 무시 on");
        userAnswer = userAnswer
          .replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/gi, "")
          .replace(/[\s]/gi, "");
        value = value
          .replace(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/gi, "")
          .replace(/[\s]/gi, "");
      }
      if (value === userAnswer) {
        valueToggle = true;
        console.log("정답: ", value, " 입력한 값: ", userAnswer);
        console.log("입력한 값과 정답이 동일");
        // 답이 같은 경우
        if (index in this.alreadyAnswer) {
          console.log("이미 입력한 답");

          // 이미 입력한 답일 경우
          this.message.text = "이미 입력한 답입니다.";
          this.message.color = "red";
        } else {
          console.log("중복되지 않고 정답");

          // 답이 같은데 이미 입력한 답이 아닐 경우
          console.log(this.record);
          console.log(this.getCurrentId());
          console.log(`${this.questionIndex}-${this.answerIndex}`);
          console.log(this.record[this.getCurrentId()]);
          console.log(
            this.record[this.getCurrentId()][
              `${this.questionIndex}-${this.answerIndex}`
            ]
          );
          this.record[this.getCurrentId()][
            `${this.questionIndex}-${this.answerIndex}`
          ].push(index);
          this.alreadyAnswer.push(index);
          if (this.alreadyAnswer.length === this.getAnswerData().length) {
            console.log("모든 정답을 맞춤");
            this.answerCount = ANSWERCOUNT;
            this.message.text = "정답. 엔터를 입력하면 다음 문제";
            this.message.color = "green";
            this.status = "stop";
            this.alreadyAnswer = [];
          } else {
            console.log("하나 이상의 정답이 존재");

            this.message.text = `정답, 또 다른 ${
              this.settings.contentText[this.answerIndex]
            }`;
            this.message.color = "green";
          }
        }
      }
    });
    if (valueToggle === false) {
      console.log("답이 틀렸음");
      // 답이 틀릴 경우
      this.answerCount -= 1;
      if (this.answerCount === 0) {
        console.log("기회 모두 사용");
        this.message.text = `정답은 ${this.getAnswerData()}. 엔터를 입력하면 다음 문제`;
        this.message.color = "red";
        this.answerCount = ANSWERCOUNT;
        this.status = "stop";
        if (!this.incorrectAnswerNote.includes(this.getCurrentId())) {
          this.incorrectAnswerNote.push(this.getCurrentId());
        }
      } else {
        console.log("기회 남음");
        this.message.text = `틀린 답입니다. 남은 기회${this.answerCount}`;
        this.message.color = "red";
      }
    }
    console.log(this.incorrectAnswerNote);
  }
  save() {
    saveRecord(this.record);
  }
  getMessage() {
    return this.message;
  }
}

module.exports = LowerStudy;
