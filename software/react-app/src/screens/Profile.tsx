import { useEffect, useState } from "react";

type ProfileItems = {
    name: string;
    email: string;
    phone: string;
}

async function fetchProfile(): Promise<ProfileItems> {
    const response = await fetch("/api/neighbors");
    if (!response.ok) throw new Error("Error al obtener los datos del perfil");
    return response.json();
}

export const ProfileScreen = () => {
    const [profile, setData] = useState<ProfileItems | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadData = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchProfile();
            setData(data);
        } catch (err) {
            setError(`Error al cargar el perfil. Intenta nuevamente.`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h1>Perfil</h1>

            {loading && <p>Cargando datos personales...</p>}

            {error && <p className="text-red-500 font-bold">{error}</p>}

            {!loading && !error && profile &&
                (
                    <div>
                        <p>Nombre: {profile.name}</p>
                        <p>Correo electrónico: {profile.email}</p>
                        <p>Número de teléfono: {profile.phone}</p>
                    </div>
                )
            }
        </div>
    );
}
