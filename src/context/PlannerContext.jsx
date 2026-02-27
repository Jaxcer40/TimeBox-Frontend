import { createContext, useContext, useState } from "react";

const PlannerContext = createContext();

export function usePlanner() {
    return useContext(PlannerContext);
}

// Generar estructura inicial del grid (5 AM a 11 PM)
function generateInitialGrid() {
    const hours = [];
    for (let h = 5; h <= 23; h++) {
        hours.push({
        hour: h,
        slots: {
            "00": "",
            "30": "",
        },
        });
    }
    return hours;
}

export function PlannerProvider({ children }) {
    const [priorities, setPriorities] = useState(["", "", ""]);
    const [brainDump, setBrainDump] = useState("");
    const [timeGrid, setTimeGrid] = useState(generateInitialGrid());

  // Actualizar una prioridad específica
    const updatePriority = (index, value) => {
        const updated = [...priorities];
        updated[index] = value;
        setPriorities(updated);
    };

  // Actualizar brain dump
    const updateBrainDump = (value) => {
        setBrainDump(value);
    };

  // Actualizar una celda del grid
    const updateTimeSlot = (hour, minute, value) => {
        const updatedGrid = timeGrid.map((row) => {
        if (row.hour === hour) {
            return {
            ...row,
            slots: {
                ...row.slots,
                [minute]: value,
            },
            };
        }
        return row;
        });

        setTimeGrid(updatedGrid);
    };

    // Resetear todo (opcional)
    const resetPlanner = () => {
        setPriorities(["", "", ""]);
        setBrainDump("");
        setTimeGrid(generateInitialGrid());
    };

    const value = {
        priorities,
        updatePriority,
        brainDump,
        updateBrainDump,
        timeGrid,
        updateTimeSlot,
        resetPlanner,
    };

    return (
        <PlannerContext.Provider value={value}>
        {children}
        </PlannerContext.Provider>
    );
}
