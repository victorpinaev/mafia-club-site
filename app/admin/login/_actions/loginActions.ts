'use server';

import { cookies } from 'next/headers';

export async function validateAdminPin(pin: string) {
  const correctPin = process.env.ADMIN_PIN;

  if (!correctPin) {
    return { success: false, error: 'Admin PIN не установлен' };
  }

  if (pin !== correctPin) {
    return { success: false, error: 'Неверный пин-код' };
  }

  // Установить cookie на 24 часа
  const cookieStore = await cookies();
  cookieStore.set('adminAuthenticated', 'true', {
    maxAge: 86400,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  });

  return { success: true };
}
