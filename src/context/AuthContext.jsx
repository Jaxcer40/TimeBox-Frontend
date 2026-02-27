import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // Usuario en memoria

    const login = async ({ email, password }) => {
        // Aquí después harás fetch a NestJS <---
        if (!email || !password) {
            throw new Error("Credenciales inválidas");
        }

        // Usuario simulado
        const fakeUser = {
            id: 1,
            name: "Usuario",
            email,
        };

        setUser(fakeUser);
        return fakeUser;
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}