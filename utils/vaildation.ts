/**
 * 이메일 형식이 맞는지 확인하는 함수
 * @param email 문자열로 전달
 * @returns 이메일 형식이 맞으면 true, 틀리면 false
 */
export const validEmail = (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  return regex.test(email);
};

/**
 * 비밀번호 검증함수 (알파벳 1개 이상, 숫자 1개 이상, 특수문자 1개 이상, 8글자 이상, 15글자 이하)
 * @param password 문자열로 전달
 * @returns 비밀번호 형식이 맞으면 true, 틀리면 false
 */
export const validPw = (password: string) => {
  const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/g;
  return regex.test(password);
};
