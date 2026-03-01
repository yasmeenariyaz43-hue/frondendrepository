// frontend/src/pages/ProfilePage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { showToast } from '../components/common/ToastProvider';
import { User, Mail, Calendar, Edit2, Save } from 'lucide-react';

const ProfilePage = () => {
    const { user, updateUser } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: user?.fullName || '',
        username: user?.username || '',
        bio: user?.bio || ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {
        try {
            await updateUser(formData);
            setIsEditing(false);
            showToast.success('Profile updated successfully!');
        } catch (error) {
            showToast.error('Failed to update profile');
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                {/* Profile Header */}
                <Card className="mb-6">
                    <CardContent className="pt-6">
                        <div className="flex items-center space-x-4">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src={user?.avatarUrl} />
                                <AvatarFallback className="text-2xl">
                                    {user?.fullName?.charAt(0) || user?.username?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <h1 className="text-2xl font-bold">{user?.fullName || user?.username}</h1>
                                <p className="text-gray-500">@{user?.username}</p>
                            </div>
                            <Button 
                                variant="outline" 
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Profile Details */}
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {isEditing ? (
                            // Edit Mode
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Full Name</label>
                                    <Input
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Username</label>
                                    <Input
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        placeholder="Enter username"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Bio</label>
                                    <textarea
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about yourself"
                                        className="w-full p-2 border rounded-md"
                                        rows="4"
                                    />
                                </div>
                                <Button onClick={handleSave} className="w-full">
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Changes
                                </Button>
                            </div>
                        ) : (
                            // View Mode
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <User className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Full Name</p>
                                        <p>{user?.fullName || 'Not set'}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p>{user?.email}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-500">Member Since</p>
                                        <p>{new Date(user?.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                
                                {user?.bio && (
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Bio</p>
                                        <p className="text-gray-700">{user.bio}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;