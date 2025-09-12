
import { useState } from "react";
import { HiHome, HiMenu } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const NeighbourLayout = () => {
    const [open, setOpen] = useState(false);
    const { logout } = useAuth();

    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="font-bold text-lg">
                        <HiHome size={24} className="inline mr-2" />
                    </Link>

                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="px-4 py-2 bg-gray-700 rounded-md"
                            title="Abrir menú"
                        >
                            <HiMenu size={24} />
                        </button>
                        {open && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => setOpen(false)}
                                >
                                    Mis datos
                                </Link>
                                <Link
                                    to="/incidents"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                    onClick={() => setOpen(false)}
                                >
                                    Incidencias
                                </Link>

                                <button onClick={logout} className="bg-red-500 text-white p-2 rounded">Cerrar sesión</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}