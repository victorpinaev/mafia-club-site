function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function formatGameDate(date: Date | string): string {
  const dt = typeof date === 'string' ? new Date(date) : date;

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Kyiv',
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  const parts = formatter.formatToParts(dt);
  const values = parts.reduce<Record<string, string>>((acc, part) => {
    if (part.type !== 'literal') {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});

  const weekday = capitalizeFirstLetter(values.weekday ?? '');
  const day = values.day ?? '';
  const month = values.month ?? '';
  const hour = values.hour ?? '';
  const minute = values.minute ?? '';

  return `${weekday} • ${day} ${month} • ${hour}:${minute}`;
}
