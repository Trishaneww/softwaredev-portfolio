import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';


const WhyNotMe = () => {
  return (
    <div>
      <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">WhyNotMe.</p>
            <img src='/whynotme1.png' alt="preview image" />

            <section className="projectPage-gallery2">
                <img src='/whynotme2.png' alt="login page" />
                <img src='/whynotme3.png' alt="login page" />
                <img src='/whynotme4.png' alt="login page" />
                <img src='/whynotme5.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/foodbyte">Foodbyte</a>
            </footer>
        </div>
    </div>
  )
}

export default WhyNotMe