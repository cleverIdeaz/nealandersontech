import { Navigation } from "@/components/navigation";
import { Music } from "@/components/music";

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Music />
      </div>
    </div>
  );
}
