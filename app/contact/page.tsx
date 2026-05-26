import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
