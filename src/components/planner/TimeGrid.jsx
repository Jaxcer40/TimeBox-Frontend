import React from "react";
import { usePlanner } from "../../context/PlannerContext.jsx";
import TimeSlot from "./TimeSlot.jsx";
import Card from "../ui/Card.jsx";

export default function TimeGrid() {
    const { timeGrid } = usePlanner();

  // Convertir hora 24h a formato AM/PM
    const formatHour = (h) => {
        const suffix = h >= 12 ? "PM" : "AM";
        const hour12 = h % 12 === 0 ? 12 : h % 12;
        return `${hour12} ${suffix}`;
    };

    return (
        <Card className="w-full overflow-x-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Daily Schedule
            </h2>

            <div className="min-w-[600px] grid grid-cols-3 border border-gray-200 rounded-xl overflow-hidden">
                {/* Encabezados */}
                <div className="bg-gray-100 border-r border-gray-200 p-2 font-medium text-gray-700 text-center">
                Hour
                </div>
                <div className="bg-gray-100 border-r border-gray-200 p-2 font-medium text-gray-700 text-center">
                :00
                </div>
                <div className="bg-gray-100 p-2 font-medium text-gray-700 text-center">
                :30
                </div>

                {/* Filas */}
                {timeGrid.map((row) => (
                <React.Fragment key={row.hour}>
                    {/* Columna de la hora */}
                    <div className="border-t border-gray-200 border-r p-2 text-center text-gray-700 font-medium bg-gray-50">
                        {formatHour(row.hour)}
                    </div>

                    {/* Slot :00 */}
                    <TimeSlot
                        hour={row.hour}
                        minute="00"
                        value={row.slots["00"]}
                    />

                    {/* Slot :30 */}
                    <TimeSlot
                        hour={row.hour}
                        minute="30"
                        value={row.slots["30"]}
                    />
                </React.Fragment>
                ))}
            </div>
        </Card>
    );
}