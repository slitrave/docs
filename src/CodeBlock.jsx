import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function CodeBlock({ children, title }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="my-4 rounded-lg overflow-hidden border border-zinc-800">
            {title && (
                <div className="px-4 py-2 bg-zinc-800/50 border-b border-zinc-800 flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">{title}</span>
                    <button
                        onClick={handleCopy}
                        className="p-1.5 rounded-md hover:bg-zinc-700 transition-colors"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 text-green-400" />
                        ) : (
                            <Copy className="w-4 h-4 text-zinc-500" />
                        )}
                    </button>
                </div>
            )}
            <pre className="p-4 bg-zinc-950 overflow-x-auto">
                <code className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{children}</code>
            </pre>
        </div>
    );
}