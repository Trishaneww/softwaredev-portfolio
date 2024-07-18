import '../styles/global.scss'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Button from './ui/Button';
import { MacbookScroll } from './ui/MacbookScroll';
import { macbook } from '@/data';


const Approach = () => {
  return (
    <div>
        <section className="approachContainer">
          <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 relative">
            <div className="base">
              <Button text={"Phase 1"} />
            </div>
            <div className="overlay bg-slate-950">
              <p>Finds campsites using google maps & Weatherbit API to filter through user set parameters.</p>
            </div>
          </div>

          <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 relative">
            <div className="base">
              <Button text={"Phase 2"} />
            </div>
            <div className="overlay bg-slate-950">
              <p>Finds campsites using google maps & Weatherbit API to filter through user set parameters.</p>
            </div>
          </div>

          <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 relative">
            <div className="base">
              <Button text={"Phase 3"} />
            </div>
            <div className="overlay bg-slate-950">
              <p>Finds campsites using google maps & Weatherbit API to filter through user set parameters.</p>
            </div>
          </div>

        </section>

        <MacbookScroll src='/studyhive13.png' />
        


    </div>
  )
}

export default Approach