
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Calendar, Clock, Users, Trophy, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface Contest {
  id: string;
  title: string;
  type: string;
  start_time: string;
  duration_minutes: number;
  participants: number;
  status: string;
  problems: number[];
}

const ContestPage = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [loading, setLoading] = useState(true);
  const [userStats, setUserStats] = useState({
    globalRanking: 0,
    contestRating: 1500,
    contestsAttended: 0
  });
  const { user } = useAuth();

  useEffect(() => {
    fetchContests();
    if (user) {
      fetchUserStats();
    }
  }, [user]);

  const fetchContests = async () => {
    try {
      const { data, error } = await supabase
        .from('contests')
        .select('*')
        .order('start_time', { ascending: true });

      if (error) throw error;
      setContests(data || []);
    } catch (error) {
      console.error('Error fetching contests:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserStats = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('global_ranking, contest_rating, contests_attended')
        .eq('id', user.id)
        .single();

      if (error) throw error;
      
      if (data) {
        setUserStats({
          globalRanking: data.global_ranking || 0,
          contestRating: data.contest_rating || 1500,
          contestsAttended: data.contests_attended || 0
        });
      }
    } catch (error) {
      console.error('Error fetching user stats:', error);
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto p-6">
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
                    {formatDateTime(contest.start_time)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {formatDuration(contest.duration_minutes)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {contest.participants.toLocaleString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-4 h-4 mr-2" />
                    4 problems
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
                    {formatDateTime(contest.start_time)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {formatDuration(contest.duration_minutes)}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {contest.participants.toLocaleString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Trophy className="w-4 h-4 mr-2" />
                    4 problems
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
                  <span className="text-gray-600">
                    #{userStats.globalRanking || 'Unranked'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Contest Rating</span>
                  <span className="font-medium">{userStats.contestRating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Contests Attended</span>
                  <span className="font-medium">{userStats.contestsAttended}</span>
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
