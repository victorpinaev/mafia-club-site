"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { title: "Главная", href: "/" },
  { title: "Фото", href: "/photos" },
  { title: "Видео", href: "/videos" },
  { title: "Контакты", href: "/contacts" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:h-24 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.png"
            alt="Mafia Lyubotin"
            width={56}
            height={56}
            className="object-contain md:h-[70px] md:w-[70px]"
          />

          <div>
            <h2 className="text-3xl font-black leading-none tracking-wide md:text-5xl">
              MAFIA
            </h2>
            <p className="mt-1 text-xs tracking-[0.35em] text-red-500 md:text-sm">
              LYUBOTIN
            </p>
          </div>
        </Link>

        <nav className="hidden gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-zinc-300 transition hover:text-red-500"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <button className="hidden rounded-2xl bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide transition hover:bg-red-500 lg:block">
          Записаться
        </button>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-zinc-700 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Открыть меню"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-zinc-800 bg-black lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-zinc-800 py-4 text-lg font-semibold uppercase tracking-wide text-zinc-300 transition hover:text-red-500"
              >
                {link.title}
              </Link>
            ))}

            <button className="hidden rounded-2xl bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide transition hover:bg-red-500 lg:block">
                Записаться
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}