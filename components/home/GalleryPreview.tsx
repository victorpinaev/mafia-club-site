export default function GalleryPreview() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-20">
        <div className="mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-red-500 sm:text-sm">
            Атмосфера игр
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Фото с прошедших встреч
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="aspect-[4/5] rounded-3xl bg-zinc-800" />
          <div className="aspect-[4/5] rounded-3xl bg-zinc-800" />
          <div className="aspect-[4/5] rounded-3xl bg-zinc-800 sm:col-span-2 lg:col-span-1" />
        </div>
      </div>
    </section>
  );
}