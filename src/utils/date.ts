export function formatYmd(date: Date, locale = 'zh-CN'): string {
  const formatted = date.toLocaleDateString(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatted.replace(/\//g, '-');
}

export function todayYmd(now = new Date()): string {
  return formatYmd(now);
}

export function yesterdayYmd(now = new Date()): string {
  const date = new Date(now);
  date.setDate(date.getDate() - 1);
  return formatYmd(date);
}
