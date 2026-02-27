import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import Button from "./ui/Button.jsx";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav
        className="
            w-full bg-white border-b border-gray-200 shadow-sm
            px-6 py-3 flex items-center justify-between
        "
        >
        {/* Nombre de la app */}
        <h1 className="text-xl font-semibold text-gray-800">
            Daily Planner
        </h1>

        {/* Usuario + Logout */}
        <div className="flex items-center gap-4">
            {user && (
            <span className="text-gray-600 text-sm">
                {user.email}
            </span>
            )}

            <Button
            onClick={logout}
            className="w-auto px-4 py-1 bg-red-500 hover:bg-red-600"
            >
            Cerrar sesión
            </Button>
        </div>
        </nav>
    );
}