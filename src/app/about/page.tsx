import { Navigation } from "@/components/navigation";
import { About } from "@/components/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <About />
      </div>
    </div>
  );
}
