export function parseEuropeKyivDateTime(dateString: string): Date {
  const [datePart, timePart] = dateString.split('T');

  if (!datePart || !timePart) {
    throw new Error('Неверный формат даты');
  }

  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute] = timePart.split(':').map(Number);

  if ([year, month, day, hour, minute].some((value) => Number.isNaN(value))) {
    throw new Error('Неверный формат даты');
  }

  const utcCandidate = Date.UTC(year, month - 1, day, hour, minute);
  const tzFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Kyiv',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  const parts = tzFormatter.formatToParts(new Date(utcCandidate));
  const parsedParts = parts.reduce<Record<string, string>>((acc, part) => {
    if (part.type !== 'literal') {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});

  const tzTimestamp = Date.UTC(
    Number(parsedParts.year),
    Number(parsedParts.month) - 1,
    Number(parsedParts.day),
    Number(parsedParts.hour),
    Number(parsedParts.minute),
    Number(parsedParts.second)
  );

  const offset = tzTimestamp - utcCandidate;
  return new Date(utcCandidate - offset);
}

export function formatEuropeKyivDateTime(date: Date | string): string {
  const dt = new Date(date);
  const formatter = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Kyiv',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  const parts = formatter.formatToParts(dt);
  const mapped = parts.reduce<Record<string, string>>((acc, part) => {
    if (part.type !== 'literal') {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});

  return `${mapped.day}.${mapped.month}.${mapped.year} ${mapped.hour}:${mapped.minute}`;
}

export function formatEuropeKyivDateVerbose(date: Date | string) {
  const dt = new Date(date);
  const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Kyiv',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
    timeZone: 'Europe/Kyiv',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  return {
    date: dateFormatter.format(dt),
    time: timeFormatter.format(dt),
  };
}
