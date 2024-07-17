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

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

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

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

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