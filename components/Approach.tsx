import '../styles/global.scss'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import Button from './ui/Button';


const Approach = () => {
  return (
    <div>
        <section className="approachContainer">
          <div className="approachContainer-phase flex justify-center items-center p-2 bg-slate-950 ">
           <Button text={"Phase 1"}/>
          </div>

          <div className="approachContainer-phase flex justify-center items-center p-2">
           <Button text={"Phase 2"}/>
          </div>

          <div className="approachContainer-phase flex justify-center items-center p-2">
           <Button text={"Phase 3"}/>
          </div>
        </section>
        


    </div>
  )
}

export default Approach