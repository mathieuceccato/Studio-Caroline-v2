import Logo from "./Logo";

const NavBar = ({open, setOpen, scrolled}) => {
  const links = [
    ['Vision','#vision'],
    ['Services','#services'],
    ['Projets','#projets'],
    ['Processus','#processus'],
    ['Journal','#journal'],
    ['Contact','#contact'],
  ];
  return (
    <header style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      padding: scrolled ? '14px 0' : '24px 0',
      background: scrolled ? 'rgba(246,243,236,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(1.1)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-soft)' : '1px solid transparent',
      transition:'all .4s ease',
    }}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <a href="#top"><Logo /></a>
        <nav style={{display:'flex',alignItems:'center',gap:36}}>
          <div style={{display:'flex',gap:32}} className="navlinks">
            {links.map(([l,h])=>(
              <a key={h} href={h} className="hov" style={{
                fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.22em',
                textTransform:'uppercase',position:'relative',padding:'4px 0'
              }}>{l}</a>
            ))}
          </div>
          <a href="#contact" className="btn btn--ocre" style={{padding:'12px 18px'}}>
            Démarrer un projet <span className="arrow">→</span>
          </a>
        </nav>
      </div>
      <style>{`
        .navlinks a::after{content:"";position:absolute;left:0;right:100%;bottom:0;height:1px;background:var(--ocre);transition:right .4s ease}
        .navlinks a:hover::after{right:0}
        @media (max-width:1100px){ .navlinks{display:none} }
      `}</style>
    </header>
  );
};

export default NavBar;
