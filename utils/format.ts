/**
 * 년월일만 나오도록 변경해줌
 * @param "2023-02-13T08:04:56.741Z"
 * @returns "2023-02-13"
 */
export const convertYYYYMMDD = (date: Date | string) => {
  return new Date(date).toISOString().substring(0, 10);
};

/**
 * 년월일, 시분초까지 나오도록 변경해줌
 * @param "2023-02-13T08:04:56.741Z"
 * @returns "2023-02-13 08:04:56"
 */
export const convertYYYYMMDD_HHMMSS = (date: Date | string) => {
  return new Date(date).toISOString().substring(0, 19).replace("T", " ");
};

/**
 * UTC 시간을 로컬타임으로 바꿔줌
 * ex
 * 오전 9시의 값을 넣으면
 * 한국기준 호후 6시로 반환
 */
export const convertUTCDateToLocalDate = (date: Date | string) => {
  const inputDate = new Date(date);
  const newDate = new Date(inputDate.getTime() - inputDate.getTimezoneOffset() * 60 * 1000);
  return newDate;
};

/**
 * 숫자를 3자리씩 , 로 끊어줌
 * @param 1000000
 * @returns 1,000,000
 */
export const commas = (num: number) => {
  const parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

/**
 * 0-9를 제외한 문자를 없애줌
 * @param 12345코드
 * @returns 12345
 */
export const numbers = (value: string) => {
  return value.replace(/[^0-9]/g, "");
};

/**
 * 특수문자를 입력해서 서버에 전송하면 특수문자가 변환되어 들어가는데,
 * 그 값을 다시 받아와서 클라이언트에 보여줄 때 &apos 와 같이 보일 때가 있음
 * 그 값을 원래의 특수문자로 변경해주는 함수
 * @param "Don&apost change"
 * @returns "Don't change"
 */
export const unescapeHtml = (str: string | null) => {
  if (str == null) {
    return "";
  }

  return str
    .replace(/&lt/g, "<")
    .replace(/&gt/g, ">")
    .replace(/&quot/g, '"')
    .replace(/&#38/g, "&")
    .replace(/&apos/g, "'");
};
