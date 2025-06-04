
import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Sidebar = () => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6">
      <Card className="p-4 mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Study Plan</h3>
        <div className="space-y-2">
          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-orange-800">LeetCode 75</span>
              <span className="text-xs text-orange-600">15/75</span>
            </div>
            <div className="w-full bg-orange-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-blue-800">Top Interview 150</span>
              <span className="text-xs text-blue-600">8/150</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Filters</h3>
          <Filter className="w-4 h-4 text-gray-500" />
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Difficulty</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-green-600 mr-2" />
                <span className="text-sm text-green-600">Easy (234)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-yellow-600 mr-2" />
                <span className="text-sm text-yellow-600">Medium (567)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-red-600 mr-2" />
                <span className="text-sm text-red-600">Hard (189)</span>
              </label>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 mr-2" />
                <span className="text-sm">Todo</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 mr-2" />
                <span className="text-sm">Solved</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 mr-2" />
                <span className="text-sm">Attempted</span>
              </label>
            </div>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-between"
            >
              Tags
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>

          <div>
            <Button 
              variant="outline" 
              className="w-full justify-between"
            >
              Companies
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
