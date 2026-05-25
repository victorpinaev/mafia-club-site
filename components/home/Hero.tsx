export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top]"
        style={{
          backgroundImage: "url('/images/hero/hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/80 md:bg-black/70" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-16 sm:px-6 md:min-h-[calc(100vh-96px)] md:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red-500 sm:text-sm">
            Клуб спортивной мафии
          </p>

          <h1 className="mb-6 text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl lg:text-8xl">
            Спортивная
            <span className="mt-2 block md:mt-4">мафия</span>
            <span className="mt-2 block text-red-500 md:mt-4">
              в Люботине
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            Mafia Lyubotin — это эмоции, стратегия и атмосфера настоящей
            спортивной мафии.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="rounded-2xl bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide transition hover:bg-red-500 sm:px-9 sm:text-base">
              Записаться на игру
            </button>

            <button className="rounded-2xl border border-zinc-600 px-7 py-4 text-sm font-bold uppercase tracking-wide transition hover:border-white hover:bg-white/10 sm:px-9 sm:text-base">
              Смотреть фото
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}