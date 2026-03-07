import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import Button from "./ui/Button.jsx";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav
        className="
            w-full
            bg-[#1a1a1a]
            border-b border-[#2a2a2a]
            px-6 py-3
            flex items-center justify-between
            shadow-lg
        "
        >
        {/* Nombre de la app */}
        <h1 className="text-xl font-semibold text-gray-200">
            Daily Planner
        </h1>

        {/* Usuario + Logout */}
        <div className="flex items-center gap-4">
            {user && (
            <span className="text-gray-400 text-sm">
                {user.email}
            </span>
            )}

            <Button
            onClick={logout}
            className="w-auto px-4 py-1 bg-red-600 hover:bg-red-500"
            >
            Cerrar sesión
            </Button>
        </div>
        </nav>
    );
}