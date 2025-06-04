
import React from 'react';
import { MessageSquare, ThumbsUp, User, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const discussions = [
  {
    id: 1,
    title: "Optimal Hash Map Approach for Two Sum",
    author: "codeMaster123",
    content: "Here's an efficient O(n) solution using a hash map. The key insight is to store complements...",
    likes: 245,
    replies: 18,
    tags: ["Hash Table", "Optimization"],
    createdAt: "2 hours ago",
    isPinned: true
  },
  {
    id: 2,
    title: "Why my solution is getting TLE?",
    author: "beginner_dev",
    content: "I'm using a nested loop approach but getting Time Limit Exceeded. Can someone help me optimize?",
    likes: 12,
    replies: 7,
    tags: ["Help", "Time Complexity"],
    createdAt: "5 hours ago",
    isPinned: false
  },
  {
    id: 3,
    title: "Python vs Java performance comparison",
    author: "languageExpert",
    content: "Interesting observations about runtime differences between Python and Java implementations...",
    likes: 89,
    replies: 23,
    tags: ["Python", "Java", "Performance"],
    createdAt: "1 day ago",
    isPinned: false
  }
];

const Discussion = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Discussions</h2>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <MessageSquare className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <div className="space-y-4">
        {discussions.map((discussion) => (
          <Card key={discussion.id} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {discussion.isPinned && (
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                      Pinned
                    </Badge>
                  )}
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                    {discussion.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {discussion.content}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {discussion.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {discussion.createdAt}
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {discussion.likes}
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {discussion.replies} replies
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-3">
                  {discussion.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Discussion;
