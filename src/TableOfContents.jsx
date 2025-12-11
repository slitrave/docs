import React from 'react';
import { cn } from './lib/utils';

const sections = [
    { id: "intro", label: "Introduction" },
    { id: "attack-chains", label: "Attack Chains" },
    { id: "breach-data", label: "Breach Data" },
    { id: "data-brokers", label: "Data Brokers" },
    { id: "social-media", label: "Social Media" },
    { id: "metadata", label: "Metadata" },
    { id: "image-geo", label: "Image & Geo" },
    { id: "family", label: "Relational Mapping" },
    { id: "ip-hunting", label: "IP Hunting" },
    { id: "toolsets", label: "Toolsets" },
    { id: "dorking", label: "Google Dorking" },
    { id: "darkweb", label: "Dark Web" },
    { id: "opsec", label: "OPSEC" },
];

export default function TableOfContents({ activeSection, onSectionClick }) {

    return (
        <nav className="space-y-1">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-3">
                Contents
            </h3>
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => onSectionClick && onSectionClick(section.id)}
                    className={cn(
                        "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200",
                        activeSection === section.id
                            ? "bg-zinc-800 text-zinc-100"
                            : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
                    )}
                >
                    {section.label}
                </button>
            ))}
        </nav>
    );
}