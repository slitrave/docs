import React from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

// Mapping of service names to URLs
const SERVICE_URLS = {
    // Data Brokers & People Search
    "Infotracer": "https://infotracer.com",
    "Whitepages": "https://www.whitepages.com",
    "Spokeo": "https://www.spokeo.com",
    "TruthFinder": "https://www.truthfinder.com",
    "Intelius": "https://www.intelius.com",
    "FastPeopleSearch": "https://www.fastpeoplesearch.com",
    "PeopleFinders": "https://www.peoplefinders.com",
    "Radaris": "https://radaris.com",
    "BeenVerified": "https://www.beenverified.com",
    "Pipl": "https://pipl.com",
    "ZabaSearch": "https://www.zabasearch.com",
    "CocoFinder": "https://cocofinder.com",
    "InstantCheckmate": "https://www.instantcheckmate.com",
    "Nuwber": "https://nuwber.com",
    "Thatsthem": "https://thatsthem.com",
    "TruePeopleSearch": "https://www.truepeoplesearch.com",
    "PeekYou": "https://www.peekyou.com",
    "WebMii": "https://webmii.com",
    
    // Phone & Caller ID
    "Truecaller": "https://www.truecaller.com",
    "Sync.me": "https://sync.me",
    "NumLookup": "https://www.numlookup.com",
    "CallerSmart": "https://www.callersmart.com",
    "HLRLookup": "https://www.hlrlookup.com",
    
    // Email Tools
    "Hunter.io": "https://hunter.io",
    "RocketReach": "https://rocketreach.co",
    "ZoomInfo": "https://www.zoominfo.com",
    "Clearbit": "https://clearbit.com",
    "Epieos": "https://epieos.com",
    
    // Property
    "Zillow": "https://www.zillow.com",
    "Realtor.com": "https://www.realtor.com",
    "Redfin": "https://www.redfin.com",
    "Trulia": "https://www.trulia.com",
    
    // Courts & Legal
    "PACER": "https://pacer.uscourts.gov",
    "VINELink": "https://www.vinelink.com",
    
    // Corporate
    "OpenCorporates": "https://opencorporates.com",
    "CorporationWiki": "https://www.corporationwiki.com",
    "SEC EDGAR": "https://www.sec.gov/edgar",
    
    // Username Tools
    "WhatsMyName": "https://whatsmyname.app",
    "Maigret": "https://github.com/soxoj/maigret",
    "Sherlock": "https://github.com/sherlock-project/sherlock",
    "Namechk": "https://namechk.com",
    "KnowEm": "https://knowem.com",
    
    // Image Search
    "PimEyes": "https://pimeyes.com",
    "Yandex": "https://yandex.com/images",
    "Google Lens": "https://lens.google.com",
    "TinEye": "https://tineye.com",
    
    // Breach Data
    "HaveIBeenPwned": "https://haveibeenpwned.com",
    "Dehashed": "https://dehashed.com",
    "Snusbase": "https://snusbase.com",
    "LeakCheck": "https://leakcheck.io",
    "Scylla": "https://scylla.so",
    "IntelX": "https://intelx.io",
    
    // Infrastructure
    "WhoisXML": "https://whoisxmlapi.com",
    "DomainTools": "https://www.domaintools.com",
    "SecurityTrails": "https://securitytrails.com",
    "ViewDNS": "https://viewdns.info",
    "crt.sh": "https://crt.sh",
    "Shodan": "https://www.shodan.io",
    "Censys": "https://censys.io",
    "RiskIQ": "https://www.riskiq.com",
    
    // OSINT Frameworks
    "SpiderFoot": "https://www.spiderfoot.net",
    "Maltego": "https://www.maltego.com",
    "Amass": "https://github.com/OWASP/Amass",
    "Holehe": "https://github.com/megadose/holehe",
    "theHarvester": "https://github.com/laramies/theHarvester",
    "Recon-ng": "https://github.com/lanmaster53/recon-ng",
    
    // Metadata Tools
    "ExifTool": "https://exiftool.org",
    "FOCA": "https://github.com/ElevenPaths/FOCA",
    "metagoofil": "https://github.com/laramies/metagoofil",
    
    // Geo Tools
    "GeoCreepy": "https://www.geocreepy.com",
    "MapChecking": "https://www.mapchecking.com",
    "SunCalc": "https://www.suncalc.org",
    
    // Dark Web
    "Ahmia": "https://ahmia.fi",
    "OnionLand": "https://onionlandsearchengine.com",
    "Torch": "http://torchdeedp3i2jigzjdmfpn5ttjhthh5wbmda2rr3jvqjg5p77c54dqd.onion",
    "DarkOwl": "https://www.darkowl.com",
    "Flashpoint": "https://flashpoint.io",
    
    // Tracking
    "IPLogger": "https://iplogger.org",
    "Grabify": "https://grabify.link",
    "CanaryTokens": "https://canarytokens.org",
    
    // International
    "192.com": "https://www.192.com",
    "Companies House": "https://www.gov.uk/government/organisations/companies-house",
    "Canada411": "https://www.canada411.ca",
    
    // Misc
    "Wayback Machine": "https://archive.org/web",
    "Gravatar": "https://gravatar.com",
    "GitHub": "https://github.com",
    "LinkedIn": "https://www.linkedin.com",
    "Facebook": "https://www.facebook.com",
    "Instagram": "https://www.instagram.com",
    "Reddit": "https://www.reddit.com",
    "Twitter": "https://twitter.com",
    "TikTok": "https://www.tiktok.com",
};

