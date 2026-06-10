import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <Header className="text-zinc-900" />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
