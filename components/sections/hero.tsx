import {
  RollRevealButton,
  RollRevealButtonText,
} from "@/components/roll-reveal-button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 inset-0 object-cover aspect-video size-full"
        poster="/images/hoodie.webp"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Main Content */}
      <main className="relative h-screen px-8 pb-12 flex flex-col justify-between">
        {/* Top Headline */}
        <div className="mt-20 mix-blend-exclusion">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] max-w-md text-primary">
            We are comfort
          </h1>
        </div>

        {/* Center Logo/Name */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-2xl md:text-3xl tracking-[0.4em] font-light uppercase">
            HoodieGo
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-8">
          {/* Bottom Left Info */}
          <div className="max-w-70">
            <h3 className="text-xl font-bold mb-4 leading-tight">
              Your
              <br />
              comfort
              <br />
              redefined
            </h3>
            <div className="w-8 h-px bg-white/40 mb-6"></div>
            <p className="text-[10px] leading-relaxed text-gray-400 uppercase tracking-wider">
              Every hoodie is designed around your comfort, style, and everyday
              life—so you can focus on what truly matters while looking your
              best.
            </p>
          </div>

          {/* Center Button */}
          <div className="flex justify-center mb-4">
            <RollRevealButton>
              <RollRevealButtonText text="Shop Now" />
            </RollRevealButton>
          </div>

          {/* Bottom Right Headline */}
          <div className="text-right">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-primary mix-blend-exclusion">
              We are style
            </h1>
          </div>
        </div>
      </main>

      {/* Hero Footer / Scroll Indicator */}
      <div className="px-8">
        <div className="border-t border-white/20 pt-4 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <span className="block w-2 h-px bg-gray-500"></span>
              <span className="block w-2 h-px bg-gray-500"></span>
            </div>
            <span>Scroll Down</span>
          </div>
          <span>To explore</span>
        </div>
      </div>
    </section>
  );
}
