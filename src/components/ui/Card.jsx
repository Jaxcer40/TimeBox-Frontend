import React from "react";

export default function Card({ children, className = "" }) {
    return (
        <div
        className={`
            bg-[#1a1a1a] 
            border border-[#2a2a2a]
            rounded-xl 
            shadow-lg 
            p-5 
            text-gray-200
            ${className}
        `}
        >
        {children}
        </div>

    );
}