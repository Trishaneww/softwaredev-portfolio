import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

const PrimeTort = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">PrimeTort.</p>
            <img src='/primetort1.png' alt="preview image" />

            <section className="projectPage-gallery2">
                <img src='/primetort2.png' alt="login page" />
                <img src='/primetort3.png' alt="login page" />
                <img src='/primetort4.png' alt="login page" />
                <img src='/primetort5.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/whynotme">WhyNotMe</a>
            </footer>
        </div>
    </div>
  )
}

export default PrimeTort