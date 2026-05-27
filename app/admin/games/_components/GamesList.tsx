'use client';

import { Game } from '@prisma/client';
import { deleteGame } from '../_actions/gameActions';
import { useState } from 'react';

interface GamesListProps {
  games: Game[];
}

export default function GamesList({ games: initialGames }: GamesListProps) {
  const [games, setGames] = useState(initialGames);
  const [deletingId, setDeletingId] = useState<number | null>(null);

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
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-white font-bold">{game.title}</h3>
            <button
              onClick={() => handleDelete(game.id)}
              disabled={deletingId === game.id}
              className="text-red-500 hover:text-red-400 disabled:text-red-700 text-sm"
            >
              {deletingId === game.id ? 'Удаление...' : 'Удалить'}
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            📅 {new Date(game.date).toLocaleDateString('ru-RU')} ·{' '}
            {new Date(game.date).toLocaleTimeString('ru-RU', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
          <p className="text-zinc-400 text-sm">📍 {game.location}</p>
          {game.description && (
            <p className="text-zinc-500 text-sm mt-2">{game.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
