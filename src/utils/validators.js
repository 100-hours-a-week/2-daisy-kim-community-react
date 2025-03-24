export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "* 올바른 이메일 주소 형식을 입력해주세요.";
  if (!emailRegex.test(email))
    return "* 올바른 이메일 주소 형식을 입력해주세요.";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "* 비밀번호를 입력해주세요.";
  if (password.length < 8 || password.length > 20) {
    return "* 비밀번호는 8자 이상, 20자 이하로 입력해주세요.";
  }
  if (!/[A-Z]/.test(password))
    return "* 비밀번호에 대문자를 최소 1개 포함해야 합니다.";
  if (!/[a-z]/.test(password))
    return "* 비밀번호에 소문자를 최소 1개 포함해야 합니다.";
  if (!/[0-9]/.test(password))
    return "* 비밀번호에 숫자를 최소 1개 포함해야 합니다.";
  if (!/[\W_]/.test(password))
    return "* 비밀번호에 특수문자를 최소 1개 포함해야 합니다.";
  return "";
};

const isPasswordMatch = (confirm, original) => confirm === original;

export const validateConfirmPassword = (newConfirmPassword, password) => {
  return isPasswordMatch(newConfirmPassword, password)
    ? ""
    : "* 비밀번호가 일치하지 않습니다.";
};

// 숫자 단위 변환 함수 100,000 → 100k
export const formatNumber = (num) => {
  if (num >= 100000) {
    return `${Math.floor(num / 1000)}k`;
  } else if (num >= 10000) {
    return `${Math.floor(num / 1000)}k`;
  } else if (num >= 1000) {
    return `${Math.floor(num / 1000)}k`;
  }
  return num.toString();
};
