import React from "react";
import { usePlanner } from "../../context/PlannerContext.jsx";

export default function TimeSlot({ hour, minute, value }) {
    const { updateTimeSlot } = usePlanner();

    return (
        <div
        className="
            border-t border-gray-200 border-r last:border-r-0
            p-2 bg-white
        "
        >
        <input
            type="text"
            value={value}
            onChange={(e) => updateTimeSlot(hour, minute, e.target.value)}
            className="
            w-full px-2 py-1 text-sm
            border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-400
            focus:border-blue-400 transition
            "
            placeholder=""
        />
        </div>
    );
}