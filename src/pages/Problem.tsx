
import React, { useState } from 'react';
import { ChevronLeft, Play, RotateCcw, Settings, ThumbsUp, ThumbsDown, Star, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Problem = () => {
  const [code, setCode] = useState(`class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your code here
        pass`);

  const [language, setLanguage] = useState('python');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Problems
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">1. Two Sum</span>
              <Badge variant="secondary" className="text-green-600 bg-green-100">Easy</Badge>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-4 h-4" />
              <span className="ml-1">12.4k</span>
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="w-4 h-4" />
              <span className="ml-1">245</span>
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
              <p className="text-gray-700 mb-4">
                Given an array of integers <code className="bg-gray-100 px-1 py-0.5 rounded">nums</code> and an integer <code className="bg-gray-100 px-1 py-0.5 rounded">target</code>, return <em>indices of the two numbers such that they add up to <code className="bg-gray-100 px-1 py-0.5 rounded">target</code></em>.
              </p>
              
              <p className="text-gray-700 mb-4">
                You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.
              </p>
              
              <p className="text-gray-700 mb-6">
                You can return the answer in any order.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Example 1:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <div><strong>Input:</strong> nums = [2,7,11,15], target = 9</div>
                    <div><strong>Output:</strong> [0,1]</div>
                    <div><strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Example 2:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <div><strong>Input:</strong> nums = [3,2,4], target = 6</div>
                    <div><strong>Output:</strong> [1,2]</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Example 3:</h4>
                  <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
                    <div><strong>Input:</strong> nums = [3,3], target = 6</div>
                    <div><strong>Output:</strong> [0,1]</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Constraints:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>2 ≤ nums.length ≤ 10⁴</li>
                  <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                  <li>-10⁹ ≤ target ≤ 10⁹</li>
                  <li><strong>Only one valid answer exists.</strong></li>
                </ul>
              </div>
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
                <Button variant="ghost" size="sm">
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
                <Button className="bg-green-600 hover:bg-green-700">
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
