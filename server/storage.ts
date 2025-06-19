import { users, contactSubmissions, testimonials, type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, type Testimonial, type InsertTestimonial } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class DatabaseStorage implements IStorage {
  constructor() {
    // Add sample testimonials if they don't exist
    this.addSampleTestimonialsIfNeeded();
  }

  private async addSampleTestimonialsIfNeeded() {
    try {
      const existingTestimonials = await db.select().from(testimonials);
      
      if (existingTestimonials.length === 0) {
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

        await db.insert(testimonials).values(sampleTestimonials);
      }
    } catch (error) {
      console.error("Error adding sample testimonials:", error);
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [contactSubmission] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return contactSubmission;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }
}

export const storage = new DatabaseStorage();
