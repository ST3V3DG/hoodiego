import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Checkout } from "@/components/sections/checkout";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Checkout />
      </main>
      <Footer />
    </>
  );
}
