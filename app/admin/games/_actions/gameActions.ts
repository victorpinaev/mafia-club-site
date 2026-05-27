'use server';

import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createGame(
  title: string,
  dateString: string,
  location: string,
  description?: string
) {
  try {
    // Валидация
    if (!title?.trim()) throw new Error('Название обязательно');
    if (!dateString) throw new Error('Дата обязательна');
    if (!location?.trim()) throw new Error('Локация обязательна');

    // Преобразовать datetime-local в ISO Date
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error('Неверный формат даты');
    }

    const game = await db.game.create({
      data: {
        title: title.trim(),
        date,
        location: location.trim(),
        description: description?.trim() || null,
        isActive: true,
      },
    });

    // Перезагрузить кэш
    revalidatePath('/admin/games');
    revalidatePath('/');

    return { success: true, data: game };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ошибка при создании игры',
    };
  }
}

export async function deleteGame(id: number) {
  try {
    await db.game.delete({
      where: { id },
    });

    // Перезагрузить кэш
    revalidatePath('/admin/games');
    revalidatePath('/');

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Ошибка при удалении игры',
    };
  }
}
