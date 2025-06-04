
import React, { useState, useEffect } from 'react';
import { ChevronLeft, Play, RotateCcw, Settings, ThumbsUp, ThumbsDown, Star, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useParams, Link, Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

interface Problem {
  id: number;
  title: string;
  slug: string;
  description: string;
  difficulty: string;
  examples: any[];
  constraints: string;
}

const Problem = () => {
  const { slug } = useParams();
  const { user } = useAuth();
  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  useEffect(() => {
    if (slug) {
      fetchProblem();
    }
  }, [slug]);

  useEffect(() => {
    // Set default code template based on language
    const templates = {
      python: `class Solution:
    def solveProblem(self, nums):
        # Your code here
        pass`,
      java: `class Solution {
    public int solveProblem(int[] nums) {
        // Your code here
        return 0;
    }
}`,
      cpp: `class Solution {
public:
    int solveProblem(vector<int>& nums) {
        // Your code here
        return 0;
    }
};`,
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
var solveProblem = function(nums) {
    // Your code here
};`
    };
    setCode(templates[language as keyof typeof templates] || templates.python);
  }, [language]);

  const fetchProblem = async () => {
    try {
      const { data, error } = await supabase
        .from('problems')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      setProblem(data);
    } catch (error) {
      console.error('Error fetching problem:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmission = async () => {
    if (!problem || !user) return;

    try {
      // Simulate code execution (in a real app, this would be sent to a code execution service)
      const statuses = ['Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Runtime Error'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      const { error } = await supabase
        .from('submissions')
        .insert({
          user_id: user.id,
          problem_id: problem.id,
          code,
          language,
          status: randomStatus,
          runtime: Math.floor(Math.random() * 100) + 10,
          memory_usage: Math.floor(Math.random() * 50) + 10,
          test_cases_passed: randomStatus === 'Accepted' ? 10 : Math.floor(Math.random() * 8),
          total_test_cases: 10
        });

      if (error) throw error;

      if (randomStatus === 'Accepted') {
        toast.success('🎉 Accepted! Great job!');
        // Update user stats
        updateUserStats(problem.difficulty);
      } else {
        toast.error(`${randomStatus}. Keep trying!`);
      }
    } catch (error: any) {
      toast.error(error.message || 'Error submitting solution');
    }
  };

  const updateUserStats = async (difficulty: string) => {
    if (!user) return;

    try {
      // Get current profile
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profile) {
        const updates: any = {
          problems_solved: (profile.problems_solved || 0) + 1,
        };

        if (difficulty === 'Easy') {
          updates.easy_solved = (profile.easy_solved || 0) + 1;
        } else if (difficulty === 'Medium') {
          updates.medium_solved = (profile.medium_solved || 0) + 1;
        } else if (difficulty === 'Hard') {
          updates.hard_solved = (profile.hard_solved || 0) + 1;
        }

        await supabase
          .from('profiles')
          .update(updates)
          .eq('id', user.id);
      }
    } catch (error) {
      console.error('Error updating user stats:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        <div className="bg-white border-b border-gray-200 px-6 py-3">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        </div>
        <div className="flex h-[calc(100vh-64px)]">
          <div className="w-1/2 p-6">
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
          <div className="w-1/2 p-6">
            <div className="h-96 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Problem not found</h2>
          <Link to="/" className="text-orange-600 hover:text-orange-500">
            Back to Problems
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Problems
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">{problem.id}. {problem.title}</span>
              <Badge variant="secondary" className={getDifficultyColor(problem.difficulty)}>
                {problem.difficulty}
              </Badge>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Star className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Problem Description */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <Card className="p-6">
            <div className="prose max-w-none">
              <div 
                className="text-gray-700 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: problem.description }}
              />
              
              {problem.examples && problem.examples.length > 0 && (
                <div className="mt-6 space-y-4">
                  {problem.examples.map((example: any, index: number) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-2">Example {index + 1}:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                        <div><strong>Input:</strong> {example.input}</div>
                        <div><strong>Output:</strong> {example.output}</div>
                        {example.explanation && (
                          <div><strong>Explanation:</strong> {example.explanation}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {problem.constraints && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Constraints:</h4>
                  <div className="text-gray-700 whitespace-pre-wrap">{problem.constraints}</div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Code Editor */}
        <div className="w-1/2 flex flex-col">
          <div className="p-4 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="python">Python3</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" onClick={() => setCode('')}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full font-mono text-sm resize-none"
              placeholder="Write your solution here..."
            />
          </div>

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  Run
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={handleSubmission}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Submit
                </Button>
              </div>
              
              <div className="text-sm text-gray-500">
                Time: O(n) | Space: O(n)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
