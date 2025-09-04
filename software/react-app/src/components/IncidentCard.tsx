import type { Status } from "../types/Status";

type IncidentCardProps = {
    title: string;
    description: string;
    date: string;
    status: Status;
};

export const IncidentCard = ({ title, description, date, status }: IncidentCardProps) => {
    return (
        <div
            className={`border rounded-lg shadow p-4 max-w-sm ${status === 'open'
                ? 'border-red-500'
                : status === 'closed'
                    ? 'border-gray-400'
                    : status === 'pending'
                        ? 'border-yellow-500'
                        : 'border-green-500'
                }`}
        >
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <span className="text-green-600 font-semibold">{date}</span>
            <span className={`status-badge status-${status}`}>{status}</span>
        </div>
    );
};