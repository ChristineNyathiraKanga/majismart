export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`border border-teal/25 bg-navy-card rounded-xl p-6 transition-all duration-300 ${
        hover ? 'hover:border-teal hover:shadow-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
