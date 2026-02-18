import CountUp from './CountUp'

export default function StatCard({ value, label, prefix = '', suffix = '' }) {
  return (
    <div className="border border-teal/25 bg-navy-card rounded-lg p-6">
      <div className="font-display text-4xl/tight mb-2">
        <span className="text-teal-bright">{prefix}</span>
        <CountUp end={typeof value === 'number' ? value : 0} />
        <span className="text-teal-bright">{suffix}</span>
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
    </div>
  )
}
