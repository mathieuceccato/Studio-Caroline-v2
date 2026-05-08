const Processus = () => {
  const steps = [
    { n:'I', t:'Écoute', d:'Trois heures, sur place. On lit la lumière, on écoute les murs, on dessine la vie qui veut s\'y inscrire.', dur:'2 semaines' },
    { n:'II', t:'Esquisse', d:'Plans à la main, ambiance, palette matières. Trois directions présentées en planches A2 reliées.', dur:'4 semaines' },
    { n:'III', t:'Composition', d:'Plans techniques, perspectives 3D, cahier de prescription, devis détaillés artisans.', dur:'6–10 semaines' },
    { n:'IV', t:'Exécution', d:'Direction de chantier hebdomadaire. Présence sur site, ajustements, et le jour de la remise des clés.', dur:'4–18 mois' },
    { n:'V', t:'Mémoire', d:'Photographies signature, reportage écrit, archive du projet conservée au studio. Le projet entre au catalogue.', dur:'1 mois' },
  ];
  return (
    <section className="sec" id="processus" style={{background:'var(--ink)',color:'var(--paper)'}}>
      <div className="container">
        <div className="grid-12" style={{marginBottom:80}}>
          <div style={{gridColumn:'1 / span 6'}}>
            <div className="kicker" style={{color:'var(--ocre)',marginBottom:18}}>— 04 / Processus</div>
            <h2 className="display" style={{fontSize:'clamp(48px,7vw,108px)',lineHeight:.92}}>
              Cinq actes,<br/>
              <span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300}}>une seule</span> partition.
            </h2>
          </div>
          <div style={{gridColumn:'8 / span 5',alignSelf:'end'}}>
            <p style={{fontFamily:'var(--serif)',fontSize:18,lineHeight:1.6,fontStyle:'italic',color:'rgba(241,236,225,0.7)'}}>
              Chaque projet suit le même rituel — pas par méthode, mais par respect.
              Nous prenons le temps de chaque étape, et seulement celui-là.
            </p>
          </div>
        </div>

        <div style={{borderTop:'1px solid rgba(241,236,225,0.16)'}}>
          {steps.map((s,i)=>(
            <div key={i} className="reveal" style={{
              borderBottom:'1px solid rgba(241,236,225,0.16)',
              display:'grid',gridTemplateColumns:'120px 1fr 2fr 1fr',gap:32,
              padding:'46px 0',alignItems:'start'
            }}>
              <div className="display" style={{
                fontSize:64,lineHeight:1,color:'var(--ocre)',fontFamily:'var(--serif)',fontStyle:'italic',fontWeight:300
              }}>{s.n}</div>
              <h3 className="display" style={{fontSize:'clamp(28px,3vw,44px)',lineHeight:1}}>{s.t}</h3>
              <p style={{fontSize:16,lineHeight:1.6,color:'rgba(241,236,225,0.78)',maxWidth:520}}>{s.d}</p>
              <div style={{textAlign:'right',fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(241,236,225,0.5)'}}>
                durée<br/><span style={{color:'var(--paper)',fontSize:14,letterSpacing:'0.08em'}}>{s.dur}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processus;
