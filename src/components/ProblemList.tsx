
import React, { useState, useEffect } from 'react';
import { CheckCircle, Lock, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

interface Problem {
  id: number;
  title: string;
  slug: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptance_rate: number;
  frequency: number;
  is_premium: boolean;
  tags: string[];
  companies: string[];
}

const ProblemList = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [solvedProblems, setSolvedProblems] = useState<Set<number>>(new Set());
  const { user } = useAuth();

  useEffect(() => {
    fetchProblems();
    if (user) {
      fetchSolvedProblems();
    }
  }, [user]);

  const fetchProblems = async () => {
    try {
      const { data, error } = await supabase
        .from('problems')
        .select('*')
        .order('id');

      if (error) throw error;
      setProblems(data || []);
    } catch (error) {
      console.error('Error fetching problems:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSolvedProblems = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('submissions')
        .select('problem_id')
        .eq('user_id', user.id)
        .eq('status', 'Accepted');

      if (error) throw error;
      const solved = new Set(data?.map(sub => sub.problem_id) || []);
      setSolvedProblems(solved);
    } catch (error) {
      console.error('Error fetching solved problems:', error);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="p-4 animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {problems.map((problem) => (
        <Card key={problem.id} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-2">
                {solvedProblems.has(problem.id) && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {problem.is_premium && (
                  <Lock className="w-4 h-4 text-orange-500" />
                )}
                <span className="text-gray-600 font-mono">#{problem.id}</span>
              </div>
              
              <div className="flex-1">
                <Link 
                  to={`/problem/${problem.slug}`}
                  className="text-lg font-medium text-gray-900 hover:text-orange-600"
                >
                  {problem.title}
                </Link>
                
                <div className="flex items-center space-x-4 mt-2">
                  <Badge 
                    variant="secondary" 
                    className={getDifficultyColor(problem.difficulty)}
                  >
                    {problem.difficulty}
                  </Badge>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{problem.acceptance_rate}%</span>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span>{problem.frequency}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {problem.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {problem.tags.length > 3 && (
                      <span className="text-xs text-gray-500">+{problem.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProblemList;
