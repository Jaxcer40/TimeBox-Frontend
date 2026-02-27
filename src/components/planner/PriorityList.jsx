import React from "react";
import { usePlanner } from "../../context/PlannerContext.jsx";
import Input from "../ui/Input.jsx";
import Card from "../ui/Card.jsx";

export default function PriorityList() {
    const { priorities, updatePriority } = usePlanner();

    return (
        <Card className="w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Top Priorities
        </h2>

        <div className="flex flex-col gap-3">
            {priorities.map((value, index) => (
            <Input
                key={index}
                value={value}
                placeholder={`Priority ${index + 1}`}
                onChange={(e) => updatePriority(index, e.target.value)}
            />
            ))}
        </div>
        </Card>
    );
}