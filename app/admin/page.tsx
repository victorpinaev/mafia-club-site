'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const adminAuth = cookieStore.get('adminAuthenticated')?.value;

  if (adminAuth === 'true') {
    redirect('/admin/games');
  } else {
    redirect('/admin/login');
  }

  return null;
}
