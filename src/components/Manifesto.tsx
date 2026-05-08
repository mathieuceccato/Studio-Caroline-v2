const Manifesto = () => {
  const lines = [
    { s:"Nous croyons que ", em:"la matière", e:" précède la forme." },
    { s:"Que ", em:"le silence", e:" est un matériau, comme la pierre." },
    { s:"Qu'", em:"un seuil", e:" se franchit comme on tourne une page." },
    { s:"Et qu'", em:"un intérieur", e:" doit pouvoir vieillir." },
  ];
  return (
    <section className="sec" id="vision" style={{background:'var(--paper-2)'}}>
      <div className="container">
        <div className="grid-12" style={{marginBottom:80}}>
          <div style={{gridColumn:'1 / span 4'}}>
            <div className="kicker">— 02 / Manifeste</div>
            <div className="eyebrow" style={{marginTop:120}}>Édité depuis Monaco · 2014 →</div>
          </div>
          <div style={{gridColumn:'5 / span 8'}}>
            {lines.map((l,i)=>(
              <p key={i} className="reveal" style={{
                fontFamily:'var(--serif)', fontSize:'clamp(28px,3.5vw,52px)', lineHeight:1.18,
                fontWeight:300, marginBottom:18, color:'var(--ink)'
              }}>
                <span style={{color:'var(--muted)'}}>{l.s}</span>
                <span style={{fontStyle:'italic',color:'var(--ocre)'}}>{l.em}</span>
                <span style={{color:'var(--muted)'}}>{l.e}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="grid-12" style={{alignItems:'start',marginTop:120}}>
          <div style={{gridColumn:'1 / span 5'}}>
            <div className="photo hov" data-photo="2" style={{aspectRatio:'1/1.2'}}>
              <span className="tag">Caroline Mercier · Atelier</span>
            </div>
          </div>
          <div style={{gridColumn:'7 / span 6'}}>
            <div className="kicker" style={{marginBottom:24}}>Portrait</div>
            <p style={{fontFamily:'var(--serif)',fontSize:24,lineHeight:1.5,marginBottom:24}}>
              <span style={{fontStyle:'italic',fontSize:60,float:'left',lineHeight:0.9,marginRight:12,marginTop:6,color:'var(--ocre)'}}>«</span>
              Je dessine d'abord le mouvement des gens dans la pièce.
              Puis l'angle que prend la lumière au mois de mars.
              Tout le reste — meubles, matières, finitions — découle
              de cette chorégraphie silencieuse.
              <span style={{fontStyle:'italic',color:'var(--ocre)'}}> »</span>
            </p>
            <p style={{color:'var(--muted)',marginBottom:32,fontSize:14,lineHeight:1.7}}>
              Diplômée de la HEAD-Genève puis de la Royal Academy of Arts,
              Caroline fonde son studio en 2014 après six années chez Vincent Van Duysen.
              Elle enseigne aujourd'hui le projet d'espace à l'École Camondo.
            </p>
            <div style={{display:'flex',gap:32,fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--muted)'}}>
              <div><div style={{color:'var(--ink)'}}>HEAD</div>Genève</div>
              <div><div style={{color:'var(--ink)'}}>RCA</div>Londres</div>
              <div><div style={{color:'var(--ink)'}}>Camondo</div>Paris</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
