const SectionHeader = ({ num, kicker, title, intro }: { num: string; kicker: string; title: React.ReactNode; intro?: string }) => (
  <div className="container" style={{ marginBottom: 80 }}>
    <div className="grid-12" style={{ alignItems: 'end' }}>
      <div style={{ gridColumn: '1 / span 6' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 28 }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>— {num}</span>
          <span className="kicker">{kicker}</span>
        </div>
        <h2 className="display reveal" style={{ fontSize: 'clamp(48px,7vw,108px)', lineHeight: .92 }}>{title}</h2>
      </div>
      {intro && (
        <div style={{ gridColumn: '8 / span 5' }}>
          <p className="reveal" style={{
            fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.5, color: 'var(--ink-soft)',
            fontStyle: 'italic', fontWeight: 300
          }}>{intro}</p>
        </div>
      )}
    </div>
  </div>
);

export default SectionHeader;
