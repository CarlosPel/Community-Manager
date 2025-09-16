import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import axios from "axios";

export const SignupScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Nueva variable
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [isOwner, setIsOwner] = useState(false);
    const [premises, setPremisesId] = useState("");
    const [apartment, setApartment] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(""); // Limpiar error anterior

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            if (!isOwner) {
                await axios.post('/api/owners', {
                    name,
                    email,
                    premises,
                });
            } else {
                await axios.post("http://localhost:3000/tenants", {
                    name,
                    email,
                    apartment,
                });
            }
            alert("Cuenta creada correctamente");
            navigate("/");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded w-80 mx-auto">
            <h2 className="text-xl mb-4">Registrarse</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full mb-2"
                placeholder="Nombre completo"
                required
            />

            <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-2"
                required
            />

            <input
                type="phone"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

            <input
                type="password"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border p-2 w-full mb-2"
                required
            />

            <div className="mb-2">
                <label className="mr-4">
                    <input
                        type="radio"
                        checked={isOwner}
                        onChange={() => setIsOwner(true)}
                        className="mr-1"
                    />
                    Propietario
                </label>
                <label>
                    <input
                        type="radio"
                        checked={!isOwner}
                        onChange={() => setIsOwner(false)}
                        className="mr-1"
                    />
                    Inquilino
                </label>
            </div>

            {isOwner ? (
                <input
                    value={premises}
                    onChange={(e) => setPremisesId(e.target.value)}
                    placeholder="Propiedad"
                    className="border p-2 w-full mb-2"
                />
            ) : (
                <input
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    placeholder="Apartamento"
                    className="border p-2 w-full mb-2"
                />
            )}

            {error && <p className="text-red-500">{error}</p>}

            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Crear cuenta
            </button>

            <p className="mt-2 text-sm cursor-pointer text-blue-600" onClick={() => navigate("/login")}>
                ¿Ya tienes cuenta? Inicia sesión
            </p>
        </form>
    );
};
