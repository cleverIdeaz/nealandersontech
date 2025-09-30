# Floating Card Framework

A revolutionary 3D floating card interface system for building immersive web experiences.

## 🌟 Features

- **3D Floating Cards**: Beautiful card-based navigation with depth and perspective
- **Space Theme Engine**: Customizable space backgrounds with twinkling stars
- **Gesture Controls**: Touch and mouse support for intuitive interaction
- **Responsive Design**: Adapts to all screen sizes and orientations
- **Community Integration**: Built-in social features and user management
- **API Framework**: RESTful APIs with authentication and rate limiting
- **Template System**: Pre-built card templates for rapid development

## 🚀 Quick Start

### Installation

```bash
npm install @nealandersontech/floating-card-framework
```

### Basic Usage

```tsx
import { SpaceLayout, FloatingCardAPI } from '@nealandersontech/floating-card-framework';

function MyApp() {
  return (
    <SpaceLayout
      cards={[
        {
          id: 'about',
          title: 'About',
          subtitle: 'Who I Am',
          icon: 'User',
          content: <AboutComponent />,
          position: { x: 0, y: 0, z: 0, rotation: 0 },
          size: { width: 300, height: 400 }
        }
      ]}
    />
  );
}
```

### API Integration

```tsx
import { useFloatingCards, api } from '@nealandersontech/floating-card-framework';

function CardManager() {
  const { cards, createCard, updateCard, deleteCard } = useFloatingCards();

  const handleCreateCard = async () => {
    await createCard({
      title: 'New Card',
      subtitle: 'Card Description',
      icon: 'Code',
      content: <div>Card Content</div>,
      position: { x: 0, y: 0, z: 0, rotation: 0 },
      size: { width: 300, height: 400 }
    });
  };

  return (
    <div>
      {cards.map(card => (
        <div key={card.id}>{card.title}</div>
      ))}
      <button onClick={handleCreateCard}>Create Card</button>
    </div>
  );
}
```

## 🎨 Customization

### Themes

```tsx
const customTheme = {
  background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 100%)',
  cardGlow: '#00d4ff',
  starColor: '#ffffff',
  cardBackground: '#1a1a1a'
};

<SpaceLayout theme={customTheme} />
```

### Card Styling

```css
.floating-card {
  background: var(--card-bg);
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
  border: 1px solid rgba(0, 212, 255, 0.2);
}
```

## 📱 Responsive Design

The framework automatically adapts to different screen sizes:

- **Desktop**: Full 3D experience with hover effects
- **Tablet**: Optimized card sizes and touch gestures
- **Mobile**: Compact layout with touch-friendly interactions
- **Landscape**: Adjusted card positioning for horizontal viewing

## 🔧 API Reference

### CardData Interface

```typescript
interface CardData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: React.ReactNode;
  position: { x: number; y: number; z: number; rotation: number };
  size: { width: number; height: number };
  metadata?: {
    tags: string[];
    category: string;
    priority: number;
    createdAt: Date;
    updatedAt: Date;
  };
}
```

### FloatingCardAPI Methods

- `createCard(card: Omit<CardData, 'id'>): Promise<CardData>`
- `updateCard(id: string, updates: Partial<CardData>): Promise<CardData>`
- `deleteCard(id: string): Promise<void>`
- `getCards(): Promise<CardData[]>`
- `createStack(stack: Omit<CardStack, 'id'>): Promise<CardStack>`
- `updateStack(id: string, updates: Partial<CardStack>): Promise<CardStack>`
- `getStacks(): Promise<CardStack[]>`

## 🌐 Community Features

### Retronyms Community Integration

- **User Management**: Secure authentication and user profiles
- **Social Features**: Follow other developers and share card stacks
- **Template Sharing**: Upload and download card templates
- **Beta Testing**: Early access to new features
- **Reputation System**: Earn points for contributions

### Getting Started with Community

```tsx
import { useCommunity } from '@nealandersontech/floating-card-framework';

function CommunityFeatures() {
  const { members, joinCommunity, createTemplate } = useCommunity();

  return (
    <div>
      <h2>Community Members: {members.length}</h2>
      <button onClick={joinCommunity}>Join Community</button>
    </div>
  );
}
```

## 💰 Pricing

### Starter Package - $99/month
- Floating Card System
- Space Theme Engine
- Basic Responsive Design
- Community Support
- 5 Projects

### Professional Package - $299/month
- Everything in Starter
- Advanced Animations
- Custom Themes
- Priority Support
- Unlimited Projects
- API Access

### Enterprise Package - Custom Pricing
- Everything in Professional
- White-label Solution
- Custom Development
- Dedicated Support
- On-premise Deployment
- SLA Guarantee

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Setup

```bash
git clone https://github.com/nealandersontech/floating-card-framework
cd floating-card-framework
npm install
npm run dev
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.nealandersontech.com](https://docs.nealandersontech.com)
- **Community**: [community.nealandersontech.com](https://community.nealandersontech.com)
- **Email**: support@nealandersontech.com
- **Discord**: [Join our Discord](https://discord.gg/nealandersontech)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Framer Motion](https://www.framer.com/motion/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Community powered by [Retronyms](https://retronyms.com/)

---

**Made with ❤️ by Neal Anderson**

*Building the future of web interfaces, one floating card at a time.*
