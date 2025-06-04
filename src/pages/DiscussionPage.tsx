
import React from 'react';
import Navbar from '../components/Navbar';
import Discussion from '../components/Discussion';

const DiscussionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <Discussion />
      </div>
    </div>
  );
};

export default DiscussionPage;
