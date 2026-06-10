import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Collections } from "@/components/sections/collections";

export default function Page() {
  return (
    <>
      <Header className="text-zinc-900" />
      <main>
        <Collections />
      </main>
      <Footer />
    </>
  );
}
