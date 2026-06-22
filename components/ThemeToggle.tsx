"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const apply = () => {
            // only auto-follow if the user hasn't picked manually
            if (!localStorage.getItem("theme")) {
                const sys = mq.matches ? "dark" : "light";
                document.documentElement.dataset.theme = sys;
                setTheme(sys);
            }
        };
        const current = (document.documentElement.dataset.theme as "light" | "dark") || "light";
        setTheme(current);
        mq.addEventListener("change", apply);
        return () => mq.removeEventListener("change", apply);
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