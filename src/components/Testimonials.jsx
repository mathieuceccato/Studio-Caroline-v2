import { useEffect, useState } from "react";

const Testimonials = () => {
  const quotes = [
    { q:"Caroline ne décore pas, elle ré-écrit. Notre maison nous ressemble enfin — y compris dans ce qu'on n'avait jamais su nommer.", a:'Famille B.', r:'Villa Roquebrune · 2025' },
    { q:"Nous avons travaillé avec quatre studios. Un seul a su tenir promesse, calendrier et émotion : Studio Caroline.", a:'A. Lemoine', r:'Hôtel des Lances · 2024' },
    { q:"Une rigueur d'architecte, une intuition d'artiste. Le détail du joint de pierre est aussi soigné que la vue depuis le canapé.", a:'M. & J. Cassel', r:'Maison Soho · 2024' },
  ];
  const [i, setI] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=>setI(x=>(x+1)%quotes.length), 7000);
    return ()=>clearInterval(id);
  },[quotes.length]);

  return (
    <section className="sec" style={{background:'var(--paper-2)'}}>
      <div className="container">
        <div className="grid-12" style={{alignItems:'center'}}>
          <div style={{gridColumn:'1 / span 4'}}>
            <div className="kicker" style={{marginBottom:18}}>— 06 / Témoignages</div>
            <h2 className="display" style={{fontSize:'clamp(40px,5vw,72px)',lineHeight:.95}}>
              Ce que disent<br/>
              <span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300}}>celles &amp; ceux</span><br/>
              qui ont habité.
            </h2>
            <div style={{display:'flex',gap:8,marginTop:40}}>
              {quotes.map((_,k)=>(
                <button key={k} onClick={()=>setI(k)} aria-label={"quote "+(k+1)} style={{
                  width:i===k?40:14,height:2,
                  background:i===k?'var(--ocre)':'var(--line)',
                  transition:'all .5s ease'
                }}/>
              ))}
            </div>
          </div>
          <div style={{gridColumn:'6 / span 7',position:'relative',minHeight:340}}>
            {quotes.map((q,k)=>(
              <div key={k} style={{
                position:'absolute',inset:0,
                opacity:i===k?1:0,
                transform:i===k?'translateY(0)':'translateY(20px)',
                transition:'opacity .8s ease, transform .8s ease',
                pointerEvents:i===k?'auto':'none'
              }}>
                <div className="display" style={{
                  fontSize:120,lineHeight:0.7,color:'var(--ocre)',
                  fontFamily:'var(--serif)',fontStyle:'italic',fontWeight:300,marginBottom:-20
                }}>«</div>
                <p style={{fontFamily:'var(--serif)',fontSize:'clamp(24px,2.6vw,38px)',lineHeight:1.35,fontWeight:300,marginBottom:32}}>
                  {q.q}
                </p>
                <div style={{display:'flex',alignItems:'center',gap:20}}>
                  <div style={{width:60,height:1,background:'var(--ink)'}}/>
                  <div>
                    <div style={{fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.22em',textTransform:'uppercase'}}>{q.a}</div>
                    <div style={{fontSize:13,color:'var(--muted)',marginTop:4,fontFamily:'var(--mono)',letterSpacing:'0.1em'}}>{q.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
