import SectionHeader from "./SectionHeader";

const Journal = () => {
  const posts = [
    { d:'mars 2026', t:'Sur la lenteur du chêne', e:'Note sur le temps des matériaux nobles, et pourquoi nous renonçons aux plaquages.', read:'6 min' },
    { d:'janv. 2026', t:'Trois pierres de la Méditerranée', e:'Un voyage entre Cassis, Carrare et Tinos. Carnet de matériauthèque.', read:'9 min' },
    { d:'nov. 2025', t:'Ce que la cuisine n\'est plus', e:'L\'effacement progressif de la pièce technique au profit du salon élargi.', read:'5 min' },
  ];
  return (
    <section className="sec" id="journal">
      <SectionHeader
        num="07"
        kicker="Journal — depuis l'atelier"
        title={<>Notes &amp;<br/><span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300}}>matières.</span></>}
        intro="Quelques pages écrites au fil des projets — sur la lumière, le bois, le temps long du chantier. Sans calendrier, parce qu'on n'écrit que quand on a quelque chose à dire."
      />
      <div className="container">
        <div className="grid-12">
          {posts.map((p,i)=>(
            <a key={i} href="#" className="reveal hov" style={{
              gridColumn:'span 4',
              borderTop:'1px solid var(--line)',
              paddingTop:28,
              display:'block',
              transition:'all .4s'
            }} onMouseEnter={e=>e.currentTarget.style.borderTopColor='var(--ocre)'}
               onMouseLeave={e=>e.currentTarget.style.borderTopColor='var(--line)'}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:24,fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--muted)'}}>
                <span>{p.d}</span><span>{p.read} de lecture</span>
              </div>
              <h3 className="serif" style={{
                fontFamily:'var(--serif)',fontSize:36,lineHeight:1.1,fontWeight:300,marginBottom:18,fontStyle:'italic'
              }}>{p.t}</h3>
              <p style={{color:'var(--ink-soft)',fontSize:15,lineHeight:1.6,marginBottom:28}}>{p.e}</p>
              <span className="ul-link">Lire la note <span style={{marginLeft:4}}>→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
