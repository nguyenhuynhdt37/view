export const checkEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export function hasLetterAndNumber(str: string) {
  return /[a-zA-Z]/.test(str) && /\d/.test(str);
}

export function isValidLength(str: string) {
  return str.length >= 8 && str.length <= 20;
}

export function containsSpecialCharacter(str: string) {
  return /[!@#$%^&*(),.?":{}|<>]/.test(str);
}
