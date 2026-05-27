export default function ContactsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mb-10 sm:mb-14 md:mb-16">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-red-500 sm:text-sm sm:tracking-[0.3em]">
          Контакты
        </p>

        <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-6xl">
          Связаться с нами
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
          Записывайся на ближайшую игру, задавай вопросы и приходи в клуб
          спортивной мафии в Люботине.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:rounded-3xl sm:p-8">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Информация</h2>

          <div className="space-y-5 text-zinc-300">
            <div>
              <p className="mb-1 text-sm text-zinc-500">Телефон</p>
              <a
                href="tel:+380XXXXXXXXX"
                className="break-words text-lg font-semibold transition hover:text-red-500 sm:text-xl"
              >
                +380 XX XXX XX XX
              </a>
            </div>

            <div>
              <p className="mb-1 text-sm text-zinc-500">Telegram</p>
              <a
                href="https://t.me/mafia_lyubotin"
                target="_blank"
                className="break-words text-lg font-semibold transition hover:text-red-500 sm:text-xl"
              >
                @mafia_lyubotin
              </a>
            </div>

            <div>
              <p className="mb-1 text-sm text-zinc-500">Instagram</p>
              <a
                href="https://instagram.com/mafia_lyubotin"
                target="_blank"
                className="break-words text-lg font-semibold transition hover:text-red-500 sm:text-xl"
              >
                @mafia_lyubotin
              </a>
            </div>

            <div>
              <p className="mb-1 text-sm text-zinc-500">Адрес</p>
              <p className="text-lg font-semibold sm:text-xl">
                Люботин, место проведения игр
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 sm:rounded-3xl">
          <iframe
            src="https://www.google.com/maps?q=Lyubotyn%20Ukraine&output=embed"
            className="h-[320px] w-full sm:h-[420px] lg:h-full lg:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </main>
  );
}