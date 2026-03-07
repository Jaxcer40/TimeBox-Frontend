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
            <label className="text-sm font-medium text-gray-300">
            {label}
            </label>
        )}

        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`
            w-full px-3 py-2
            bg-[#0f0f0f]
            border border-[#2a2a2a]
            rounded-lg
            text-gray-200
            placeholder:text-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-blue-600
            focus:border-blue-600
            transition
            ${className}
            `}
        />
        </div>
    );
}