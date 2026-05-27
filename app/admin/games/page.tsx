import { db } from '@/lib/prisma';
import CreateGameForm from './_components/CreateGameForm';
import GamesList from './_components/GamesList';

export default async function AdminGamesPage() {
  const games = await db.game.findMany({
    orderBy: { date: 'asc' },
  });

  return (
    <div className="min-h-screen bg-black pt-8 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-red-500 mb-8">Управление играми</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Форма создания */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Создать новую игру</h2>
            <CreateGameForm />
          </div>

          {/* Список игр */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Все игры</h2>
            <GamesList games={games} />
          </div>
        </div>
      </div>
    </div>
  );
}
