import { createBrowserRouter, Navigate } from "react-router";
import { MainScreen } from "../screens/MainScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen />,
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
