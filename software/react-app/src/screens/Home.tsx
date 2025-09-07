import { communityName } from "../data/global_variables";
import '../App.css';
import { BulletinBoard } from "../components/BulletinBoard";
import { NavMenu } from "../components/NavMenu";

export const HomeScreen = () => {
    return (
        <div>
            <NavMenu isHome={true} />

            <h1>Comunidad de Propietarios {communityName}</h1>

            <h2 className="text-2xl font-bold mb-4 mt-4">Tablón de Anuncios</h2>

            <BulletinBoard />
        </div>
    )
}