import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from './lib/utils';

export default function DocSection({ id, title, icon: Icon, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div id={id} className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300",
                    "bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700",
                    "group"
                )}
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                    {Icon && <Icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200" />}
                </div>
                <span className="flex-1 text-left font-semibold text-zinc-100 text-lg tracking-tight">
                    {title}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5 text-zinc-500" />
                </motion.div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="mt-3 p-6 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}