// filepath: src/models/post.ts
export type Post = {
  title: string;
  date: string;
  description: string;
  img?: string;
  tags: string[];
  url?: string;
  content: string;
};
