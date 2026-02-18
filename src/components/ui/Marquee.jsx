export default function Marquee({ items = [], speed = '20s' }) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className="w-full overflow-hidden border-y border-teal/20 bg-teal/5 py-4">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `marquee ${speed} linear infinite`,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <span
            key={idx}
            className="font-mono text-xs uppercase text-teal-light flex items-center gap-2 shrink-0"
          >
            <span className="text-teal">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
