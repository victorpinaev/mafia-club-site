import Link from "next/link";

const adminLinks = [
  { title: "Игры", href: "/admin/games" },
  { title: "Тексты", href: "/admin/content" },
  { title: "Фото", href: "/admin/photos" },
  { title: "Видео", href: "/admin/videos" },
  { title: "Контакты", href: "/admin/contacts" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="flex min-h-screen">
        <aside className="flex w-72 flex-col border-r border-zinc-800 bg-zinc-900 px-6 py-8">
          <div className="mb-6">
            <h1 className="text-2xl font-black">
              MAFIA <span className="text-red-500">ADMIN</span>
            </h1>
            <p className="mt-2 text-sm text-zinc-400">Панель управления</p>
          </div>

          <Link
            href="/"
            className="mb-6 block rounded-xl border border-zinc-800 px-4 py-3 text-center text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
          >
            ← Вернуться на сайт
          </Link>

          <div className="mb-6 border-b border-zinc-800" />

          <nav className="space-y-2">
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 px-8 py-8">{children}</main>
      </div>
    </div>
  );
}