import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Target, Trophy, Award, TrendingUp } from 'lucide-react';

const HomePage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                    Welcome back, {user?.fullName || user?.username}! 👋
                </h1>
                <p className="text-gray-500">Track your habits, earn achievements, and build a better you.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Active Habits</p>
                                <p className="text-2xl font-bold">0</p>
                            </div>
                            <Target className="w-8 h-8 text-blue-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Current Streak</p>
                                <p className="text-2xl font-bold">0 days</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-green-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Achievements</p>
                                <p className="text-2xl font-bold">0</p>
                            </div>
                            <Trophy className="w-8 h-8 text-yellow-500" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Completed Today</p>
                                <p className="text-2xl font-bold">0</p>
                            </div>
                            <Award className="w-8 h-8 text-purple-500" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Today's Habits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500 mb-4">You haven't added any habits yet.</p>
                        <Button onClick={() => navigate('/habits')}>
                            Add Your First Habit
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Active Challenges</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-500 mb-4">Join challenges to stay motivated!</p>
                        <Button onClick={() => navigate('/challenges')} variant="outline">
                            Browse Challenges
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default HomePage;