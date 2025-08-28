import { createBrowserRouter, Navigate } from "react-router";
import { MainScreen } from "../screens/MainScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
]);
