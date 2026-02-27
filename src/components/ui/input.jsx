import React from "react";

export default function Input({
    label,
    type = "text",
    value,
    onChange,
    placeholder = "",
    className = "",
}) {
    return (
        <div className="flex flex-col gap-1 w-full">
        {label && (
            <label className="text-sm font-medium text-gray-700">{label}</label>
        )}

        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-400 
                        focus:border-blue-400 transition text-gray-800
                        ${className}`}
        />
        </div>
    );
}