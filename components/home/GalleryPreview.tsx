import Image from "next/image";

const photos = [
  "/images/games/gal_1.jpg",
  "/images/games/gal_2.jpg",
  "/images/games/gal_3.jpg",
];

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
          {photos.map((photo) => (
            <div
              key={photo}
              className="group overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5]">
                <Image
                  src={photo}
                  alt="Mafia game"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}