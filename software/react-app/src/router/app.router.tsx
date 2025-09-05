import { createBrowserRouter, Navigate } from "react-router";
import { MainScreen } from "../screens/MainScreen";
import { IncidentsScreen } from "../screens/IncidentsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen />,
    },
    {
        path: "/incidents",
        element: <IncidentsScreen />,
    },
    {
        path: "/profile",
        element: <ProfileScreen />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
]);
