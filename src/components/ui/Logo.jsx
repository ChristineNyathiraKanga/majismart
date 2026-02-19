export default function Logo({ className = "w-7" }) {
    return (
        <svg viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2 8 Q8 2 14 8 Q20 14 26 8 Q32 2 38 8" stroke="#0A9396" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M2 15 Q8 9 14 15 Q20 21 26 15 Q32 9 38 15" stroke="#94D2BD" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M2 22 Q8 16 14 22 Q20 28 26 22 Q32 16 38 22" stroke="#0A9396" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
        </svg>
    )
}
