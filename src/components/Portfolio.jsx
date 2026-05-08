import { useState } from "react";
import SectionHeader from "./SectionHeader";

const Portfolio = () => {
  const [filter, setFilter] = useState('Tous');
  const cats = ['Tous','Résidentiel','Hôtelier','Commercial','Patrimoine'];
  const projects = [
    { id:'01', t:'Villa Roquebrune', cat:'Résidentiel', loc:'Cap-Martin · 2025', size:'tall', photo:1 },
    { id:'02', t:'Hôtel des Lances', cat:'Hôtelier', loc:'Grimaud · 2024', size:'wide', photo:3 },
    { id:'03', t:'Maison Soho', cat:'Résidentiel', loc:'New York · 2024', size:'square', photo:5 },
    { id:'04', t:'Galerie Mercure', cat:'Commercial', loc:'Bâle · 2024', size:'tall', photo:7 },
    { id:'05', t:'Mas du Comte', cat:'Patrimoine', loc:'Provence · 2023', size:'wide', photo:4 },
    { id:'06', t:'Appartement Tilleul', cat:'Résidentiel', loc:'Paris VIIe · 2023', size:'square', photo:6 },
    { id:'07', t:'Restaurant Atrium', cat:'Hôtelier', loc:'Genève · 2023', size:'tall', photo:8 },
    { id:'08', t:'Boutique Lacroix', cat:'Commercial', loc:'Monaco · 2022', size:'square', photo:2 },
    { id:'09', t:'Chapelle Sainte-Reine', cat:'Patrimoine', loc:'Bourgogne · 2022', size:'wide', photo:9 },
  ];
  const visible = filter==='Tous' ? projects : projects.filter(p=>p.cat===filter);

  const sizeStyle = (size) => {
    if (size==='tall') return { gridColumn:'span 4', aspectRatio:'4/5' };
    if (size==='wide') return { gridColumn:'span 8', aspectRatio:'16/10' };
    return { gridColumn:'span 4', aspectRatio:'1/1' };
  };

  return (
    <section className="sec" id="projets">
      <SectionHeader
        num="05"
        kicker="Portfolio — Sélection 2022–2025"
        title={<>Quarante-et-un<br/><span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300}}>projets,</span> trois pays.</>}
        intro="Une sélection de réalisations récentes. Chaque projet est documenté en détail sur demande — fiche, photographies, plans et matériauthèque."
      />

      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:40,paddingBottom:18,borderBottom:'1px solid var(--line)'}}>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {cats.map(c=>(
              <button key={c} onClick={()=>setFilter(c)} className="hov" style={{
                fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.22em',textTransform:'uppercase',
                padding:'10px 18px',
                border:'1px solid '+ (filter===c?'var(--ink)':'var(--line)'),
                background: filter===c?'var(--ink)':'transparent',
                color: filter===c?'var(--paper)':'var(--ink)',
                transition:'all .3s ease'
              }}>{c}</button>
            ))}
          </div>
          <span className="eyebrow">{visible.length.toString().padStart(2,'0')} projets affichés</span>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(12,1fr)',gap:24}}>
          {visible.map((p)=>(
            <a key={p.id} href="#" className="reveal hov" style={{...sizeStyle(p.size),position:'relative',overflow:'hidden',display:'block'}}>
              <div className="photo" data-photo={p.photo} style={{position:'absolute',inset:0,transition:'transform .8s cubic-bezier(.2,.7,.2,1)'}} ref={el=>{
                if(!el) return;
                const card = el.parentElement;
                card.onmouseenter=()=>{el.style.transform='scale(1.04)'};
                card.onmouseleave=()=>{el.style.transform='scale(1)'};
              }}/>
              <div style={{
                position:'absolute',inset:0,
                background:'linear-gradient(180deg,transparent 50%,rgba(17,17,15,0.75) 100%)',
                pointerEvents:'none'
              }}/>
              <div style={{position:'absolute',top:18,left:18,fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(255,255,255,0.85)',
                background:'rgba(17,17,15,0.4)',padding:'6px 10px',backdropFilter:'blur(6px)'}}>
                — {p.id}
              </div>
              <div style={{position:'absolute',bottom:24,left:24,right:24,color:'var(--paper)'}}>
                <div className="display" style={{fontSize:32,lineHeight:1,marginBottom:6}}>{p.t}</div>
                <div style={{display:'flex',justifyContent:'space-between',fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase',opacity:.85}}>
                  <span>{p.loc}</span>
                  <span>{p.cat}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{marginTop:48,textAlign:'center'}}>
          <a href="#contact" className="btn">Demander le portfolio complet (PDF) <span className="arrow">↓</span></a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