// Component to render text with automatic hyperlinks
export const TextWithLinks = ({ children, className = "" }) => {
    if (typeof children !== 'string') {
        return <span className={className}>{children}</span>;
    }

    // Add pattern to match domains first (higher priority)
    const domainPattern = '([a-zA-Z0-9-]+\\.(?:com|org|net|io|co|gov|edu|uk|ca|au|sh))';
    
    // Create a regex pattern from all service names
    const servicePattern = Object.keys(SERVICE_URLS)
        .sort((a, b) => b.length - a.length) // Sort by length to match longer names first
        .map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // Escape special chars
        .join('|');
    
    // Domain pattern first to capture full domains like "intelx.io" together
    const combinedPattern = `${domainPattern}|\\b(${servicePattern})\\b`;
    const regex = new RegExp(combinedPattern, 'gi');
    
    const parts = [];
    let lastIndex = 0;
    let match;
    
    while ((match = regex.exec(children)) !== null) {
        // Add text before match
        if (match.index > lastIndex) {
            parts.push({ type: 'text', content: children.substring(lastIndex, match.index) });
        }
        
        // Add matched link
        parts.push({ type: 'link', content: match[0] });
        lastIndex = regex.lastIndex;
    }
    
    // Add remaining text
    if (lastIndex < children.length) {
        parts.push({ type: 'text', content: children.substring(lastIndex) });
    }

    return (
        <span className={className}>
            {parts.map((part, index) => {
                if (part.type === 'text') {
                    return <span key={index}>{part.content}</span>;
                }
                
                // Check if it's a service name
                let url = SERVICE_URLS[part.content] || SERVICE_URLS[part.content.toLowerCase()];
                
                // If not found, check if it's a domain
                if (!url && part.content.includes('.')) {
                    const domain = part.content.toLowerCase();
                    // Try to find by matching domain in the URL values
                    const matchedEntry = Object.entries(SERVICE_URLS).find(([key, value]) => 
                        value.toLowerCase().includes(domain) || 
                        key.toLowerCase().replace(/\s/g, '') === domain.split('.')[0]
                    );
                    
                    if (matchedEntry) {
                        url = matchedEntry[1];
                    } else {
                        // Default to https:// if it's a valid-looking domain
                        url = `https://${part.content}`;
                    }
                }
                
                return (
                    <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline transition-all duration-300 ease-in-out hover:scale-110 text-zinc-400 hover-pulse"
                        style={{
                            display: 'inline',
                            verticalAlign: 'baseline',
                        }}
                    >
                        {part.content}
                    </a>
                );
            })}
        </span>
    );
};

// Simple external link component
export default function ExternalLink({ href, children, className = "" }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline transition-all duration-300 ease-in-out hover:scale-110 text-zinc-400 hover-pulse ${className}`}
            style={{
                display: 'inline',
                verticalAlign: 'baseline',
            }}
        >
            {children}
        </a>
    );
}