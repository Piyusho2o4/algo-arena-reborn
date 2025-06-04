
import React from 'react';
import { CheckCircle, Play, Lock, ThumbsUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const problems = [
  {
    id: 1,
    number: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "49.7%",
    frequency: 4.8,
    isPremium: false,
    isSolved: true,
    isAttempted: false,
    tags: ["Array", "Hash Table"],
    companies: ["Amazon", "Google", "Apple"]
  },
  {
    id: 2,
    number: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: "38.6%",
    frequency: 4.2,
    isPremium: false,
    isSolved: false,
    isAttempted: true,
    tags: ["Linked List", "Math", "Recursion"],
    companies: ["Microsoft", "Amazon"]
  },
  {
    id: 3,
    number: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "33.8%",
    frequency: 4.5,
    isPremium: false,
    isSolved: false,
    isAttempted: false,
    tags: ["Hash Table", "String", "Sliding Window"],
    companies: ["Amazon", "Adobe", "Bloomberg"]
  },
  {
    id: 4,
    number: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    acceptance: "36.2%",
    frequency: 3.8,
    isPremium: false,
    isSolved: false,
    isAttempted: false,
    tags: ["Array", "Binary Search", "Divide and Conquer"],
    companies: ["Google", "Microsoft"]
  },
  {
    id: 5,
    number: 159,
    title: "Longest Substring with At Most Two Distinct Characters",
    difficulty: "Medium",
    acceptance: "52.4%",
    frequency: 3.2,
    isPremium: true,
    isSolved: false,
    isAttempted: false,
    tags: ["Hash Table", "String", "Sliding Window"],
    companies: ["Google", "Uber"]
  }
];

const ProblemList = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hard': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (problem: any) => {
    if (problem.isSolved) {
      return <CheckCircle className="w-4 h-4 text-green-600" />;
    } else if (problem.isAttempted) {
      return <Play className="w-4 h-4 text-yellow-600" />;
    }
    return <div className="w-4 h-4" />;
  };

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acceptance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Frequency
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {problems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(problem)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">
                          {problem.number}. {problem.title}
                        </span>
                        {problem.isPremium && (
                          <Lock className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        {problem.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {problem.tags.length > 2 && (
                          <span className="text-xs text-gray-500">
                            +{problem.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {problem.acceptance}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(problem.frequency / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{problem.frequency}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ProblemList;
