"use client"

import Image from "next/image"

export function Hero() {
  function scrollToElement(selector: string, duration: number = 800) {
    const target = document.querySelector(selector);
    if (!target) return;
    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime: number | null = null;

    function animate(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, start + distance * progress);
      if (timeElapsed < duration) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  return (
    <section className="relative pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden w-full max-w-7xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <Image
                src="/SAWACI.svg"
                alt="SAWA Logo"
                width={300}
                height={300}
                className="w-60 h-60 md:w-72 md:h-72 object-contain"
              />
            </div>
            <Image
              src="/images/sawa-hero.jpg"
              alt="SAWA Projekt - Zwei Männer präsentieren eine Tafel mit SAWA und Werten wie Zufriedenheit, Inspiration, Hoffnung, Gemeinsam, Neugierde und Vielfalt"
              width={1600}
              height={900}
              priority
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center space-x-6">
              <a
                href="#wer-wir-sind"
                className="px-8 py-4 text-lg bg-white text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition-colors shadow-lg shadow-black/20"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement("#wer-wir-sind", 800);
                }}
              >
                Mehr erfahren
              </a>
              <a
                href="#kontakt"
                className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-black/20"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement("#kontakt");
                }}
              >
                Kontakt
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

