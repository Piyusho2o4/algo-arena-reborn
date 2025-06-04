
import React from 'react';
import { Calendar, Award, TrendingUp, Code, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const UserProfile = () => {
  const stats = {
    totalSolved: 234,
    easy: 89,
    medium: 112,
    hard: 33,
    ranking: 12543,
    acceptanceRate: 67.8,
    streak: 15
  };

  const recentSubmissions = [
    { problem: "Two Sum", status: "Accepted", time: "2 hours ago", runtime: "52ms" },
    { problem: "Add Two Numbers", status: "Wrong Answer", time: "3 hours ago", runtime: "-" },
    { problem: "Longest Substring", status: "Accepted", time: "1 day ago", runtime: "76ms" },
    { problem: "Median of Arrays", status: "Time Limit Exceeded", time: "2 days ago", runtime: "-" }
  ];

  const badges = [
    { name: "50 Days Badge", description: "Solved at least one problem for 50 consecutive days", earned: true },
    { name: "Study Plan Finisher", description: "Completed LeetCode 75 study plan", earned: true },
    { name: "Contest Badge", description: "Participated in 10 contests", earned: false },
    { name: "Discussion Badge", description: "Got 100+ upvotes on discussions", earned: false }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">JD</span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">john_doe_dev</h1>
            <p className="text-gray-600">Software Engineer at Tech Corp</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Joined January 2023
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                Ranking #{stats.ranking.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Overview */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Problem Solving Stats</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stats.totalSolved}</div>
                <div className="text-sm text-gray-500">Total Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.easy}</div>
                <div className="text-sm text-gray-500">Easy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.medium}</div>
                <div className="text-sm text-gray-500">Medium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{stats.hard}</div>
                <div className="text-sm text-gray-500">Hard</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Easy</span>
                <span>{stats.easy}/234</span>
              </div>
              <Progress value={(stats.easy / 234) * 100} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span>Medium</span>
                <span>{stats.medium}/567</span>
              </div>
              <Progress value={(stats.medium / 567) * 100} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span>Hard</span>
                <span>{stats.hard}/189</span>
              </div>
              <Progress value={(stats.hard / 189) * 100} className="h-2" />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Submissions</h2>
            <div className="space-y-3">
              {recentSubmissions.map((submission, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Code className="w-4 h-4 text-gray-500" />
                    <span className="font-medium">{submission.problem}</span>
                    <Badge 
                      variant={submission.status === "Accepted" ? "default" : "destructive"}
                      className={submission.status === "Accepted" ? "bg-green-100 text-green-800" : ""}
                    >
                      {submission.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{submission.runtime}</span>
                    <span>{submission.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Acceptance Rate</span>
                <span className="font-medium">{stats.acceptanceRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Streak</span>
                <span className="font-medium">{stats.streak} days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Max Streak</span>
                <span className="font-medium">28 days</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Badges</h3>
            <div className="space-y-3">
              {badges.map((badge, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${badge.earned ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                  <Award className={`w-5 h-5 ${badge.earned ? 'text-yellow-600' : 'text-gray-400'}`} />
                  <div className="flex-1">
                    <div className={`font-medium ${badge.earned ? 'text-yellow-900' : 'text-gray-500'}`}>
                      {badge.name}
                    </div>
                    <div className="text-xs text-gray-500">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
