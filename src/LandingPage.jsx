import React from 'react';
import { motion } from 'framer-motion';
import { Skull, Terminal, Send, Eye, Shield, Target, AlertTriangle } from 'lucide-react';
// ⬅️ FIXED: Changed '@/components/ui/button' to './components/ui/button'
import { Button } from './components/ui/button';

export default function LandingPage({ onEnter }) {
    return (
        <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-transparent to-zinc-900/50" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent" />
            </div>

            {/* Floating particles animation */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-zinc-700 rounded-full"
                        initial={{ 
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                            opacity: 0
                        }}
                        animate={{ 
                            y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                            opacity: [0, 0.5, 0]
                        }}
                        transition={{ 
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12">
                {/* Header with Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                        <Skull className="w-5 h-5 text-zinc-300" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-zinc-100 tracking-tight">Threat Intelligence Manual</h1>
                        <p className="text-xs text-zinc-500">Formed by ɳeo</p>
                    </div>
                </motion.div>

                {/* Hero Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400 mb-6">
                            <Eye className="w-3 h-3" />
                            <span>Comprehensive OSINT Reference</span>
                        </div>
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 mb-6 tracking-tight"
                    >
                             Threat Intelligence <br />& OSINT Manual
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-zinc-500 max-w-2xl mx-auto text-lg mb-8"
                    >
                        A comprehensive guide for Red Teamers, Threat Intelligence Analysts, 
                        Investigators, and Bug Bounty Hunters.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {["Red Team", "Threat Intel", "Investigators", "Bug Bounty"].map((tag) => (
                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Button
                            onClick={onEnter}
                            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-10 py-7 text-lg rounded-xl border border-zinc-700 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Enter Documentation
                        </Button>
                    </motion.div>
                </div>

                {/* Feature Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="grid md:grid-cols-2 gap-6 mb-16"
                >
                    <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                                <Target className="w-5 h-5 text-zinc-400" />
                            </div>
                            <h3 className="font-semibold text-zinc-200">Purpose</h3>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Learn how adversaries build FULL identity profiles using open source data, 
                            breach databases, and digital footprinting techniques to track targets across the internet.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-emerald-500" />
                            </div>
                            <h3 className="font-semibold text-zinc-200">What You'll Learn</h3>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            Master attack chains, breach data exploitation, social media mining, metadata analysis, 
                            IP tracking, and operational security to conduct professional investigations.
                        </p>
                    </div>
                </motion.div>

                {/* Stats or Info */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-8 mb-16"
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold text-zinc-300 mb-1">13</div>
                        <div className="text-sm text-zinc-600">Chapters</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-zinc-300 mb-1">100+</div>
                        <div className="text-sm text-zinc-600">Tools & Resources</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-zinc-300 mb-1">7</div>
                        <div className="text-sm text-zinc-600">Attack Stages</div>
                    </div>
                </motion.div>

                {/* Warning */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="max-w-2xl mx-auto p-4 rounded-lg bg-amber-950/20 border border-amber-900/50 mb-12"
                >
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm text-amber-200/90 font-medium mb-1">Educational Purpose Only</p>
                            <p className="text-xs text-amber-200/70">
                                This guide is for educational, ethical and defensive security purposes. Always follow ethical guidelines 
                                and legal frameworks when conducting research.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
                        <Send className="w-4 h-4 text-zinc-500" />
                        <span className="text-sm text-zinc-500">Contact:</span>
                        <a 
                            href="https://t.me/govdebt" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
                        >
                            @govdebt
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}