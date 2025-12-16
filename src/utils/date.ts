/**
 * 将 Date 对象格式化为 "YYYY-MM-DD" 格式
 * @param date - 要格式化的 Date 对象
 * @returns 格式化后的字符串
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  // getMonth() 返回 0-11，所以需要 +1
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 使用 padStart 可以保证月和日总是两位数，例如 01, 02
  const formattedMonth = String(month).padStart(2, '0');
  const formattedDay = String(day).padStart(2, '0');

  return `${year}-${formattedMonth}-${formattedDay}`;
}