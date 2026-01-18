"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DeveloperModeContextType {
    isDevMode: boolean;
    toggleDevMode: () => void;
}

const DeveloperModeContext = createContext<DeveloperModeContextType | undefined>(undefined);

export function DeveloperModeProvider({ children }: { children: ReactNode }) {
    const [isDevMode, setIsDevMode] = useState(false);

    const toggleDevMode = () => {
        setIsDevMode((prev) => !prev);
    };

    return (
        <DeveloperModeContext.Provider value={{ isDevMode, toggleDevMode }}>
            {children}
        </DeveloperModeContext.Provider>
    );
}

export function useDeveloperMode() {
    const context = useContext(DeveloperModeContext);
    if (context === undefined) {
        throw new Error("useDeveloperMode must be used within a DeveloperModeProvider");
    }
    return context;
}
