import { Header } from "@/components/header";
import { MainLayout } from "@/components/main-layout";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  );
}