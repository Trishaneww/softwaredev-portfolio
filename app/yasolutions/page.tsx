import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';


const Yasolutions = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">YaSolutions.</p>
            <img src='/yasolutions6.png' alt="preview image" />

            <section className="projectPage-gallery1">
                <img src='/yasolutions3.png' alt="first image" />
                <img src='/yasolutions4.png' alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src='/yasolutions2.png' alt="login page" />
            </section>

            <section className="projectPage-gallery3">
                <img src='/yasolutions9.png' alt="first image" />
                <img src='/yasolutions7.png' alt="first image" />
                <img src='/yasolutions8.png' alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src='/yasolutions5.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/primetort">PrimeTort</a>
            </footer>
        </div>
    </div>
  )
}

export default Yasolutions