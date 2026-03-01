// frontend/src/pages/SettingsPage.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { showToast } from '../components/common/ToastProvider';
import { Bell, Moon, Sun, Globe, Lock, Shield } from 'lucide-react';

const SettingsPage = () => {
    const [settings, setSettings] = useState({
        notifications: true,
        darkMode: false,
        language: 'en',
        emailReminders: true,
        weeklyReports: true,
        privateProfile: false
    });

    const handleToggle = (key) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleSave = () => {
        // Save settings to backend
        showToast.success('Settings saved successfully!');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            <div className="space-y-6">
                {/* Notifications Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Bell className="w-5 h-5 mr-2" />
                            Notifications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label>Push Notifications</Label>
                                <p className="text-sm text-gray-500">Receive notifications about your habits</p>
                            </div>
                            <Switch
                                checked={settings.notifications}
                                onCheckedChange={() => handleToggle('notifications')}
                            />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <Label>Email Reminders</Label>
                                <p className="text-sm text-gray-500">Get daily email reminders</p>
                            </div>
                            <Switch
                                checked={settings.emailReminders}
                                onCheckedChange={() => handleToggle('emailReminders')}
                            />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <Label>Weekly Reports</Label>
                                <p className="text-sm text-gray-500">Receive weekly progress reports</p>
                            </div>
                            <Switch
                                checked={settings.weeklyReports}
                                onCheckedChange={() => handleToggle('weeklyReports')}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Appearance Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            {settings.darkMode ? <Moon className="w-5 h-5 mr-2" /> : <Sun className="w-5 h-5 mr-2" />}
                            Appearance
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label>Dark Mode</Label>
                                <p className="text-sm text-gray-500">Switch to dark theme</p>
                            </div>
                            <Switch
                                checked={settings.darkMode}
                                onCheckedChange={() => handleToggle('darkMode')}
                            />
                        </div>
                        
                        <div>
                            <Label>Language</Label>
                            <Select
                                value={settings.language}
                                onValueChange={(value) => setSettings(prev => ({ ...prev, language: value }))}
                            >
                                <SelectTrigger className="w-full mt-1">
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">English</SelectItem>
                                    <SelectItem value="es">Español</SelectItem>
                                    <SelectItem value="fr">Français</SelectItem>
                                    <SelectItem value="de">Deutsch</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Privacy Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Shield className="w-5 h-5 mr-2" />
                            Privacy
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label>Private Profile</Label>
                                <p className="text-sm text-gray-500">Make your profile private</p>
                            </div>
                            <Switch
                                checked={settings.privateProfile}
                                onCheckedChange={() => handleToggle('privateProfile')}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Security Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Lock className="w-5 h-5 mr-2" />
                            Security
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" className="w-full">
                            Change Password
                        </Button>
                    </CardContent>
                </Card>

                {/* Save Button */}
                <Button onClick={handleSave} className="w-full">
                    Save All Settings
                </Button>
            </div>
        </div>
    );
};

export default SettingsPage;