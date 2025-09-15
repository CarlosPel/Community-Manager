import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded w-80 mx-auto">
            <h2 className="text-xl mb-4">Iniciar Sesión</h2>
            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-2"
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full mb-2"
                required
            />
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Entrar
            </button>
            <p className="mt-2 text-sm cursor-pointer text-blue-600" onClick={() => navigate("/signup")}>
                No tienes cuenta? Regístrate
            </p>
        </form>
    );
};
