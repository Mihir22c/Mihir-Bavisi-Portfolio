"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const current = (document.documentElement.dataset.theme as "light" | "dark") || "light";
        setTheme(current);
    }, []);

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch { }
        setTheme(next);
    }

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
            {theme === "dark" ? "☀" : "☾"}
        </button>
    );
}