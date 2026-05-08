const Marquee = ({items, speed=40}: {items: string[], speed?: number}) => (
  <div style={{overflow:'hidden',padding:'30px 0',borderTop:'1px solid var(--line)',borderBottom:'1px solid var(--line)'}}>
    <div className="marquee" style={{animationDuration: speed+'s'}}>
      {[...items, ...items].map((it,i)=>(
        <span key={i} style={{
          fontFamily:'var(--display)',fontSize:'clamp(64px,10vw,160px)',
          letterSpacing:'0.02em',display:'inline-flex',alignItems:'center',gap:60,
          color: i%3===1 ? 'var(--ocre)' : 'var(--ink)',
          fontStyle: i%4===2 ? 'italic' : 'normal',
        }}>
          {it} <span style={{fontSize:'0.6em',color:'var(--muted)'}}>✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
