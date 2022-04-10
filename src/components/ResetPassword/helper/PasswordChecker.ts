export const PasswordChecker = (password: string, confirmPassword: string) => {
  if (!password || !confirmPassword) {
    return false
  }
  if (password !== confirmPassword) {
    return false
  }
  if (password.length < 8 || confirmPassword.length < 8) {
    return false
  }
  return true
}
