import { Navigation } from "@/components/navigation";
import { MainLayout } from "@/components/main-layout";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <MainLayout />
    </div>
  );
}