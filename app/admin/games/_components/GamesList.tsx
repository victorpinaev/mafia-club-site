'use client';

import { Game } from '@prisma/client';
import { deleteGame } from '../_actions/gameActions';
import { useState } from 'react';
import { formatGameDate } from '@/lib/format-game-date';
import { useEffect } from 'react';

interface GamesListProps {
  games: Game[];
}

export default function GamesList({ games: initialGames }: GamesListProps) {
  const [games, setGames] = useState(initialGames);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    setGames(initialGames);
  }, [initialGames]);

  const handleDelete = async (id: number) => {
    if (!confirm('Вы уверены, что хотите удалить эту игру?')) return;

    setDeletingId(id);
    try {
      const result = await deleteGame(id);
      if (result.success) {
        setGames((prev) => prev.filter((g) => g.id !== id));
      } else {
        alert(result.error || 'Ошибка при удалении');
      }
    } catch (err) {
      alert('Ошибка при удалении');
    } finally {
      setDeletingId(null);
    }
  };

  if (games.length === 0) {
    return <p className="text-zinc-500">Нет созданных игр</p>;
  }

  return (
    <div className="space-y-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="bg-zinc-800 border border-zinc-700 rounded p-4"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-white font-bold">📅 {formatGameDate(game.date)}</div>
            <button
              onClick={() => handleDelete(game.id)}
              disabled={deletingId === game.id}
              className="text-red-500 hover:text-red-400 disabled:text-red-700 text-sm"
            >
              {deletingId === game.id ? 'Удаление...' : 'Удалить'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
