import React from "react";
import { usePlanner } from "../../context/PlannerContext.jsx";

export default function TimeSlot({ hour, minute, value }) {
    const { updateTimeSlot } = usePlanner();

    return (
        <div className="
            border-t border-[#2a2a2a] border-r last:border-r-0
            p-2 bg-[#141414]"
        >
        <input
            type="text"
            value={value}
            onChange={(e) => updateTimeSlot(hour, minute, e.target.value)}
            className="
            w-full px-2 py-1 text-sm
            bg-[#0f0f0f]
            border border-[#2a2a2a]
            rounded-md
            text-gray-200
            placeholder:text-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-blue-600
            focus:border-blue-600
            transition
            "
            placeholder=""
        />
        </div>
    );
}