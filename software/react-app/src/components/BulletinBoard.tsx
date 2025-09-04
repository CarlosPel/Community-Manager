import { useState, useEffect } from "react";
import ReactPullToRefresh from "react-pull-to-refresh";
import { AnnouncementCard } from "./AnnouncementCard";

export const BulletinBoard = () => {
    const [announcements, setAnnouncements] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAnnouncementsData = async () => {
        try {
            setLoading(true);
            setError(null); // resetear error antes de intentar
            const data = await fetchAnnouncements();
            setAnnouncements(data);
        } catch (err) {
            console.error("Error al cargar anuncios:", err);
            setError("Error al cargar los anuncios. Intenta nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    const refreshAnnouncements = async () => {
        await fetchAnnouncementsData();
    };

    useEffect(() => {
        fetchAnnouncementsData();
    }, []);

    return (
        <ReactPullToRefresh onRefresh={refreshAnnouncements}>
            <div>
                <h2>Tablón de Anuncios</h2>

                {loading && <p>Cargando anuncios...</p>}

                {error && (
                    <p className="text-red-500 font-bold">
                        {error}
                    </p>
                )}

                {!loading && !error && announcements.length === 0 && (
                    <p>No hay anuncios disponibles.</p>
                )}

                {!loading && !error && announcements.map((announcement, index) => (
                    <AnnouncementCard
                        key={index}
                        title={announcement.title}
                        content={announcement.content}
                        date={announcement.date}
                    />
                ))}
            </div>
        </ReactPullToRefresh>
    );
};

async function fetchAnnouncements() {
    const response = await fetch("/api/announcements"); // reemplaza con tu endpoint real
    if (!response.ok) {
        throw new Error("Error al obtener anuncios");
    }
    return response.json();
}
