export const EmailChecker = (text: string) => {
  if (!text){
      return false;
  }
  const regex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}")
  return regex.test(text);
}
