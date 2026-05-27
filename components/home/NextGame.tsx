import { db } from '@/lib/prisma';

export default async function NextGame() {
  const nextGame = await db.game.findFirst({
    where: {
      date: {
        gt: new Date(),
      },
      isActive: true,
    },
    orderBy: {
      date: 'asc',
    },
  });

  if (!nextGame) {
    return null;
  }

  const formattedDate = new Date(nextGame.date).toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const formattedTime = new Date(nextGame.date).toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <section className="border-y border-zinc-800 bg-zinc-900">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16">
        <div className="rounded-3xl border border-red-500/20 bg-zinc-950 p-6 shadow-2xl sm:p-8 md:p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-red-500 sm:text-sm">
            Следующая игра
          </p>

          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
	          📅 {formattedDate} • {formattedTime}
          </h2>

          <p className="mb-6 max-w-2xl text-sm text-zinc-300 sm:text-base">
            📍 {nextGame.location}
          </p>

          <button className="w-full rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200 sm:w-auto">
            Забронировать место
          </button>
        </div>
      </div>
    </section>
  );
}