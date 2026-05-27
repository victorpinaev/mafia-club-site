'use server';

import { db } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { parseEuropeKyivDateTime } from '@/lib/date';

export async function createGame(dateString: string) {
  try {
    // Валидация
    if (!dateString) throw new Error('Дата обязательна');

    // Преобразовать datetime-local в дату UTC, используя часовой пояс Europe/Kyiv
    const date = parseEuropeKyivDateTime(dateString);
    if (isNaN(date.getTime())) {
      throw new Error('Неверный формат даты');
    }

    const game = await db.game.create({
      data: {
        date,
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
