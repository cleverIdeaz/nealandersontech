import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Contact />
      </div>
    </div>
  );
}
