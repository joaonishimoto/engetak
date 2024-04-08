export function getTwoFirstLetters(email: string): string {
  const firstLetter = email.charAt(0);
  const dotIndex = email.indexOf('.');
  const secondLetterAfterDot = dotIndex !== -1 && email.length > dotIndex + 1 ? email.charAt(dotIndex + 1) : '';
  return firstLetter.toUpperCase() + secondLetterAfterDot.toUpperCase();
}