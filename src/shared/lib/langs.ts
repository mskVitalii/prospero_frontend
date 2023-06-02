export function langByKey(key: string): string {
  switch (key) {
    case "en": return "Английский"
    case "ru": return "Русский"
    default: return "Не указан"
  }
}
export function langKey(str: string): string {
  switch (str) {
    case "Английский": return "en"
    case "Русский": return "ru"
    default: return ""
  }
}