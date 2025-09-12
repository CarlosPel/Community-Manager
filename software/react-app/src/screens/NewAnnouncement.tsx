export const NewAnnouncement = () => {
    return (
        <div>
            <h1>Nuevo Comunicado</h1>
            <form>
                <div>
                    <label>Título:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Contenido:</label>
                    <textarea></textarea>
                </div>
                <button type="submit">Crear Comunicado</button>
            </form>
        </div>
    );
};
