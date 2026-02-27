import React from "react";

export default function Button({
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
}) {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
            w-full px-4 py-2 rounded-lg font-medium
            bg-blue-500 text-white
            hover:bg-blue-600
            disabled:bg-gray-300 disabled:cursor-not-allowed
            transition-all shadow-sm
            ${className}
        `}
        >
        {children}
        </button>
    );
}
