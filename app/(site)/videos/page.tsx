import { videos } from "@/data/videos";

export default function VideosPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mb-10 sm:mb-14 md:mb-16">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-red-500 sm:text-sm sm:tracking-[0.3em]">
          Видео
        </p>

        <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-6xl">
          Видео с игр
        </h1>

        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
          Лучшие моменты турниров, игровые эмоции и атмосфера клуба Mafia
          Lyubotin.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {videos.map((video) => (
          <article
            key={video.id}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl sm:rounded-3xl"
          >
            <div className="aspect-video bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-5 sm:p-6">
              <h2 className="text-lg font-bold sm:text-xl">
                {video.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Видео с игр клуба спортивной мафии в Люботине.
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}