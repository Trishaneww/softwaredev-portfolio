import '../styles/global.scss'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Button from './ui/Button';
import { MacbookScroll } from './ui/MacbookScroll';
import { macbook } from '@/data';
import { phases } from '@/data';


const Approach = () => {
  return (
    <div className="mt-20">
       <h1 className="heading lg:text-8xl title"> My Design {" "}
          <span className="text-purple lg:text-8xl">Approach</span>
        </h1>
        <section className="approachContainer flex justify-center items-center gap-12 mt-16">
          {phases.map((phase) => (
            <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 relative">
            <div>
              <Button text={`Phase ${phase.id}`} />
            </div>
            <div className="approachContainer-phase-overlay bg-slate-950 p-10">
              <p className="approachContainer-phase-overlay-title text-4xl font-bold">{phase.title}</p>
              <p className="mt-4 leading-6">{phase.des}</p>
            </div>
          </div>
          ))}
        </section>

        {/* <MacbookScroll src='/studyhive13.png' /> */}
    </div>
  )
}

export default Approach