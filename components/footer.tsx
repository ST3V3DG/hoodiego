import Link from "next/link";
import { BackToTopButton } from "@/components/back-to-top-button";

export function Footer() {
  return (
    <footer className="w-full bg-black text-zinc-900 overflow-hidden border-t border-zinc-200 relative px-6">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,var(--primary)_100%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto py-32 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tight text-pretty mb-6 text-primary-foreground">
              Have questions? Let's talk about your next order.
            </h2>
            <Link
              href="mailto:contact@hoodiego.store"
              className="text-lg font-medium border-b-2 text-muted-foreground border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all"
            >
              contact@hoodiego.store
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground mb-4">
                Address
              </p>
              <address className="not-italic text-muted-foreground text-sm space-y-1">
                <p>12 Fashion Street</p>
                <p>75001 Street, City</p>
              </address>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground mb-4">
                Follow Us
              </p>
              <nav className="flex flex-col gap-2 text-muted-foreground">
                <Link href="#" className="text-sm font-medium hover:underline">
                  Instagram
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline">
                  TikTok
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline">
                  Twitter
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <h1 className="text-[12vw] font-bold tracking-tighter text-primary select-none pointer-events-none leading-none -mb-[2vw]">
            HoodieGo
          </h1>
          <div className="flex justify-between items-center border-t backdrop-blur border-zinc-200 pt-8 pb-6 relative z-10">
            <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground">
              © {new Date().getFullYear()} HoodieGo{" "}
            </span>
            <div className="flex gap-8 items-center">
              <span className="text-xs  text-primary-foreground">
                Made with ❤️ in Country
              </span>
              <BackToTopButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
