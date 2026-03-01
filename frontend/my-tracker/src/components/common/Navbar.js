import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Home, Target, Trophy, Award } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user) return null;

    return (
        <nav className="bg-white shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <Target className="h-6 w-6 text-blue-500" />
                            <span className="font-bold text-xl">HabitTracker</span>
                        </Link>
                        
                        <div className="flex space-x-4">
                            <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                                <Home className="h-4 w-4" />
                                <span>Home</span>
                            </Link>
                            <Link to="/habits" className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                                <Target className="h-4 w-4" />
                                <span>Habits</span>
                            </Link>
                            <Link to="/achievements" className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                                <Trophy className="h-4 w-4" />
                                <span>Achievements</span>
                            </Link>
                            <Link to="/challenges" className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                                <Award className="h-4 w-4" />
                                <span>Challenges</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Welcome, {user?.fullName || user?.username}</span>
                        <Button variant="ghost" size="sm" onClick={handleLogout}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;