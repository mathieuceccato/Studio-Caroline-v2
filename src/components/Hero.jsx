import { useEffect, useState } from "react";

const Hero = () => {
  const [time, setTime] = useState('');
  useEffect(()=>{
    const tick=()=>{
      const d=new Date();
      const opts={hour:'2-digit',minute:'2-digit',timeZone:'Europe/Monaco'};
      setTime(d.toLocaleTimeString('fr-FR',opts));
    };
    tick();
    const id=setInterval(tick,30000);
    return ()=>clearInterval(id);
  },[]);

  return (
    <section id="top" style={{position:'relative',minHeight:'100vh',paddingTop:160,paddingBottom:0,overflow:'hidden'}}>
      <div className="container">
        {/* Top meta */}
        <div className="grid-12" style={{marginBottom:80,fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--muted)'}}>
          <div style={{gridColumn:'1 / span 3'}}>
            <div style={{color:'var(--ocre)',marginBottom:4}}>● Disponible · 2026</div>
            <div>Studio basé à Monaco · Bâle</div>
          </div>
          <div style={{gridColumn:'5 / span 3'}}>
            <div style={{color:'var(--ink-soft)',marginBottom:4}}>Mission n°41</div>
            <div>en cours — Villa Roquebrune</div>
          </div>
          <div style={{gridColumn:'8 / span 3'}}>
            <div style={{color:'var(--ink-soft)',marginBottom:4}}>43.7°N · 7.4°E</div>
            <div>Heure locale {time}</div>
          </div>
          <div style={{gridColumn:'11 / span 2',textAlign:'right'}}>
            <div>↳ scroll</div>
          </div>
        </div>

        {/* Massive title */}
        <div style={{position:'relative',marginBottom:60}}>
          <div className="kicker reveal" style={{marginBottom:30}}>— 01 / Vision &amp; Structure</div>
          <h1 className="display reveal" style={{
            fontSize:'clamp(72px,14vw,240px)', lineHeight:0.86, letterSpacing:'-0.005em'
          }}>
            L'harmonie<br/>
            <span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300}}>entre</span> la forme<br/>
            <span style={{color:'var(--ocre)'}}>&amp; la fonction.</span>
          </h1>
        </div>

        <div className="grid-12" style={{alignItems:'end',gap:40}}>
          <div style={{gridColumn:'1 / span 5'}}>
            <p className="reveal" style={{
              fontFamily:'var(--serif)',fontSize:22,lineHeight:1.45,fontWeight:300,
              color:'var(--ink-soft)',fontStyle:'italic'
            }}>
              Caroline conçoit des espaces où chaque mètre carré porte une intention.
              Des résidences privées aux lieux d'accueil, le studio dessine le silence,
              la lumière et le geste juste — pour des intérieurs qui se lisent comme une phrase bien construite.
            </p>
            <div style={{display:'flex',gap:16,marginTop:36}} className="reveal">
              <a href="#projets" className="btn btn--solid">Voir les projets <span className="arrow">→</span></a>
              <a href="#contact" className="btn">Prendre rendez-vous</a>
            </div>
          </div>

          <div style={{gridColumn:'8 / span 5'}}>
            <div className="photo reveal hov" data-photo="1" style={{aspectRatio:'4/5',width:'100%'}}>
              <span className="tag">Villa V — Cap d'Ail · 2025</span>
            </div>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="reveal" style={{
          marginTop:100,paddingTop:24,borderTop:'1px solid var(--line)',
          display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:24,
          fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--muted)'
        }}>
          {[
            ['12 ans','de pratique'],
            ['41 projets','livrés'],
            ['7 pays','3 continents'],
            ['1 obsession','le détail juste'],
          ].map(([a,b],i)=>(
            <div key={i}>
              <div className="display" style={{
                fontSize:48,color:'var(--ink)',letterSpacing:'0.02em',marginBottom:6,
                fontFamily:'var(--display)'
              }}>{a}</div>
              <div>{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;