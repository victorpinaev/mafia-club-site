import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Разрешить доступ к странице логина
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Проверить cookie для других админ маршрутов
  if (pathname.startsWith('/admin')) {
    const adminAuth = request.cookies.get('adminAuthenticated')?.value;
    if (!adminAuth) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
