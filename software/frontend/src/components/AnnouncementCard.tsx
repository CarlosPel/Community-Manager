export const AnnouncementCard = (title: string, description: string, date: string) => {
    return (
        <div className="border rounded-lg shadow p-4 max-w-sm">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <span className="text-green-600 font-semibold">${date}</span>
        </div>
    );
};