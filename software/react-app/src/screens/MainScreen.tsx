import { useState } from "react";
import { communityName } from "../data/global_variables";
import '../App.css';
import { BulletinBoard } from "../components/BulletinBoard";
import { Link } from "react-router";
import { HiHome, HiMenu } from "react-icons/hi";

export const MainScreen = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <div className="flex justify-between">
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
                                    Perfil
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <h1>Comunidad de Vecinos {communityName}</h1>

            <BulletinBoard />
        </div>
    )
}