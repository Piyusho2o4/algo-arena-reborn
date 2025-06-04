
import React from 'react';
import Navbar from '../components/Navbar';
import { Calendar, Clock, Users, Trophy, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const contests = [
  {
    id: 1,
    title: "Weekly Contest 385",
    type: "Weekly",
    startTime: "2024-01-28 10:30",
    duration: "1.5 hours",
    participants: 15234,
    status: "upcoming",
    problems: 4,
    difficulty: "Easy to Hard"
  },
  {
    id: 2,
    title: "Biweekly Contest 122",
    type: "Biweekly",
    startTime: "2024-01-30 22:30",
    duration: "1.5 hours",
    participants: 12890,
    status: "upcoming",
    problems: 4,
    difficulty: "Easy to Hard"
  },
  {
    id: 3,
    title: "Weekly Contest 384",
    type: "Weekly",
    startTime: "2024-01-21 10:30",
    duration: "1.5 hours",
    participants: 18567,
    status: "finished",
    problems: 4,
    difficulty: "Easy to Hard"
  }
];

const ContestPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contests</h1>
          <p className="text-gray-600">Participate in coding contests and compete with developers worldwide</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Contests</h2>
            {contests.filter(c => c.status === 'upcoming').map((contest) => (
              <Card key={contest.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{contest.title}</h3>
                    <Badge variant="outline" className="mt-1">{contest.type}</Badge>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Register
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {contest.startTime}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {contest.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {contest.participants.toLocaleString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-4 h-4 mr-2" />
                    {contest.problems} problems
                  </div>
                </div>
              </Card>
            ))}

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Past Contests</h2>
            {contests.filter(c => c.status === 'finished').map((contest) => (
              <Card key={contest.id} className="p-6 opacity-75">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{contest.title}</h3>
                    <Badge variant="secondary" className="mt-1">Finished</Badge>
                  </div>
                  <Button variant="outline">
                    View Results
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {contest.startTime}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {contest.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {contest.participants.toLocaleString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-4 h-4 mr-2" />
                    {contest.problems} problems
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contest Rankings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium">Global Ranking</span>
                  </div>
                  <span className="text-gray-600">#12,543</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Contest Rating</span>
                  <span className="font-medium">1,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Contests Attended</span>
                  <span className="font-medium">23</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contest Schedule</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div>• Weekly contests: Every Sunday 10:30 AM UTC</div>
                <div>• Biweekly contests: Every other Saturday 10:30 PM UTC</div>
                <div>• Duration: 1.5 hours each</div>
                <div>• 4 problems per contest</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestPage;
