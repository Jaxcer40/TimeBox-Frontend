// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Card from "../components/ui/Card.jsx";
import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
        await login({ email, password });
        navigate("/");
        } catch (err) {
        setError("Credenciales inválidas");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Iniciar sesión
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
                label="Email"
                type="email"
                value={email}
                placeholder="tu@email.com"
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                label="Contraseña"
                type="password"
                value={password}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button type="submit" className="mt-2">
                Entrar
            </Button>
            </form>
        </Card>
        </div>
    );
}