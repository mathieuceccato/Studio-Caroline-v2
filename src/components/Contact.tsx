import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({nom:'',email:'',type:'Résidentiel',message:''});
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section className="sec" id="contact" style={{background:'var(--ink)',color:'var(--paper)'}}>
      <div className="container">
        <div className="kicker" style={{color:'var(--ocre)',marginBottom:32}}>— 09 / Collaborons</div>
        <h2 className="display" style={{fontSize:'clamp(64px,11vw,180px)',lineHeight:.86,marginBottom:80}}>
          Écrivons<br/>
          <span style={{fontStyle:'italic',fontFamily:'var(--serif)',fontWeight:300,color:'var(--ocre)'}}>la suite</span> ensemble.
        </h2>

        <div className="grid-12" style={{alignItems:'start'}}>
          <div style={{gridColumn:'1 / span 5'}}>
            {!sent ? (
              <form onSubmit={submit} style={{display:'grid',gap:0}}>
                {[
                  ['nom','Votre nom','text'],
                  ['email','Email','email'],
                ].map(([k,l,t])=>(
                  <label key={k} style={{display:'block',borderBottom:'1px solid rgba(241,236,225,0.2)',padding:'18px 0'}}>
                    <span style={{display:'block',fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(241,236,225,0.5)',marginBottom:8}}>{l}</span>
                    <input type={t} required value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})} style={{
                      width:'100%',background:'transparent',border:0,color:'var(--paper)',
                      fontFamily:'var(--serif)',fontSize:22,outline:'none',padding:'4px 0'
                    }}/>
                  </label>
                ))}
                <label style={{display:'block',borderBottom:'1px solid rgba(241,236,225,0.2)',padding:'18px 0'}}>
                  <span style={{display:'block',fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(241,236,225,0.5)',marginBottom:12}}>Type de projet</span>
                  <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                    {['Résidentiel','Hôtelier','Commercial','Patrimoine','Autre'].map(t=>(
                      <button type="button" key={t} onClick={()=>setForm({...form,type:t})} className="hov" style={{
                        fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.22em',textTransform:'uppercase',
                        padding:'10px 14px',border:'1px solid '+(form.type===t?'var(--ocre)':'rgba(241,236,225,0.25)'),
                        color: form.type===t?'var(--ocre)':'var(--paper)',
                        background:'transparent', transition:'all .3s'
                      }}>{t}</button>
                    ))}
                  </div>
                </label>
                <label style={{display:'block',borderBottom:'1px solid rgba(241,236,225,0.2)',padding:'18px 0'}}>
                  <span style={{display:'block',fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.22em',textTransform:'uppercase',color:'rgba(241,236,225,0.5)',marginBottom:8}}>Parlez-nous du lieu, du moment, de l'envie</span>
                  <textarea required rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} style={{
                    width:'100%',background:'transparent',border:0,color:'var(--paper)',
                    fontFamily:'var(--serif)',fontSize:18,outline:'none',padding:'4px 0',resize:'vertical'
                  }}/>
                </label>
                <button type="submit" className="btn btn--ocre" style={{
                  marginTop:36,alignSelf:'start',background:'var(--ocre)',color:'var(--ink)',borderColor:'var(--ocre)'
                }}>
                  Envoyer le message <span className="arrow">→</span>
                </button>
              </form>
            ) : (
              <div style={{padding:48,border:'1px solid var(--ocre)'}}>
                <div className="kicker" style={{marginBottom:18}}>— Message reçu</div>
                <p style={{fontFamily:'var(--serif)',fontSize:24,lineHeight:1.4,fontStyle:'italic'}}>
                  Merci, {form.nom||'à vous'}.<br/>
                  Caroline vous écrit dans les 48 heures.
                </p>
              </div>
            )}
          </div>

          <div style={{gridColumn:'8 / span 5',display:'grid',gap:48}}>
            <div>
              <div className="kicker" style={{marginBottom:14}}>Studio</div>
              <p className="serif" style={{fontFamily:'var(--serif)',fontSize:22,lineHeight:1.5,fontStyle:'italic',fontWeight:300}}>
                14 rue de la Turbie<br/>
                98000 Monaco
              </p>
              <p style={{marginTop:12,fontFamily:'var(--mono)',fontSize:12,letterSpacing:'0.16em',color:'rgba(241,236,225,0.6)'}}>
                Sur rendez-vous · L–V · 9h–18h
              </p>
            </div>
            <div>
              <div className="kicker" style={{marginBottom:14}}>Direct</div>
              <p style={{fontFamily:'var(--serif)',fontSize:22,fontStyle:'italic'}}>caroline@studio-caroline.com</p>
              <p style={{marginTop:6,fontFamily:'var(--mono)',fontSize:14,letterSpacing:'0.1em'}}>+377 99 90 00 14</p>
            </div>
            <div>
              <div className="kicker" style={{marginBottom:14}}>Suivre l'atelier</div>
              <div style={{display:'flex',gap:18,fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.22em',textTransform:'uppercase'}}>
                <a href="#" className="ul-link">Instagram</a>
                <a href="#" className="ul-link">LinkedIn</a>
                <a href="#" className="ul-link">Pinterest</a>
              </div>
            </div>
            <div style={{paddingTop:32,borderTop:'1px solid rgba(241,236,225,0.16)'}}>
              <div className="kicker" style={{marginBottom:14}}>Reconnaissance</div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,fontFamily:'var(--mono)',fontSize:11,letterSpacing:'0.16em',textTransform:'uppercase',color:'rgba(241,236,225,0.7)'}}>
                <div><span style={{color:'var(--ocre)'}}>AD100</span><br/>2024 · 2025</div>
                <div><span style={{color:'var(--ocre)'}}>Wallpaper*</span><br/>Top 50 · 2024</div>
                <div><span style={{color:'var(--ocre)'}}>Elle Déco</span><br/>Featured · 2023</div>
                <div><span style={{color:'var(--ocre)'}}>Architectural</span><br/>Digest · 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
