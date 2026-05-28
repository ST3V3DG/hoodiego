import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonial";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
