"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Code, 
  FileText, 
  MessageCircle, 
  Music, 
  DollarSign,
  Coffee,
  X,
  Layers
} from "lucide-react";

// Card data structure
interface CardData {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  content: React.ReactNode;
  position: { x: number; y: number; z: number; rotation: number };
  size: { width: number; height: number };
}

// Import content components
import { About } from "./about";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Skills } from "./skills";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Music as MusicSection } from "./music";
import { Services } from "./services";
import { Framework } from "./framework";

export function SpaceLayout() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [draggedCard, setDraggedCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize cards with 3D positions
  useEffect(() => {
    const initialCards: CardData[] = [
      {
        id: "about",
        title: "About",
        subtitle: "Who I Am",
        icon: User,
        content: <About />,
        position: { x: 0, y: 0, z: 0, rotation: 0 },
        size: { width: 300, height: 400 }
      },
      {
        id: "projects",
        title: "Projects",
        subtitle: "What I Build",
        icon: Code,
        content: <Projects />,
        position: { x: 50, y: -30, z: -20, rotation: 5 },
        size: { width: 300, height: 400 }
      },
      {
        id: "experience",
        title: "Experience",
        subtitle: "Where I've Been",
        icon: Briefcase,
        content: <Experience />,
        position: { x: -50, y: 20, z: -40, rotation: -5 },
        size: { width: 300, height: 400 }
      },
      {
        id: "skills",
        title: "Skills",
        subtitle: "What I Know",
        icon: Code,
        content: <Skills />,
        position: { x: 80, y: 40, z: -60, rotation: 8 },
        size: { width: 300, height: 400 }
      },
      {
        id: "music",
        title: "Music",
        subtitle: "What I Create",
        icon: Music,
        content: <MusicSection />,
        position: { x: -80, y: -20, z: -80, rotation: -8 },
        size: { width: 300, height: 400 }
      },
      {
        id: "blog",
        title: "Writing",
        subtitle: "What I Think",
        icon: FileText,
        content: <Blog />,
        position: { x: 0, y: 60, z: -100, rotation: 0 },
        size: { width: 300, height: 400 }
      },
      {
        id: "contact",
        title: "Contact",
        subtitle: "Get In Touch",
        icon: MessageCircle,
        content: <Contact />,
        position: { x: 100, y: -50, z: -120, rotation: 10 },
        size: { width: 300, height: 400 }
      },
      {
        id: "services",
        title: "Services",
        subtitle: "What I Offer",
        icon: DollarSign,
        content: <Services />,
        position: { x: -100, y: 50, z: -140, rotation: -10 },
        size: { width: 300, height: 400 }
      },
      {
        id: "framework",
        title: "Framework",
        subtitle: "App Template",
        icon: Layers,
        content: <Framework />,
        position: { x: 120, y: -60, z: -160, rotation: 12 },
        size: { width: 300, height: 400 }
      }
    ];
    setCards(initialCards);
  }, []);


  const handleCardDrag = (cardId: string, delta: { x: number; y: number }) => {
    setCards(prev => prev.map(card => 
      card.id === cardId 
        ? { 
            ...card, 
            position: { 
              ...card.position, 
              x: card.position.x + delta.x, 
              y: card.position.y + delta.y 
            } 
          }
        : card
    ));
  };

  const handleMouseDown = (e: React.MouseEvent, cardId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setDraggedCard(cardId);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !draggedCard) return;
    const delta = {
      x: (e.clientX - dragOffset.x) * 0.1,
      y: (e.clientY - dragOffset.y) * 0.1
    };
    handleCardDrag(draggedCard, delta);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedCard(null);
  };

  const handleCardClick = (cardId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDragging) {
      setSelectedCard(selectedCard === cardId ? null : cardId);
    }
  };

  const handleTouchStart = (e: React.TouchEvent, cardId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setDraggedCard(cardId);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !draggedCard) return;
    e.preventDefault();
    const delta = {
      x: (e.touches[0].clientX - dragOffset.x) * 0.1,
      y: (e.touches[0].clientY - dragOffset.y) * 0.1
    };
    handleCardDrag(draggedCard, delta);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setDraggedCard(null);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Space Background */}
      <div className="space-background" />
      
      {/* Main Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-screen gesture-area"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Floating Cards */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="card-stack relative">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  className="floating-card absolute cursor-pointer"
                  style={{
                    width: card.size.width,
                    height: card.size.height,
                    left: card.position.x,
                    top: card.position.y,
                    zIndex: cards.length - index,
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: selectedCard === card.id ? 1 : 0.7,
                    scale: selectedCard === card.id ? 1.1 : 1,
                    rotateY: card.position.rotation,
                    rotateX: selectedCard === card.id ? 0 : 5,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: card.position.rotation + 2,
                    zIndex: 1000
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseDown={(e) => handleMouseDown(e, card.id)}
                  onClick={(e) => handleCardClick(card.id, e)}
                  onTouchStart={(e) => handleTouchStart(e, card.id)}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                        <p className="text-sm text-gray-400">{card.subtitle}</p>
                      </div>
                    </div>
                    
                    {selectedCard === card.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex-1 overflow-y-auto"
                      >
                        {card.content}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Main Title Card */}
        <motion.div
          className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 floating-card"
          style={{ width: "min(400px, 90vw)", height: "auto", minHeight: 100 }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="p-4 md:p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Neal Anderson</h1>
            <p className="text-base md:text-lg text-cyan-400">Musician • Maker • Builder</p>
            <p className="text-xs md:text-sm text-gray-400 mt-2">
              Creative technologist crafting digital experiences
            </p>
          </div>
        </motion.div>

        {/* Buy Me a Coffee - Subtle CTA */}
        <motion.a
          href="https://buymeacoffee.com/mrmidi"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 md:bottom-8 right-4 md:right-8 floating-card flex items-center space-x-2 px-3 md:px-4 py-2"
          style={{ width: "auto", height: "auto" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Coffee className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
          <span className="text-xs md:text-sm text-white">Support</span>
        </motion.a>

        {/* Instructions */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-xs md:text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p className="hidden md:block">Click cards to explore • Drag to move • Hover to glow</p>
          <p className="md:hidden">Tap cards to explore • Drag to move</p>
        </motion.div>
      </div>
    </div>
  );
}
