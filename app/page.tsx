import { AuthButton } from "@/components/auth-button";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const isAdmin = true;
  const posts = [];
  const loading = true;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
          Simple blog
          </Link>
          <div className="fle4x items-center space-x-4">
            {isAdmin && (
              <Button asChild>
                <Link href="/admin/create">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Post
                </Link>
              </Button>
            )}
            <AuthButton />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Simple Blog</h1>
            <p className="text-muted-foreground">
              A clean, functional blog focused on clean content
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-center">Loading posts...</div>
        ): posts.length === 0 ? (
          <div className="text-center text-muted-foreground">
            Np posts yet. { isAdmin && "Create your first post!"}
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
