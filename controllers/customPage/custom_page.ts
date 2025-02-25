"use server";
import { prisma } from "@/functions/utils/prismaClient";
import { z } from "zod";

const pageSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  head: z.string().optional(),
  content: z.string().optional(),
  description: z.string().optional(),
  keywords: z.string().optional(),
  meta_thumb: z.string().optional(),
  published: z.boolean().optional(),
});

export default class CustomPageController {
  // Create a new page with Zod validation
  static async createPage(data: {
    title: string;
    slug: string;
    head?: string;
    content?: string;
    description?: string;
    keywords?: string;
    meta_thumb?: string;
    published?: boolean;
  }) {
    try {
      pageSchema.parse(data); // Validate data
      const existingPage = await prisma.page.findUnique({
        where: { slug: data.slug },
      });
      if (existingPage) {
        throw new Error("Page with this slug already exists.");
      }

      const newPage = await prisma.page.create({ data });
      return newPage;
    } catch (error: any) {
      console.error("Error creating page:", error);
      throw new Error(
        error.errors
          ? error.errors[0].message
          : error.message || "Failed to create page."
      );
    }
  }

  // Get a page by ID 
  static async getPageById(id: number) {
    try {
      const page = await prisma.page.findUnique({ where: { id } });
      return page;
    } catch (error) {
      console.error("Error fetching page by ID:", error);
      throw new Error("Failed to fetch page.");
    }
  }

  // Get a page by slug (published only)
  static async getPageBySlug(slug: string) {
    try {
      const page = await prisma.page.findUnique({
        where: { slug, published: true },
      });
      return page;
    } catch (error) {
      console.error("Error fetching page by slug:", error);
      throw new Error("Failed to fetch page.");
    }
  }

  // Update a page by ID with Zod validation
  static async updatePageById(
    id: number,
    data: {
      title?: string;
      slug?: string;
      head?: string;
      content?: string;
      description?: string;
      keywords?: string;
      meta_thumb?: string;
      published?: boolean;
    }
  ) {
    try {
      pageSchema.partial().parse(data); // Validate partial data for update
      const existingPage = await prisma.page.findUnique({
        where: { slug: data.slug },
      });
      if (existingPage) {
        throw new Error("Page with this slug already exists.");
      }
      const updatedPage = await prisma.page.update({
        where: { id },
        data,
      });
      return updatedPage;
    } catch (error: any) {
      console.error("Error updating page:", error);
      throw new Error(
        error.errors
          ? error.errors[0].message
          : error.message || "Failed to update page."
      );
    }
  }

  // Delete a page by ID
  static async deletePageById(id: number) {
    try {
      // Check if the page exists before deleting
      const page = await prisma.page.findUnique({ where: { id } });
      if (!page) {
        throw new Error("Page not found.");
      }
      // Delete the page
      const deletedPage = await prisma.page.delete({ where: { id } });
      return deletedPage;
    } catch (error) {
      console.error("Error deleting page:", error);
      throw new Error("Failed to delete page.");
    }
  }

  // List all pages with optional filters and added keyword filter
  static async listPages(
    filter: {
      published?: boolean;
      keyword?: string;
    } = {}
  ) {
    try {
      const pages = await prisma.page.findMany({
        where: {
          published: filter.published,
          OR: filter.keyword
            ? [
                { title: { search: filter.keyword } },
                { content: { contains: filter.keyword } },
                { description: { contains: filter.keyword } },
                { keywords: { contains: filter.keyword } },
              ]
            : undefined,
        },
        orderBy: { createdAt: "desc" },
      });
      return pages;
    } catch (error) {
      console.error("Error listing pages:", error);
      throw new Error("Failed to list pages.");
    }
  }
}
