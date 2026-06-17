"use client";

import { useEffect, useRef, useState } from "react";

export default function PdfButton({
    href,
    label,
    title,
    className = "btn btn-ghost",
    icon = "⤢",
}: {
    href: string;
    label: string;
    title: string;
    className?: string;
    icon?: string;
}) {
    const [open, setOpen] = useState(false);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <button type="button" className={className} onClick={() => setOpen(true)}>
                {icon} {label}
            </button>

            {open && (
                <div
                    className="pdf-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-label={title}
                    onClick={() => setOpen(false)}
                >
                    <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="pdf-bar">
                            <span className="pdf-title">{title}</span>
                            <div className="pdf-actions">
                                <a className="pdf-act" href={href} target="_blank" rel="noopener noreferrer">
                                    Open in new tab ↗
                                </a>
                                <a className="pdf-act" href={href} download>
                                    ↓ Download
                                </a>
                                <button
                                    ref={closeRef}
                                    type="button"
                                    className="pdf-close"
                                    onClick={() => setOpen(false)}
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        <iframe className="pdf-frame" src={`${href}#view=FitH`} title={title} />
                    </div>
                </div>
            )}
        </>
    );
}