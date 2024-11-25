import * as React from "react"
import { ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NewsGrid() {
  const tabs = ["All News", "Announcements", "Blogs", "Articles", "Case Studies"]
  const posts = [
    {
      id: 1,
      title: "Building Relationships with Partners and Communities",
      author: "Sabina Saetgareyva",
      date: "July 30, 2024",
      image: "/pictures/1.jpg",
      comments: 0,
      likes: 0,
    },
    {
      id: 2,
      title: "Employee Success Stories: Share Your Journey",
      author: "Andrew Calston",
      date: "January 4, 2024",
      image: "/pictures/2.jpg",
      comments: 0,
      likes: 0,
    },
    {
      id: 3,
      title: "Expanding Our Reach with New Office",
      author: "Andrew Calston",
      date: "January 4, 2024",
      image: "/pictures/3.jpg",
      comments: 0,
      likes: 0,
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-2 overflow-x-auto pb-4 mb-6">
        {tabs.map((tab, i) => (
          <Button
            key={tab}
            variant={i === 0 ? "default" : "ghost"}
            className="rounded-full whitespace-nowrap"
          >
            {tab}
          </Button>
        ))}
        <Button variant="ghost" size="icon" className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">More</span>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href="#"
            className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow"
          >
            <Image
              src={post.image}
              alt=""
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-muted-foreground mb-2">
                {post.author} · {post.date}
              </div>
              <h2 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Comments ({post.comments})</span>
                <span>{post.likes}</span>
              </div> */}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-1 mt-8">
        {[...Array(9)].map((_, i) => (
          <Button
            key={i}
            variant={i === 0 ? "default" : "ghost"}
            size="icon"
            className="w-10 h-10 rounded-full"
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}