import { Navigation } from "@/components/navigation";
import { Experience } from "@/components/experience";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Experience />
      </div>
    </div>
  );
}
