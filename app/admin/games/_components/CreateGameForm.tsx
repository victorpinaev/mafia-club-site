'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createGame } from '../_actions/gameActions';

export default function CreateGameForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    date: '',
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      // Валидация
      if (!formData.date) throw new Error('Укажите дату');

      const result = await createGame(formData.date);

      if (result.success) {
        setSuccess('Игра успешно создана!');
        setFormData({ date: '' });
        // Обновить страницу, чтобы серверный компонент перезагрузил данные
        router.refresh();
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(result.error || 'Ошибка при создании');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-zinc-300 text-sm mb-2">Дата и время *</label>
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          disabled={loading}
          className="w-full bg-zinc-800 border border-zinc-700 text-white px-3 py-2 rounded focus:outline-none focus:border-red-500"
        />
      </div>

      {error && (
        <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded">{error}</div>
      )}

      {success && (
        <div className="text-green-500 text-sm bg-green-500/10 p-3 rounded">{success}</div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-700 text-white font-medium py-2 px-4 rounded transition"
      >
        {loading ? 'Создание...' : 'Создать игру'}
      </button>
    </form>
  );
}
