function daysAgo(input) {
  let givenDate;

  // 만약 입력이 문자열이라면 Date 객체로 변환
  if (typeof input === "string") {
    givenDate = new Date(input);
  } else if (input instanceof Date) {
    // 이미 Date 객체인 경우 그대로 사용
    givenDate = input;
  } else {
    // 유효하지 않은 입력 타입에 대한 처리
    throw new Error("유효한 날짜 형식이 아닙니다.");
  }

  // 현재 날짜를 가져오기
  const today = new Date();

  // 날짜 차이 계산 (밀리초 단위)
  const timeDifference = today - givenDate;

  // 밀리초를 일로 변환
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}

module.exports = daysAgo;
