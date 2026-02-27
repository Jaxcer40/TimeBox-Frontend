import React from "react";

export default function Card({ children, className = "" }) {
    return (
        <div
        className={`
            bg-white rounded-xl shadow-md p-5
            border border-gray-200
            ${className}
        `}
        >
        {children}
        </div>
    );
}