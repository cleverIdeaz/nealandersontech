import { Navigation } from "@/components/navigation";
import { Skills } from "@/components/skills";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Skills />
      </div>
    </div>
  );
}
