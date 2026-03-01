// frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import LoadingSpinner from './components/common/LoadingSpinner';
import { Toaster } from 'react-hot-toast';

// Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import HabitsPage from './pages/HabitsPage';
import AchievementsPage from './pages/AchievementsPage';
import ChallengesPage from './pages/ChallengesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <LoadingSpinner />;
    }
    
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
};

// Public Route Component
const PublicRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    if (loading) {
        return <LoadingSpinner />;
    }
    
    if (user) {
        return <Navigate to="/" replace />;
    }
    
    return children;
};

// Main App Content
const AppContent = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Only show navbar if user is logged in */}
            {user && <Navbar />}
            
            {/* Routes */}
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                
                <Route path="/register" element={
                    <PublicRoute>
                        <RegisterPage />
                    </PublicRoute>
                } />
                
                {/* Protected Routes */}
                <Route path="/" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />
                
                <Route path="/habits" element={
                    <ProtectedRoute>
                        <HabitsPage />
                    </ProtectedRoute>
                } />
                
                <Route path="/achievements" element={
                    <ProtectedRoute>
                        <AchievementsPage />
                    </ProtectedRoute>
                } />
                
                <Route path="/challenges" element={
                    <ProtectedRoute>
                        <ChallengesPage />
                    </ProtectedRoute>
                } />
                
                <Route path="/profile" element={
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                } />
                
                <Route path="/settings" element={
                    <ProtectedRoute>
                        <SettingsPage />
                    </ProtectedRoute>
                } />
                
                {/* 404 Route */}
                <Route path="*" element={
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                            <p className="text-gray-600 mb-4">Page not found</p>
                            <button 
                                onClick={() => window.location.href = '/'}
                                className="text-blue-500 hover:text-blue-600"
                            >
                                Go Home
                            </button>
                        </div>
                    </div>
                } />
            </Routes>
            
            {/* Toast Notifications */}
            <Toaster 
                position="top-right"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        style: {
                            background: '#10b981',
                        },
                    },
                    error: {
                        duration: 4000,
                        style: {
                            background: '#ef4444',
                        },
                    },
                }}
            />
        </div>
    );
};

// Root App Component
function App() {
    return (
        <Router>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </Router>
    );
}

export default App;