import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Projects />
      </div>
    </div>
  );
}
