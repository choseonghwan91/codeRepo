/**
 * 이메일 형식이 맞는지 확인하는 함수
 * @param email 문자열로 전달
 * @returns 이메일형식이 맞으면 true, 틀리면 false
 */
export const validEmail = (email: string) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  return regex.test(email);
};
