import React from "react";
import Navbar from "../components/Navbar.jsx";
import PriorityList from "../components/planner/PriorityList.jsx";
import BrainDump from "../components/planner/BrainDump.jsx";
import TimeGrid from "../components/planner/TimeGrid.jsx";

export default function Planner() {
    return (
        <div className="min-h-screen bg-gray-100">
        <Navbar />

        <div className="p-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Columna izquierda */}
            <div className="flex flex-col gap-6 lg:col-span-1">
                <PriorityList />
                <BrainDump />
            </div>

            {/* Columna derecha */}
            <div className="lg:col-span-2">
                <TimeGrid />
            </div>

            </div>
        </div>
        </div>
    );
}