import { IncidentCard } from "./IncidentCard";
import { Board } from "./Board";
import type { Status } from "../types/Status";

async function fetchIncidents() {
    const response = await fetch("/api/incidents");
    if (!response.ok) throw new Error("Error al obtener incidencias");
    return response.json();
}

type Incident = {
    title: string;
    description: string;
    date: string;
    status: Status;
};

export const IncidentsBoard = () => (
    <Board
        title="Incidencias"
        fetchData={fetchIncidents}
        renderItem={(incident: Incident, index: number) => (
            <IncidentCard
                key={index}
                title={incident.title}
                description={incident.description}
                date={incident.date}
                status={incident.status}
            />
        )}
    />
);
