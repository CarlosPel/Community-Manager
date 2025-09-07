import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthForm } from "../screens/AuthForm";
import { useAuth } from "../context/AuthContext";
import { HomeScreen } from "../screens/Home";
import type { JSX } from "react";
import { IncidentsScreen } from "../screens/Incidents";
import { ProfileScreen } from "../screens/Profile";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user, loading } = useAuth();
    if (loading) return <p>Cargando...</p>;
    return user ? children : <Navigate to="/login" />;
};

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<AuthForm />} />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <HomeScreen />
                    </PrivateRoute>
                }
            />
            <Route
                path="/incidents"
                element={
                    <PrivateRoute>
                        <IncidentsScreen />
                    </PrivateRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <ProfileScreen />
                    </PrivateRoute>
                }
            />
        </Routes>
    </BrowserRouter>
);