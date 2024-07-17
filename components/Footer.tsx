import '../styles/global.scss';

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="footer">
      <div>
        <p className="footer-trishane">@ 2024 Trishane Wijeyawickrema</p>
      </div>

      <div className="footer-contact">
        <div className="footer-contact-section">
          <p>Elsewhere</p>
          <ul className="footer-contact-list">
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Linkedin</a>
            </li>
            <li>
              <a href="">Dribble</a>
            </li>
            <li>
              <a href="">Email</a>
            </li>
            <li>
              <a href="">Figma</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <p>Contact</p>
          <ul className="footer-contact-list">
            <li>
              <a href="">Email</a>
            </li>
          </ul>
        </div>
      </div>


      </div>
    </div>
  )
}

export default Footer