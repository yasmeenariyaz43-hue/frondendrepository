// frontend/src/pages/HabitsPage.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const HabitsPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">My Habits</h1>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Habit
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder cards - will be replaced with real data */}
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardTitle>Sample Habit {i}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-500">This is where your habits will appear</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HabitsPage;