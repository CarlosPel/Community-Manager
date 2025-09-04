import { createBrowserRouter, Navigate } from "react-router";
import { MainScreen } from "../screens/MainScreen";
import { IncidentsScreen } from "../screens/IncidentsScreen";

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
        element: <div>Perfil de Usuario</div>,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
]);
