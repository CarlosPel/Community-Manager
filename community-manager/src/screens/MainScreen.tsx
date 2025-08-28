import { communityName } from "../data/global_variables";
import '../App.css';
import { BulletinBoard } from "../components/BulletinBoard";

export const MainScreen = () => {
    return (
        <div>
            <h1>Comunidad de Vecinos {communityName}</h1>
            <BulletinBoard />
        </div>
    )
}