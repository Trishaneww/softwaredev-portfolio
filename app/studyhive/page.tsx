import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';


const Studyhive = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">StudyHive.</p>
            <img src='/studyhive11.png' alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">OverView</p>
                <p className="projectPage-description1-paragraph">The software allows college students to create personalized flashcard study decks and use various quizzing methods to test their knowledge. In addition to creating their own decks, students can view and study from flashcard decks made by other users, enhancing collaborative learning. The platform also supports the creation of study servers dedicated to specific college courses. By joining these servers, students gain access to chat with other users and use all flashcard decks related to the course, fostering a community-based learning environment. Notably, WebSockets were used to develop the live chat feature within the study servers, ensuring real-time communication among users.</p>
            </div>

            <section className="projectPage-gallery2">
                <img src='/studyhive12.png' alt="login page" />
            </section>

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Converge Tool</p>
                <p className="projectPage-description1-paragraph">One of the most interesting recent developments for me as designer has been the convergence of "plug and play" software tooling, front-end frameworks that are easy to pick up, and fancy new deployment tools that are hassle free. It's never been easier to start making something on the web. This has enabled me to create Doodler, a collaborative SVG drawing tool.</p>
            </div>

            <section className="projectPage-gallery1">
                <img src='/studyhive4.png' alt="first image" />
                <img src='/studyhive5.png' alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src='/studyhive7.png' alt="login page" />
            </section>

            <section className="projectPage-gallery1">
                <img src='/studyhive6.png' alt="first image" />
                <img src='/studyhive8.png' alt="first image" />
            </section>

            <div className="projectPage-description1">
                <p className="projectPage-description1-paragraph">Doodler is a chance for me to experiment with different features, learn new things, and test my technical capabilities. It's something that allows me to scratch that itch I have for understanding new technologies, and to create something that I can use myself.</p>
            </div>

            <section className="projectPage-gallery2">
                <img src='/studyhive9.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/digitalwealth">DigitalWealth</a>
            </footer>
        </div>
    </div>
  )
}

export default Studyhive