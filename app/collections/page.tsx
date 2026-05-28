import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Collections } from "@/components/sections/collections";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Collections />
      </main>
      <Footer />
    </>
  );
}
