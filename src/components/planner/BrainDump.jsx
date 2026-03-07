import React from "react";
import { usePlanner } from "../../context/PlannerContext.jsx";
import Card from "../ui/Card.jsx";

export default function BrainDump() {
    const { brainDump, updateBrainDump } = usePlanner();

    return (
                <Card className="w-full">
        <h2 className="text-lg font-semibold text-gray-200 mb-4">
            Brain Dump
        </h2>

        <textarea
            value={brainDump}
            onChange={(e) => updateBrainDump(e.target.value)}
            placeholder="Write anything that comes to mind..."
            className="
            w-full h-48 p-3
            bg-[#0f0f0f]
            border border-[#2a2a2a]
            rounded-lg
            text-gray-200
            placeholder:text-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-blue-600
            focus:border-blue-600
            transition
            resize-none
            "
        />
        </Card>
    );
}