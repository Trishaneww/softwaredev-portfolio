import '../styles/global.scss'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Button from './ui/Button';
import { MacbookScroll } from './ui/MacbookScroll';
import { macbook } from '@/data';


const Approach = () => {
  return (
    <div className="mt-20">
       <h1 className="heading lg:text-8xl title"> My {" "}
          <span className="text-purple lg:text-8xl">Approach</span>
        </h1>
        <section className="approachContainer flex justify-center items-center gap-12 mt-16">
          <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 relative">
            <div>
              <Button text={"Phase 1"} />
            </div>
            <div className="approachContainer-phase-overlay bg-slate-950 p-10">
              <p className="approachContainer-phase-overlay-title text-4xl font-bold">Planning & Strategy</p>
              <p className="text-sm mt-4 leading-6">The website development process begins with discovery and planning, where we collaborate to define the website's goals, target audience, key functionalities, and content requirements. Next, I create wireframes and design mockups for approval, ensuring the visual style aligns with your brand.</p>
            </div>
          </div>

          <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 relative">
            <div>
              <Button text={"Phase 2"} />
            </div>
            <div className="approachContainer-phase-overlay bg-slate-950 p-10">
              <p className="approachContainer-phase-overlay-title text-4xl font-bold">Development</p>
              <p className="text-sm mt-4 leading-6">During the development phase, I will code the website using the latest technologies, ensuring robust functionality and optimal performance. This includes implementing responsive design, integrating necessary features, and optimizing for speed and efficiency.</p>
            </div>
          </div>

          <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 relative">
            <div>
              <Button text={"Phase 3"} />
            </div>
            <div className="approachContainer-phase-overlay bg-slate-950 p-10">
              <p className="approachContainer-phase-overlay-title text-4xl font-bold">Deployment</p>
              <p className="text-sm mt-4 leading-6">
              Once the design is approved, I prepare the website files, configure the hosting environment, and upload the site to a live server. I then provide ongoing maintenance and support to ensure it stays updated, secure, and running smoothly.</p>
            </div>
          </div>
        </section>

        {/* <MacbookScroll src='/studyhive13.png' /> */}
        


    </div>
  )
}

export default Approach