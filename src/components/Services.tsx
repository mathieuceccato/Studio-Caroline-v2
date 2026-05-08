import { useState } from "react";
import SectionHeader from "./SectionHeader";

const Services = () => {
  const items = [
    { n:'01', t:'Architecture d\'intérieur', d:'Conception complète, du diagnostic spatial à la livraison clés en main. Plans, élévations, cahiers de finitions, suivi de chantier.', tags:['Résidentiel','Commercial','Hôtelier'] },
    { n:'02', t:'Design global', d:'Direction artistique, identité de lieu, signalétique, mobilier sur-mesure dessiné en atelier puis fabriqué par nos artisans partenaires.', tags:['DA','Mobilier','Signalétique'] },
    { n:'03', t:'Conseil & curation', d:'Accompagnement de collectionneurs et institutions sur l\'achat, le placement et la conservation d\'œuvres, mobilier de collection et pièces vintages.', tags:['Curation','Sourcing','Estimation'] },
    { n:'04', t:'Réhabilitation patrimoniale', d:'Lecture et réinvention de bâtiments anciens. Diagnostic, dossier ABF, dialogue avec les compagnons et restaurateurs spécialisés.', tags:['Patrimoine','ABF','Artisanat'] },
  ];
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section className="sec" id="services">
      <SectionHeader
        num="03"
        kicker="Services"
        title={<>Quatre <span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300}}>terrains</span><br/>de jeu.</>}
        intro="Le studio intervient à toutes les échelles, du grand œuvre architectural à la cuillère posée sur la table. Une seule règle : la cohérence du geste."
      />
      <div className="container">
        <div style={{borderTop:'1px solid var(--line)'}}>
          {items.map((it,i)=>(
            <div key={i}
              onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)}
              className="hov reveal"
              style={{
                borderBottom:'1px solid var(--line)',
                padding:'40px 0',
                display:'grid',gridTemplateColumns:'80px 1fr 1.4fr 1fr 60px',
                gap:32,alignItems:'center',
                background: hover===i ? 'var(--paper-2)' : 'transparent',
                transition:'background .4s ease',
                cursor:'pointer',
                marginInline: hover===i ? '-32px' : 0,
                paddingInline: hover===i ? 32 : 0,
              }}>
              <span className="kicker">— {it.n}</span>
              <h3 className="display" style={{
                fontSize:'clamp(28px,3.4vw,52px)',lineHeight:1,
                color: hover===i ? 'var(--ocre)' : 'var(--ink)',
                transition:'color .4s ease'
              }}>{it.t}</h3>
              <p style={{fontSize:14,lineHeight:1.6,color:'var(--ink-soft)'}}>{it.d}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
                {it.tags.map(t=>(
                  <span key={t} style={{
                    fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.16em',textTransform:'uppercase',
                    border:'1px solid var(--line)',padding:'5px 10px',color:'var(--muted)'
                  }}>{t}</span>
                ))}
              </div>
              <div style={{textAlign:'right',fontSize:24,color: hover===i?'var(--ocre)':'var(--muted)',transition:'all .4s'}}>
                <span style={{display:'inline-block',transform: hover===i?'translateX(8px) rotate(-45deg)':'rotate(-45deg)',transition:'transform .4s'}}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
