interface Post {
    userId: number;
    products: unknown[];
    [key: string]: unknown;
  }
  
export function getPostsByUser(
    posts: Post[],
    userId: number
  ): Post[] {
    return posts.filter(post => post.userId === userId);
  }
  