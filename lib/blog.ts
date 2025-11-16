import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Posts directory not found: ${postsDirectory}`);
      return [];
    }

    // Get all markdown files from the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPosts = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          date: data.date || '',
          author: data.author || 'Guglex Technologies',
          category: data.category || 'General',
          tags: data.tags || [],
          featured: data.featured || false,
          content,
        } as BlogPost;
      });

    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Posts directory not found: ${postsDirectory}`);
      return null;
    }

    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`Post file not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || 'Guglex Technologies',
      category: data.category || 'General',
      tags: data.tags || [],
      featured: data.featured || false,
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

