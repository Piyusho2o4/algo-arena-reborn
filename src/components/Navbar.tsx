
import React from 'react';
import { Search, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const location = useLocation();
  const { user, loading } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">LC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">LeetCode</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              Problems
            </Link>
            <Link 
              to="/contest" 
              className={`font-medium ${isActive('/contest') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              Contest
            </Link>
            <Link 
              to="/discuss" 
              className={`font-medium ${isActive('/discuss') ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`}
            >
              Discuss
            </Link>
            <a href="/interview" className="text-gray-700 hover:text-orange-600 font-medium">Interview</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search problems..." 
              className="pl-10 w-64"
            />
          </div>
          
          {!loading && (
            user ? (
              <Link to="/profile">
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="sm">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            )
          )}
          
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
            Premium
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
