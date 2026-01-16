interface Post {
    userId: number;
    id: number;
    title: string;
  }
  
export function getPostsByUser(
    posts: Post[],
    userId: number
  ): Post[] {
    return posts.filter(post => post.userId === userId);
  }
