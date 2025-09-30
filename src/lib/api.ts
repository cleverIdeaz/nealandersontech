// API Framework for Floating Card System
export interface CardData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  content: any;
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

export interface CardStack {
  id: string;
  name: string;
  cards: CardData[];
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    theme: 'space' | 'minimal' | 'neon' | 'custom';
    cardSize: 'small' | 'medium' | 'large';
    animations: boolean;
    soundEffects: boolean;
  };
  stacks: CardStack[];
}

export interface CommunityMember {
  id: string;
  user: User;
  role: 'admin' | 'moderator' | 'member' | 'beta-tester';
  joinedAt: Date;
  contributions: number;
  reputation: number;
}

// API Functions
export class FloatingCardAPI {
  private baseUrl: string;
  private apiKey?: string;

  constructor(baseUrl: string, apiKey?: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  // Card Management
  async createCard(card: Omit<CardData, 'id'>): Promise<CardData> {
    const response = await this.request('/cards', {
      method: 'POST',
      body: JSON.stringify({
        ...card,
        id: this.generateId(),
        metadata: {
          ...card.metadata,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    });
    return response;
  }

  async updateCard(id: string, updates: Partial<CardData>): Promise<CardData> {
    const response = await this.request(`/cards/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        ...updates,
        metadata: {
          ...updates.metadata,
          updatedAt: new Date()
        }
      })
    });
    return response;
  }

  async deleteCard(id: string): Promise<void> {
    await this.request(`/cards/${id}`, {
      method: 'DELETE'
    });
  }

  async getCards(): Promise<CardData[]> {
    const response = await this.request('/cards');
    return response;
  }

  // Stack Management
  async createStack(stack: Omit<CardStack, 'id'>): Promise<CardStack> {
    const response = await this.request('/stacks', {
      method: 'POST',
      body: JSON.stringify({
        ...stack,
        id: this.generateId()
      })
    });
    return response;
  }

  async updateStack(id: string, updates: Partial<CardStack>): Promise<CardStack> {
    const response = await this.request(`/stacks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates)
    });
    return response;
  }

  async getStacks(): Promise<CardStack[]> {
    const response = await this.request('/stacks');
    return response;
  }

  // User Management
  async createUser(user: Omit<User, 'id'>): Promise<User> {
    const response = await this.request('/users', {
      method: 'POST',
      body: JSON.stringify({
        ...user,
        id: this.generateId()
      })
    });
    return response;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const response = await this.request(`/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updates)
    });
    return response;
  }

  async getUser(id: string): Promise<User> {
    const response = await this.request(`/users/${id}`);
    return response;
  }

  // Community Features
  async getCommunityMembers(): Promise<CommunityMember[]> {
    const response = await this.request('/community/members');
    return response;
  }

  async joinCommunity(userId: string): Promise<CommunityMember> {
    const response = await this.request('/community/join', {
      method: 'POST',
      body: JSON.stringify({ userId })
    });
    return response;
  }

  // Template Management
  async getTemplates(): Promise<CardData[]> {
    const response = await this.request('/templates');
    return response;
  }

  async createTemplate(card: CardData): Promise<CardData> {
    const response = await this.request('/templates', {
      method: 'POST',
      body: JSON.stringify(card)
    });
    return response;
  }

  // Private helper methods
  private async request(endpoint: string, options: RequestInit = {}): Promise<any> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(this.apiKey && { 'Authorization': `Bearer ${this.apiKey}` }),
      ...options.headers
    };

    const response = await fetch(url, {
      ...options,
      headers
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Default API instance
export const api = new FloatingCardAPI(
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  process.env.NEXT_PUBLIC_API_KEY
);

// React hooks for API integration
export function useFloatingCards() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCards = async () => {
      try {
        setLoading(true);
        const data = await api.getCards();
        setCards(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load cards');
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  const createCard = async (card: Omit<CardData, 'id'>) => {
    try {
      const newCard = await api.createCard(card);
      setCards(prev => [...prev, newCard]);
      return newCard;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create card');
      throw err;
    }
  };

  const updateCard = async (id: string, updates: Partial<CardData>) => {
    try {
      const updatedCard = await api.updateCard(id, updates);
      setCards(prev => prev.map(card => card.id === id ? updatedCard : card));
      return updatedCard;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update card');
      throw err;
    }
  };

  const deleteCard = async (id: string) => {
    try {
      await api.deleteCard(id);
      setCards(prev => prev.filter(card => card.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete card');
      throw err;
    }
  };

  return {
    cards,
    loading,
    error,
    createCard,
    updateCard,
    deleteCard
  };
}

// Import React hooks
import { useState, useEffect } from 'react';
