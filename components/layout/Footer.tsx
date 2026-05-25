import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* LOGO + DESCRIPTION */}
        <div>
          <h2 className="mb-4 text-2xl font-black">
            MAFIA
            <span className="text-red-500">LYUBOTIN</span>
          </h2>

          <p className="max-w-sm text-zinc-400">
            Клуб спортивной мафии. Турнирные и дружеские игры,
            сильная атмосфера и настоящее противостояние умов.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Навигация
          </h3>

          <ul className="space-y-3 text-zinc-400">
            <li>
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Главная
              </Link>
            </li>

            <li>
              <Link
                href="/photos"
                className="transition hover:text-white"
              >
                Фото
              </Link>
            </li>

            <li>
              <Link
                href="/videos"
                className="transition hover:text-white"
              >
                Видео
              </Link>
            </li>

            <li>
              <Link
                href="/contacts"
                className="transition hover:text-white"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACTS */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Контакты
          </h3>

          <div className="space-y-3 text-zinc-400">
            <p>+380 XX XXX XX XX</p>
            <p>Telegram: @mafia_kharkiv</p>
            <p>Instagram: @mafia_kharkiv</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 Mafia Lyubotin. Все права защищены.</p>

          <p>Сайт клуба спортивной мафии</p>
        </div>
      </div>
    </footer>
  );
}