import React from "react";
import Navbar from "../components/Navbar.jsx";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="p-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Dashboard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Acceso al Planner */}
            <Card className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-800">
                Daily Planner
                </h3>
                <p className="text-gray-600 text-sm">
                Organiza tu día, establece prioridades y gestiona tu horario.
                </p>

                <Button
                className="w-auto px-4 py-2"
                onClick={() => navigate("/planner")}
                >
                Ir al Planner
                </Button>
            </Card>

            {/* Espacio para futuras tarjetas */}
            <Card className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-800">
                Próximamente
                </h3>
                <p className="text-gray-600 text-sm">
                Aquí podrás agregar más módulos o herramientas.
                </p>
            </Card>

            </div>
        </div>
        </div>
    );
}