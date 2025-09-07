import { useState } from "react";
import { HiHome, HiMenu } from "react-icons/hi";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

type NavMenuProps = {
    isHome?: boolean;
};

export const NavMenu = ({ isHome = false }: NavMenuProps) => {
    const [open, setOpen] = useState(false);
    const { logout } = useAuth();

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center">
                <div>
                    {!isHome ? (
                        <Link to="/" className="font-bold text-lg">
                            <HiHome size={24} className="inline mr-2" />
                        </Link>
                    ) : (
                        <button onClick={logout} className="bg-red-500 text-white p-2 rounded">Cerrar sesión</button>)}
                </div>
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
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}