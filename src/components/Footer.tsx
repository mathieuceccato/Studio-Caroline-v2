const Footer = () => (
  <footer style={{padding:'60px 0 40px',background:'var(--ink)',color:'rgba(241,236,225,0.6)',borderTop:'1px solid rgba(241,236,225,0.12)'}}>
    <div className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:24,fontFamily:'var(--mono)',fontSize:10,letterSpacing:'0.22em',textTransform:'uppercase'}}>
        <div>© 2026 Studio Caroline · Tous droits réservés</div>
        <div style={{display:'flex',gap:24}}>
          <a href="#" className="hov">Mentions légales</a>
          <a href="#" className="hov">Politique de confidentialité</a>
          <a href="#" className="hov">Crédits</a>
        </div>
        <div>Conçu &amp; édité au studio · Monaco</div>
      </div>
    </div>
  </footer>
);

export default Footer;
