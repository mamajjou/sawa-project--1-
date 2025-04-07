"use client"

import Image from "next/image"

export function Hero() {
  function scrollToElement(selector: string, duration: number = 1500) {
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
          <div className="rounded-2xl overflow-hidden w-full max-w-7xl mx-auto">
            <Image
              src="/images/sawa-hero.png"
              alt="SAWA Projekt - Zwei Männer präsentieren eine Tafel mit SAWA und Werten wie Zufriedenheit, Inspiration, Hoffnung, Gemeinsam, Neugierde und Vielfalt"
              width={1600}
              height={900}
              priority
            className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="mt-8 text-center">
            <h1 className="sr-only">SAWA: Gemeinsam gegen Diskriminierung</h1>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="#wer-wir-sind"
                className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-full hover:bg-purple-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#wer-wir-sind")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                Mehr erfahren
              </a>
              <a
                href="#kontakt"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-full hover:opacity-90 transition-opacity"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement("#kontakt", 1500);
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

