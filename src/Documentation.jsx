import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    BookOpen, Link2, Database, Users, Globe, FileSearch, 
    Image, UserPlus, Server, Wrench, Search, Moon, Shield,
    Target, AlertTriangle, ChevronRight, Terminal, Eye,
    Fingerprint, MapPin, Building2, Skull, Lock, ArrowLeft, ArrowRight
} from 'lucide-react';
import CodeBlock from './CodeBlock';
import InfoCard from './InfoCard';
import TableOfContents from './TableOfContents';
import DataBrokerTable from './DataBrokerTable';
import { TextWithLinks } from './ExternalLink';
import LandingPage from './LandingPage';
import { Button } from './components/ui/button';

const sections = [
    { id: "intro", label: "Introduction", icon: BookOpen, desc: "Learn the fundamentals of OSINT and how attackers build complete identity profiles from public data." },
    { id: "attack-chains", label: "Attack Chains", icon: Link2, desc: "Understand systematic approaches adversaries use to connect data points into comprehensive profiles." },
    { id: "breach-data", label: "Breach Data", icon: Database, desc: "Explore how to leverage data breaches to uncover passwords, usernames, and associated accounts." },
    { id: "data-brokers", label: "Data Brokers", icon: Users, desc: "Master people search engines and aggregators that compile identity, address, and contact information." },
    { id: "social-media", label: "Social Media", icon: Globe, desc: "Discover techniques for mining social platforms and tracking usernames across the web." },
    { id: "metadata", label: "Metadata", icon: Fingerprint, desc: "Extract hidden information from images, documents, and digital files to reveal locations and devices." },
    { id: "image-geo", label: "Image & Geo", icon: MapPin, desc: "Use reverse image search and geolocation tools to identify people and places from photos." },
    { id: "family", label: "Relational Mapping", icon: UserPlus, desc: "Pivot through family members and social connections to confirm identities and locations." },
    { id: "ip-hunting", label: "IP Hunting", icon: Server, desc: "Track IP addresses and infrastructure to deanonymize targets and map their digital footprint." },
    { id: "toolsets", label: "Toolsets", icon: Wrench, desc: "Comprehensive list of OSINT automation tools for efficient data collection and analysis." },
    { id: "dorking", label: "Google Dorking", icon: Search, desc: "Advanced search operators to expose sensitive information and misconfigurations." },
    { id: "darkweb", label: "Dark Web", icon: Moon, desc: "Navigate dark web resources and leak repositories for intelligence gathering." },
    { id: "opsec", label: "OPSEC", icon: Shield, desc: "Essential operational security practices to protect your identity during research." },
];

