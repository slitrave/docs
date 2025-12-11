import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
// ⬅️ FIXED: Changed '@/components/ui/input' to './components/ui/input'
import { Input } from './components/ui/input'; 
// ⬅️ FIXED: Changed '@/components/ui/badge' to './components/ui/badge'
import { Badge } from './components/ui/badge'; 
import { TextWithLinks } from './ExternalLink'; // This one was already correct

const brokerData = [
    { name: "Infotracer.com", tags: ["ID", "PH", "AD", "CR", "SOC"], desc: "Deep person profiles, includes relatives, aliases" },
    { name: "Whitepages.com", tags: ["PH", "AD"], desc: "Phone/Address; good for landline history & reverse lookups" },
    { name: "Spokeo.com", tags: ["ID", "SOC", "EM", "PH"], desc: "Social graphing, usernames, email enrich" },
    { name: "TruthFinder.com", tags: ["ID", "CR", "AD"], desc: "Person reports with past addresses, possible records" },
    { name: "Intelius.com", tags: ["ID", "AD", "PH", "CR"], desc: "Longstanding aggregator; link analysis between addresses" },
    { name: "FastPeopleSearch.com", tags: ["ID", "AD", "PH"], desc: "Quick basic profiles; often shows previous addresses" },
    { name: "PeopleFinders.com", tags: ["ID", "AD", "PH"], desc: "Similar to Intelius; old address history often present" },
    { name: "Radaris.com", tags: ["ID", "AD", "CO", "SOC"], desc: "People + business affiliations; good for LLC associations" },
    { name: "BeenVerified.com", tags: ["ID", "AD", "PH", "CR", "SOC"], desc: "Person reports + social links, usernames" },
    { name: "Pipl.com", tags: ["ID", "EM", "SOC", "API"], desc: "Email/username identity resolution for investigators" },
    { name: "Truecaller", tags: ["PH", "ID"], desc: "Reverse caller ID at scale; often shows caller name" },
    { name: "Hunter.io", tags: ["EM", "CO", "API"], desc: "Company email patterns; domain-based enrichment" },
    { name: "Epieos.com", tags: ["EM", "SOC"], desc: "Google account pivots (public Maps, photos, calendars)" },
    { name: "Dehashed.com", tags: ["EM", "ID", "API"], desc: "Emails, usernames, IPs; breach aggregator" },
    { name: "SecurityTrails", tags: ["CO", "AD"], desc: "WHOIS history + passive DNS + infrastructure graphing" },
    { name: "Shodan", tags: ["CO"], desc: "Enumerate open ports, services, software versions" },
    { name: "Censys", tags: ["CO"], desc: "Internet-wide scanning for exposed services" },
    { name: "OpenCorporates.com", tags: ["CO", "INT"], desc: "Global corporate records + officer cross-links" },
    { name: "crt.sh", tags: ["CO"], desc: "SSL certificates; domains tied to same emails" },
    { name: "HaveIBeenPwned.com", tags: ["EM"], desc: "Email breach exposure alerts; domains monitoring" },
];

const tagColors = {
    ID: "bg-blue-900/50 text-blue-300 border-blue-700",
    PH: "bg-green-900/50 text-green-300 border-green-700",
    AD: "bg-purple-900/50 text-purple-300 border-purple-700",
    CR: "bg-red-900/50 text-red-300 border-red-700",
    SOC: "bg-pink-900/50 text-pink-300 border-pink-700",
    EM: "bg-yellow-900/50 text-yellow-300 border-yellow-700",
    CO: "bg-cyan-900/50 text-cyan-300 border-cyan-700",
    API: "bg-orange-900/50 text-orange-300 border-orange-700",
    INT: "bg-indigo-900/50 text-indigo-300 border-indigo-700",
    PR: "bg-emerald-900/50 text-emerald-300 border-emerald-700",
};

const tagLabels = {
    ID: "Identity",
    PH: "Phone",
    AD: "Address",
    CR: "Criminal",
    SOC: "Social",
    EM: "Email",
    CO: "Corporate",
    API: "API",
    INT: "International",
    PR: "Property",
};

export default function DataBrokerTable() {
    const [search, setSearch] = useState("");
    const [filterTag, setFilterTag] = useState(null);

    const filteredData = brokerData.filter(broker => {
        const matchesSearch = broker.name.toLowerCase().includes(search.toLowerCase()) ||
            broker.desc.toLowerCase().includes(search.toLowerCase());
        const matchesTag = !filterTag || broker.tags.includes(filterTag);
        return matchesSearch && matchesTag;
    });

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <Input
                        placeholder="Search brokers..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 bg-zinc-900 border-zinc-700 text-zinc-100 placeholder:text-zinc-600"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {Object.keys(tagLabels).map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilterTag(filterTag === tag ? null : tag)}
                            className={`px-2 py-1 text-xs rounded-md border transition-all ${
                                filterTag === tag 
                                    ? tagColors[tag] 
                                    : "bg-zinc-900 text-zinc-500 border-zinc-700 hover:border-zinc-600"
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-3">
                {filteredData.map((broker, index) => (
                    <div 
                        key={index}
                        className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-medium text-zinc-200 truncate">
                                        <TextWithLinks>{broker.name}</TextWithLinks>
                                    </h4>
                                </div>
                                <p className="text-sm text-zinc-500">
                                    <TextWithLinks>{broker.desc}</TextWithLinks>
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1 justify-end">
                                {broker.tags.map((tag) => (
                                    <span 
                                        key={tag}
                                        className={`px-1.5 py-0.5 text-xs rounded border ${tagColors[tag]}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 p-4 rounded-lg bg-zinc-900/30 border border-zinc-800">
                <h4 className="text-sm font-medium text-zinc-400 mb-2">Legend</h4>
                <div className="flex flex-wrap gap-3">
                    {Object.entries(tagLabels).map(([tag, label]) => (
                        <div key={tag} className="flex items-center gap-1.5">
                            <span className={`px-1.5 py-0.5 text-xs rounded border ${tagColors[tag]}`}>{tag}</span>
                            <span className="text-xs text-zinc-500">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}