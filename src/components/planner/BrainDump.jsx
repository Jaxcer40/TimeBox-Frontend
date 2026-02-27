import React from "react";
import { usePlanner } from "../../context/PlannerContext.jsx";
import Card from "../ui/Card.jsx";

export default function BrainDump() {
    const { brainDump, updateBrainDump } = usePlanner();

    return (
        <Card className="w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Brain Dump
        </h2>

        <textarea
            value={brainDump}
            onChange={(e) => updateBrainDump(e.target.value)}
            placeholder="Write anything that comes to mind..."
            className="
            w-full h-48 p-3 border border-gray-300 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-blue-400
            focus:border-blue-400 transition text-gray-800
            resize-none
            "
        />
        </Card>
    );
}