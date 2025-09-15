import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Home } from "../screens/Home";
import type { JSX } from "react";
import { IncidentsScreen } from "../screens/Incidents";
import { ProfileScreen } from "../screens/Profile";
import { NewAnnouncement } from "../screens/NewAnnouncement";
import { NeighbourLayout } from "../screens/NeighbourLayout";
import { LoginScreen } from "../screens/Login";
import { SignupScreen } from "../screens/Signup";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const { user, loading } = useAuth();
    if (loading) return <p>Cargando...</p>;
    return user ? children : <Navigate to="/login" />;
};

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/login"
                element={
                    <LoginScreen />
                }
            />
            <Route
                path="/signup"
                element={
                    <SignupScreen />
                }
            />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <NeighbourLayout />
                    </PrivateRoute>
                }
            >
                <Route index element={<Home />} />
                <Route
                    path="incidents"
                    element={
                        <PrivateRoute>
                            <IncidentsScreen />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="profile"
                    element={
                        <PrivateRoute>
                            <ProfileScreen />
                        </PrivateRoute>
                    }
                />
            </Route>
            <Route
                path="/NewAnnouncement"
                element={
                    <PrivateRoute>
                        <NewAnnouncement />
                    </PrivateRoute>
                }
            />
        </Routes>
    </BrowserRouter>
);