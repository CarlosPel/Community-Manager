import { IncidentsBoard } from "../components/IncidentsBoard"
import { NavMenu } from "../components/NavMenu"

export const IncidentsScreen = () => {
    return (
        <div>
            <NavMenu />

            <h1>Incidencias</h1>

            <IncidentsBoard />
        </div>
    )
}