import { users, contactSubmissions, testimonials, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private testimonials: Map<number, Testimonial>;
  private currentUserId: number;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;

    // Add sample testimonials
    this.addSampleTestimonials();
  }

  private addSampleTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Richardson",
        location: "Manhattan, NY",
        message: "The team at Luxe Interiors transformed our home beyond our wildest dreams. Every detail was carefully considered, and the result is a space that truly reflects our personality and lifestyle.",
        initials: "SR"
      },
      {
        name: "Michael Johnson",
        location: "CEO, Tech Solutions",
        message: "Professional, creative, and incredibly attentive to detail. The renovation of our office space has significantly improved our team's productivity and morale. Highly recommended!",
        initials: "MJ"
      },
      {
        name: "David & Lisa Wong",
        location: "Beverly Hills, CA",
        message: "From concept to completion, the process was seamless. The designers listened to our needs and created a stunning kitchen that has become the heart of our home. Absolutely love it!",
        initials: "DW"
      },
      {
        name: "Elena Martinez",
        location: "Restaurant Owner, Miami",
        message: "The attention to detail and level of service exceeded our expectations. Our new restaurant design has created an atmosphere that our customers absolutely love. Thank you!",
        initials: "EM"
      },
      {
        name: "Robert Thompson",
        location: "Chicago, IL",
        message: "Working with Luxe Interiors was an absolute pleasure. They managed every aspect of our home renovation with precision and care. The final result is beyond beautiful!",
        initials: "RT"
      },
      {
        name: "Amanda Chen",
        location: "Seattle, WA",
        message: "The team's expertise in lighting design completely transformed our space. The ambiance is perfect for both work and relaxation. Truly exceptional work!",
        initials: "AC"
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  private createTestimonial(testimonial: InsertTestimonial): Testimonial {
    const id = this.currentTestimonialId++;
    const newTestimonial: Testimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
}

export const storage = new MemStorage();
