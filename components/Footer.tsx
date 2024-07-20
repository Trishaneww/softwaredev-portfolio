import '../styles/global.scss';

const Footer = () => {
  return (
    <div className="footer-page mb-10 mt-10" >
      <div className="footer">
      <div>
        <p className="footer-trishane">@ 2024 Trishane Wijeyawickrema</p>
      </div>

      <div className="footer-contact">
        <div className="footer-contact-section">
          <p>Elsewhere</p>
          <ul className="footer-contact-list">
            <li>
              <a href="https://github.com/Trishaneww">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tw11/">Linkedin</a>
            </li>
            <li>
              <a href="/resume.pdf">Resume</a>
            </li>
            <li>
              <a href="https://www.figma.com/files/team/1301200902848620471/user/1301200898720742294?fuid=1301200898720742294">Figma</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact-section">
          <p>Contact</p>
          <ul className="footer-contact-list">
            <li>
              <a href="mailto:trishaneww@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>


      </div>
    </div>
  )
}

export default Footer