import { useState } from "react";

const FAQ = () => {
  const items = [
    { q:'Travaillez-vous en dehors d\'Europe ?', a:'Oui. Nous avons livré des projets à New York, Marrakech et Genève. Les déplacements sont intégrés au cahier des charges, et nous travaillons en binôme avec des architectes locaux pour les autorisations.' },
    { q:'Quel est le budget minimum d\'un projet ?', a:'Nous travaillons sans plancher fixe, mais nos missions complètes s\'inscrivent généralement à partir de 250 000 € de travaux. Pour les conseils ponctuels, nous proposons une formule à la journée.' },
    { q:'Comment se déroule la première rencontre ?', a:'Toujours sur place, sans engagement. Trois heures d\'écoute et de relevés. Sous quinze jours, nous remettons une note d\'intention écrite — et seulement après cette étape vient le devis.' },
    { q:'Acceptez-vous les rénovations partielles ?', a:'Oui, à condition que la portion concernée puisse être traitée comme un projet à part entière. Nous refusons en revanche les missions purement décoratives.' },
    { q:'Vendez-vous du mobilier ?', a:'Non. Nous dessinons et faisons fabriquer des pièces sur-mesure pour nos clients, et nous orientons vers des galeries partenaires pour les achats de collection.' },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="sec sec--tight" style={{background:'var(--paper-2)'}}>
      <div className="container">
        <div className="grid-12" style={{alignItems:'start'}}>
          <div style={{gridColumn:'1 / span 4',position:'sticky',top:120}}>
            <div className="kicker" style={{marginBottom:18}}>— 08 / Questions</div>
            <h2 className="display" style={{fontSize:'clamp(40px,5vw,72px)',lineHeight:.95}}>
              Avant<br/>
              <span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300}}>de nous écrire.</span>
            </h2>
            <p style={{marginTop:32,color:'var(--muted)',fontSize:14,lineHeight:1.7,maxWidth:320}}>
              Vous trouverez peut-être votre réponse ici. Sinon, le contact est juste en dessous.
            </p>
          </div>
          <div style={{gridColumn:'6 / span 7'}}>
            {items.map((it,i)=>(
              <div key={i} className="reveal" style={{borderBottom:'1px solid var(--line)'}}>
                <button onClick={()=>setOpen(open===i?-1:i)} className="hov" style={{
                  width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',
                  padding:'28px 0',textAlign:'left'
                }}>
                  <span className="serif" style={{fontFamily:'var(--serif)',fontSize:24,fontWeight:400,paddingRight:24}}>{it.q}</span>
                  <span style={{
                    width:32,height:32,border:'1px solid var(--ink)',borderRadius:'50%',
                    display:'inline-flex',alignItems:'center',justifyContent:'center',
                    transform:open===i?'rotate(45deg)':'none',transition:'transform .4s ease',flexShrink:0
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: open===i ? 400 : 0, overflow:'hidden',
                  transition:'max-height .6s ease, padding .4s ease',
                  paddingBottom: open===i ? 28 : 0,
                  paddingRight: 56
                }}>
                  <p style={{color:'var(--ink-soft)',fontSize:15,lineHeight:1.7}}>{it.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
