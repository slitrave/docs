import React from 'react';
import { cn } from './lib/utils';
import { TextWithLinks } from './ExternalLink';

export default function InfoCard({ title, items, className }) {
    return (
        <div className={cn("rounded-lg border border-zinc-800 overflow-hidden", className)}>
            {title && (
                <div className="px-4 py-3 bg-zinc-800/30 border-b border-zinc-800">
                    <h4 className="font-medium text-zinc-200">{title}</h4>
                </div>
            )}
            <div className="p-4 space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <span className="text-zinc-600">•</span>
                        <TextWithLinks className="text-zinc-400 text-sm">
                            {item}
                        </TextWithLinks>
                    </div>
                ))}
            </div>
        </div>
    );
}