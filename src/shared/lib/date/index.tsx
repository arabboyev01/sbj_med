export function localeDate(date: string) {
  return new Date(date).toLocaleDateString("ru-RU");
}
