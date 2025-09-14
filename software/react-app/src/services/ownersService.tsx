import axios from "axios";
import { useState } from "react";

export default function CreateOwner() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [premisesId, setPremisesId] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/owners", {
            name,
            email,
            premises_id: Number(premisesId),
        });
        alert("Owner creado correctamente");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input value={premisesId} onChange={(e) => setPremisesId(e.target.value)} placeholder="Premises ID" />
            <button type="submit">Crear Owner</button>
        </form>
    );
}