export default function Documentation() {
    const [hasEntered, setHasEntered] = useState(false);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const activeSection = sections[currentSectionIndex].id;

    useEffect(() => {
        // Add global styles for hover pulse animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes pulse-text {
                0%, 100% { 
                    color: rgb(161, 161, 170);
                }
                50% { 
                    color: rgb(228, 228, 231);
                }
            }
            .hover-pulse:hover {
                animation: pulse-text 1.5s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const goToNext = () => {
        if (currentSectionIndex < sections.length - 1) {
            setCurrentSectionIndex(currentSectionIndex + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToPrev = () => {
        if (currentSectionIndex > 0) {
            setCurrentSectionIndex(currentSectionIndex - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToSection = (sectionId) => {
        const index = sections.findIndex(s => s.id === sectionId);
        if (index !== -1) {
            setCurrentSectionIndex(index);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (!hasEntered) {
        return <LandingPage onEnter={() => setHasEntered(true)} />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen h-full text-zinc-300 bg-[#0a0a0a]"
        >
            {/* Header */}
            <motion.header 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-xl"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                <Skull className="w-5 h-5 text-zinc-300" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-zinc-100 tracking-tight">Threat Intelligence Manual</h1>
                                <p className="text-xs text-zinc-500">Formed by ɳeo</p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-xs text-zinc-600">
                            <Terminal className="w-4 h-4" />
                            <span>v1.0</span>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Main Content */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
            >
                <div className="flex gap-8">
                    {/* Sidebar - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <TableOfContents activeSection={activeSection} onSectionClick={goToSection} />
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSectionIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                        {activeSection === 'intro' && (
                            <>
                        {/* Section Header */}
                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                <BookOpen className="w-7 h-7 text-zinc-300" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Introduction</h2>
                                <p className="text-sm text-zinc-500 mt-1">{sections[0].desc}</p>
                            </div>
                        </div>

                        {/* Purpose & Audience */}
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                                        <Target className="w-5 h-5 text-zinc-400" />
                                    </div>
                                    <h3 className="font-semibold text-zinc-200">Purpose</h3>
                                </div>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    Show how adversaries build FULL identity profiles (doxxing) using open source data, 
                                    breach data, and digital footprinting.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <h3 className="font-semibold text-zinc-200">Message</h3>
                                </div>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    I hope this guide helps everyone take their research and data collection to the next level. 
                                    Help the community by contributing. 
                                    <br />– ɳeo
                                </p>
                            </div>
                        </div>

                        {/* Introduction */}
                        <div className="space-y-6">
                            <div className="prose prose-invert prose-zinc max-w-none">
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    <TextWithLinks>
                                        Doxxing is not about "hacking into" anything; it's about connecting public crumbs of data into a full profile.
                                        Attackers systematically move from seed data (an email, username, phone number, or domain) to complete identity profiles.
                                    </TextWithLinks>
                                </p>
                                
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <InfoCard 
                                        title="Target Data Points"
                                        items={[
                                            "Full legal name",
                                            "Address history",
                                            "Family members",
                                            "Employment details",
                                            "Hobbies, habits, weak points"
                                        ]}
                                    />
                                    <InfoCard 
                                        title="Seed Data Types"
                                        items={[
                                            "Email addresses",
                                            "Usernames",
                                            "Phone numbers",
                                            "Domain names",
                                            "Partial names"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        </>
                        )}

                        {/* Attack Chains */}
                        {activeSection === 'attack-chains' && (
                        <div className="space-y-8">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Link2 className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Attack Chains</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[1].desc}</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {/* Mindset */}
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                                        <span className="text-zinc-600">2.1</span> Understanding the Doxxing Mindset
                                    </h3>
                                    <p className="text-zinc-400 mb-4">
                                        <TextWithLinks>
                                            Adversaries follow a pattern: Collect → Correlate → Confirm → Expand
                                        </TextWithLinks>
                                    </p>
                                    <CodeBlock title="Attack Flow">
{`Email address → username → social media → workplace → family → financial`}
                                    </CodeBlock>
                                </div>

                                {/* Framework */}
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                                        <span className="text-zinc-600">2.2</span> Attack Chain Framework
                                    </h3>
                                    <div className="grid gap-4">
                                        {[
                                            { stage: "Stage 1: SEED DATA", items: ["Email addresses (from leaks, public sites, domains)", "Usernames (gaming, forums, social media)", "Phone numbers", "Real names (partial or full)"] },
                                            { stage: "Stage 2: DATA BROKER & PUBLIC RECORDS", items: ["People search engines (Infotracer, Whitepages, Spokeo, TruthFinder)", "Property/tax databases", "Business registrations (OpenCorporates)", "Court filings (PACER)"] },
                                            { stage: "Stage 3: SOCIAL MEDIA & DIGITAL FOOTPRINTING", items: ["Username cross-check: WhatsMyName, Maigret, Sherlock", "Social platforms: LinkedIn, Facebook, Instagram, Reddit", "Friends, followers, relatives as indirect pivots"] },
                                            { stage: "Stage 4: BREACH DATA EXPLOITATION", items: ["HaveIBeenPwned, Dehashed, Scylla, Snusbase", "Leak parsing: passwords → reused credentials → new accounts"] },
                                            { stage: "Stage 5: METADATA & DEVICE FINGERPRINTING", items: ["ExifTool (image metadata)", "FOCA & metagoofil (document metadata)", "Browser/device fingerprint leaks"] },
                                            { stage: "Stage 6: INFRASTRUCTURE MAPPING", items: ["WhoisXML, ViewDNS, SecurityTrails", "SSL certificate transparency logs (crt.sh)", "Shodan/Censys (find owned devices)"] },
                                            { stage: "Stage 7: FAMILY & RELATIONAL PIVOTS", items: ["Relatives from data brokers → their social media", "Friends tagged in posts revealing locations"] },
                                        ].map((item, index) => (
                                            <div key={index} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                                                <h4 className="font-medium text-zinc-200 mb-3 flex items-center gap-2">
                                                    <span className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs text-zinc-500">{index + 1}</span>
                                                    {item.stage}
                                                </h4>
                                                <ul className="space-y-1.5">
                                                    {item.items.map((subitem, i) => (
                                                        <li key={i} className="text-sm text-zinc-500 flex items-center gap-2">
                                                            <ChevronRight className="w-3 h-3 text-zinc-700 flex-shrink-0" />
                                                            <TextWithLinks>{subitem}</TextWithLinks>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deep Techniques */}
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                                        <span className="text-zinc-600">2.3</span> Deep Doxxing Techniques
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <InfoCard 
                                            title="Phone Number Doxxing"
                                            items={[
                                                "HLR lookups (HLRLookup.com)",
                                                "Reverse search: Truecaller, Sync.me, Infotracer",
                                                "Carrier lookups (who owns the number?)"
                                            ]}
                                        />
                                        <InfoCard 
                                            title="Email Address Doxxing"
                                            items={[
                                                "Check Google/Gravatar images for account photos",
                                                "Epieos: Reverse Google account search",
                                                "Check associated usernames across breaches"
                                            ]}
                                        />
                                        <InfoCard 
                                            title="Username Doxxing"
                                            items={[
                                                "Sherlock, Maigret, WhatsMyName sweeps",
                                                "Forum cross-use analysis",
                                                "Gaming platform profiles"
                                            ]}
                                        />
                                        <InfoCard 
                                            title="Workplace Doxxing"
                                            items={[
                                                "LinkedIn scraping: employee hierarchies",
                                                "Email pattern guessing",
                                                "Zoominfo, RocketReach for org charts"
                                            ]}
                                        />
                                    </div>
                                </div>

                                {/* Advanced Correlation */}
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                                        <span className="text-zinc-600">2.4</span> Advanced Correlation
                                    </h3>
                                    <ul className="space-y-2 mb-4">
                                        {[
                                            "Connect addresses to relatives and past residents",
                                            "Build time-based address history",
                                            "Overlay breach data on current employer accounts",
                                            "Cross-pivot domains registered by same WHOIS email"
                                        ].map((item, i) => (
                                            <li key={i} className="text-zinc-400 flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4 text-zinc-600" />
                                                <TextWithLinks>{item}</TextWithLinks>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {["SpiderFoot", "Maltego", "IntelX", "Scylla"].map((tool) => (
                                            <span key={tool} className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs">
                                                <TextWithLinks>{tool}</TextWithLinks>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Real World Examples */}
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                                        <span className="text-zinc-600">2.5</span> Real-World Chain Examples
                                    </h3>
                                    <div className="space-y-3">
                                        <CodeBlock title="Example 1">
{`Username → forum posts → photo with EXIF → GPS coordinates → property record → family members`}
                                        </CodeBlock>
                                        <CodeBlock title="Example 2">
{`Work email → Dehashed → reused password → LinkedIn login → map company infrastructure`}
                                        </CodeBlock>
                                    </div>
                                </div>

                                {/* Defensive */}
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4 flex items-center gap-2">
                                        <span className="text-zinc-600">2.6</span> Defensive Countermeasures
                                    </h3>
                                    <InfoCard 
                                        items={[
                                            "Remove info from data brokers (opt-out)",
                                            "Use alias emails/usernames",
                                            "Strip metadata from files/photos",
                                            "Train employees on oversharing risks"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        )}

                        {/* Breach Data */}
                        {activeSection === 'breach-data' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Database className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Breach Data</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[2].desc}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Sources</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {["HaveIBeenPwned (free)", "Dehashed", "Snusbase", "LeakCheck", "Scylla"].map((source) => (
                                            <span key={source} className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm">
                                                <TextWithLinks>{source}</TextWithLinks>
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Pivoting Steps</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Start with email in breach DB → extract leaked password",
                                            "Try password reuse across other accounts",
                                            "From username reuse, find forums/social accounts",
                                            "Cross-pivot to domains registered by same email",
                                            "Link back to physical addresses, workplaces, devices"
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                                                <span className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center text-xs text-zinc-500 flex-shrink-0">
                                                    {i + 1}
                                                </span>
                                                <TextWithLinks className="text-zinc-400 text-sm">{step}</TextWithLinks>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Dark Web & Underground</h3>
                                    <InfoCard 
                                        items={[
                                            "IntelX.io (dark web indexed)",
                                            "Kilos, DarkOwl",
                                            "Telegram leak channels & paste sites"
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                        )}

                        {/* Data Brokers */}
                        {activeSection === 'data-brokers' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Users className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Data Brokers</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[3].desc}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-900/50">
                                    <p className="text-sm text-amber-200/80">
                                        <strong>Usage Notes:</strong> Verify with at least 2–3 independent sources before treating any record as confirmed.
                                        Cross-pivot: NAME ⇄ EMAIL ⇄ PHONE ⇄ ADDRESS ⇄ DOB ⇄ RELATIVES ⇄ EMPLOYER.
                                    </p>
                                </div>
                                
                                <DataBrokerTable />

                                <div className="space-y-4 mt-8">
                                    <h3 className="text-lg font-semibold text-zinc-200">Workflow Examples</h3>
                                    
                                    <CodeBlock title="From PHONE → PERSON">
{`1. Run phone in Truecaller / NumLookup / Whitepages (reverse)
2. Cross-check name & city in FastPeopleSearch + Intelius
3. Pivot to relatives list → verify via Facebook/LinkedIn
4. Confirm address against County Assessor + Zillow photos`}
                                    </CodeBlock>

                                    <CodeBlock title="From EMAIL → FULL PROFILE">
{`1. Epieos (Google account traces) → grab avatar, Maps lists
2. Pipl/Spokeo/Thatsthem: email → addresses, phones
3. Dehashed/LeakCheck: see breaches → new usernames
4. Use usernames in Sherlock/Maigret; pull social links
5. Validate home address via property records`}
                                    </CodeBlock>

                                    <CodeBlock title="From COMPANY DOMAIN → EMPLOYEES">
{`1. Hunter.io: email pattern (e.g., {first}.{last}@)
2. LinkedIn: search site:linkedin.com/in "CompanyName"
3. ZoomInfo/RocketReach: confirm titles/emails
4. Crt.sh/SecurityTrails: enumerate subdomains`}
                                    </CodeBlock>
                                </div>

                                <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                                    <h4 className="font-medium text-zinc-200 mb-3">Opt-Out / Removal Quick Start</h4>
                                    <ul className="space-y-2 text-sm text-zinc-400">
                                        <li className="flex items-center gap-2"><span>•</span> <TextWithLinks>Search "[sitename] opt out" or "privacy request"</TextWithLinks></li>
                                        <li className="flex items-center gap-2"><span>•</span> <TextWithLinks>Prioritize: Whitepages, Spokeo, Intelius, BeenVerified, Radaris</TextWithLinks></li>
                                        <li className="flex items-center gap-2"><span>•</span> <span>Set calendar reminders: reappearances are common—re-check quarterly</span></li>
                                        <li className="flex items-center gap-2"><span>•</span> <span>Consider a PO Box or CMRA address for high-risk situations</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )}

                        {/* Social Media */}
                        {activeSection === 'social-media' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Globe className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Social Media</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[4].desc}</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <InfoCard 
                                    title="Platforms & Techniques"
                                    items={[
                                        "Facebook Graph queries",
                                        "Instagram location + tagged filters",
                                        "TikTok username & sound search",
                                        "Reddit advanced search (Pushshift)",
                                        "LinkedIn company org charts"
                                    ]}
                                />
                                <InfoCard 
                                    title="Username Tools"
                                    items={[
                                        "WhatsMyName",
                                        "Maigret",
                                        "Sherlock",
                                        "Namechk / KnowEm"
                                    ]}
                                />
                            </div>
                        </div>
                        )}

                        {/* Metadata */}
                        {activeSection === 'metadata' && (
                        <div className="space-y-4">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Fingerprint className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Metadata</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[5].desc}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { name: "ExifTool", desc: "Image metadata extraction" },
                                        { name: "FOCA", desc: "PDF/Office document analysis" },
                                        { name: "metagoofil", desc: "Metadata harvesting" },
                                        { name: "Email Headers", desc: "IP/device information" }
                                    ].map((tool) => (
                                        <div key={tool.name} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 flex-1 min-w-[200px]">
                                            <h4 className="font-medium text-zinc-200 mb-1">
                                                <TextWithLinks>{tool.name}</TextWithLinks>
                                            </h4>
                                            <p className="text-sm text-zinc-500">{tool.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        )}

                        {/* Image & Geo */}
                        {activeSection === 'image-geo' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <MapPin className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Image & Geo</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[6].desc}</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <InfoCard 
                                    title="Image Analysis"
                                    items={[
                                        "PimEyes (face match)",
                                        "Yandex reverse image",
                                        "Google Lens",
                                        "TinEye"
                                    ]}
                                />
                                <InfoCard 
                                    title="Geolocation Tools"
                                    items={[
                                        "GeoCreepy",
                                        "MapChecking.com (geotag plots)",
                                        "SunCalc.org (verify shadows in photos)",
                                        "Sentinel Hub"
                                    ]}
                                />
                            </div>
                        </div>
                        )}

                        {/* Family & Friends */}
                        {activeSection === 'family' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <UserPlus className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Relational Mapping</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[7].desc}</p>
                                </div>
                            </div>

                            <InfoCard 
                                items={[
                                    "Relatives from data brokers → their social media → confirm addresses/photos",
                                    "Tagged photos of family/friends reveal locations",
                                    "Use relatives' social media to confirm home addresses & workplaces",
                                    "Friends list analysis across platforms",
                                    "Event attendance and check-ins"
                                ]}
                            />
                        </div>
                        )}

                        {/* IP Hunting */}
                        {activeSection === 'ip-hunting' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Server className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">IP Hunting</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[8].desc}</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Goals of IP Hunting</h3>
                                    <InfoCard 
                                        items={[
                                            "Deanonymize a target by linking them to a real world location or device",
                                            "Uncover hidden infrastructure (servers, domains, IoT devices)",
                                            "Map the attack surface: open ports, technologies, services, and certificates",
                                            "Build time-based patterns (when they're online, VPN usage, mobility)"
                                        ]}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Active Collection – Bait & Logging</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <InfoCard 
                                            title="IPLogger / Grabify"
                                            items={[
                                                "Shorten links → capture IP, ASN, device fingerprint",
                                                "Embed in images or redirects",
                                                "Rotate domains, remove identifiable branding"
                                            ]}
                                        />
                                        <InfoCard 
                                            title="Custom Tracking"
                                            items={[
                                                "VPS with logging script",
                                                "Log headers, IP, user-agent, referrer",
                                                "Use canary tokens (CanaryTokens.org)"
                                            ]}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Passive Collection</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <InfoCard 
                                            title="WHOIS & DNS"
                                            items={[
                                                "WhoisXML, DomainTools, SecurityTrails",
                                                "FarsightDNS for passive DNS",
                                                "Reverse WHOIS searches"
                                            ]}
                                        />
                                        <InfoCard 
                                            title="Certificate Logs"
                                            items={[
                                                "crt.sh for CT logs",
                                                "Discover subdomains from SSL certs",
                                                "Same cert = common owner"
                                            ]}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-200 mb-4">Attack Chain Examples</h3>
                                    <CodeBlock title="Example 1: IP From Link Click">
{`Target clicks on Grabify link → capture IP
IP belongs to corporate VPN gateway → reverse DNS reveals vpn.corp.com
crt.sh reveals dev.corp.com & git.corp.com on same cert → internal apps exposed`}
                                    </CodeBlock>
                                    <CodeBlock title="Example 2: Passive DNS + WHOIS">
{`blogsite.com → SecurityTrails shows it resolved to 192.0.2.50 last year
Reverse IP lookup → finds payrollportal.com → WHOIS has same registrant email
That email is found in breach data → password reuse risk`}
                                    </CodeBlock>
                                </div>
                            </div>
                        </div>
                        )}

                        {/* Toolsets */}
                        {activeSection === 'toolsets' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Wrench className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Toolsets</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[9].desc}</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {[
                                    { name: "SpiderFoot", desc: "OSINT automation" },
                                    { name: "Maltego", desc: "Relationship graphs" },
                                    { name: "Amass", desc: "Subdomain enumeration" },
                                    { name: "Holehe", desc: "Email enumeration" },
                                    { name: "Sherlock", desc: "Username sweeps" },
                                    { name: "Maigret", desc: "Username sweeps (300+ sites)" },
                                    { name: "Epieos", desc: "Google account leaks" },
                                    { name: "theHarvester", desc: "Email/domain harvesting" },
                                    { name: "Recon-ng", desc: "Web reconnaissance" }
                                ].map((tool) => (
                                    <div key={tool.name} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
                                        <h4 className="font-medium text-zinc-200 mb-1">
                                            <TextWithLinks>{tool.name}</TextWithLinks>
                                        </h4>
                                        <p className="text-xs text-zinc-500">{tool.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}

                        {/* Google Dorking */}
                        {activeSection === 'dorking' && (
                        <div className="space-y-4">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Search className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Google Dorking</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[10].desc}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-zinc-400 mb-4">
                                    <TextWithLinks>
                                        Google dorks are advanced search operators that can expose sensitive information, 
                                        misconfigurations, and hidden files.
                                    </TextWithLinks>
                                </p>
                                <CodeBlock title="Common Dorks">
{`site:target.com filetype:log
inurl:/backup.zip
ext:env DB_PASSWORD
intitle:"index of" "private"
site:target.com ext:sql | ext:db | ext:log
inurl:admin intitle:login
site:pastebin.com "target.com"
filetype:pdf "confidential" site:target.com`}
                                </CodeBlock>
                            </div>
                        </div>
                        )}

                        {/* Dark Web */}
                        {activeSection === 'darkweb' && (
                        <div className="space-y-6">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Moon className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">Dark Web</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[11].desc}</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <InfoCard 
                                    title="Search Engines"
                                    items={[
                                        "Ahmia",
                                        "OnionLand",
                                        "Torch",
                                        "DarkSearch"
                                    ]}
                                />
                                <InfoCard 
                                    title="Paid Services"
                                    items={[
                                        "DarkOwl",
                                        "Flashpoint",
                                        "Recorded Future",
                                        "IntelX.io"
                                    ]}
                                />
                                <InfoCard 
                                    title="Leak Sources"
                                    items={[
                                        "Telegram groups for leaks",
                                        "Pastebin / Ghostbin",
                                        "Anonfiles indexed dumps",
                                        "Breach forums"
                                    ]}
                                />
                            </div>
                        </div>
                        )}

                        {/* OPSEC */}
                        {activeSection === 'opsec' && (
                        <div className="space-y-4">
                            {/* Section Header */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center border border-zinc-700">
                                    <Shield className="w-7 h-7 text-zinc-300" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">OPSEC</h2>
                                    <p className="text-sm text-zinc-500 mt-1">{sections[12].desc}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-red-950/20 border border-red-900/50">
                                    <p className="text-sm text-red-200/80">
                                        <strong>Critical:</strong> Never use your real identity when conducting OSINT research. 
                                        Always maintain proper operational security.
                                    </p>
                                </div>
                                <InfoCard 
                                    items={[
                                        "Multi-hop VPN + Tor + isolated VMs",
                                        "Burner devices & accounts",
                                        "Never use real identity when testing",
                                        "Separate research environment from personal",
                                        "Clear browser data and cookies regularly",
                                        "Use privacy-focused operating systems (Tails, Whonix)"
                                    ]}
                                />
                            </div>
                        </div>
                        )}

                        {/* Navigation */}
                        <div className="mt-12 pt-8 border-t border-zinc-800">
                            <div className="flex items-center justify-between gap-4">
                                <Button
                                    onClick={goToPrev}
                                    disabled={currentSectionIndex === 0}
                                    variant="outline"
                                    className="flex-1 h-auto py-4 px-6 bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <div className="flex items-center gap-3 w-full">
                                        <ArrowLeft className="w-5 h-5 text-zinc-400" />
                                        <div className="flex flex-col items-start flex-1">
                                            <span className="text-xs text-zinc-600 mb-1">Previous</span>
                                            <span className="text-sm font-medium text-zinc-300">
                                                {currentSectionIndex > 0 ? sections[currentSectionIndex - 1].label : ''}
                                            </span>
                                        </div>
                                    </div>
                                </Button>

                                <Button
                                    onClick={goToNext}
                                    disabled={currentSectionIndex === sections.length - 1}
                                    variant="outline"
                                    className="flex-1 h-auto py-4 px-6 bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed"
                                >
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="flex flex-col items-end flex-1">
                                            <span className="text-xs text-zinc-600 mb-1">Next</span>
                                            <span className="text-sm font-medium text-zinc-300">
                                                {currentSectionIndex < sections.length - 1 ? sections[currentSectionIndex + 1].label : ''}
                                            </span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-zinc-400" />
                                    </div>
                                </Button>
                            </div>
                        </div>

                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </motion.div>
        </motion.div>
    );
}