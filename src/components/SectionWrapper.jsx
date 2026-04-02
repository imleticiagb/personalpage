export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-24 px-6 max-w-5xl mx-auto ${className}`}
    >
      {children}
    </section>
  )
}
