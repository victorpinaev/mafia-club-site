'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateAdminPin } from './_actions/loginActions';

export default function AdminLoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await validateAdminPin(pin);
      if (result.success) {
        router.push('/admin/games');
      } else {
        setError(result.error || 'Неверный пин-код');
      }
    } catch (err) {
      setError('Ошибка при входе');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-red-500 mb-8 text-center">
            Админ Панель
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Пин-код
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                disabled={loading}
                className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-2 rounded focus:outline-none focus:border-red-500"
                placeholder="Введите пин-код"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-700 text-white font-medium py-2 px-4 rounded transition"
            >
              {loading ? 'Проверка...' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
