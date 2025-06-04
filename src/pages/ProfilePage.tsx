
import React from 'react';
import Navbar from '../components/Navbar';
import UserProfile from '../components/UserProfile';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-6">
        <UserProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
