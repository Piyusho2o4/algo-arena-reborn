
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProblemList from '../components/ProblemList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Problems</h1>
              <p className="text-gray-600">Choose from our collection of coding challenges</p>
            </div>
            <ProblemList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
