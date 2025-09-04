import { communityName } from "../data/global_variables";
import '../App.css';
import { BulletinBoard } from "../components/BulletinBoard";
import { NavMenu } from "../components/NavMenu";

export const MainScreen = () => {
    return (
        <div>
            <NavMenu isHome={true} />

            <h1>Comunidad de Vecinos {communityName}</h1>

            <BulletinBoard />
        </div>
    )
}