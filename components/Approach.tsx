import '../styles/global.scss'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'


const Approach = () => {
  return (
    <div>
        <h1>My Approach</h1>

        <section className="approachContainer">
          <div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[140px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl"> Phase 1 </span>
          </button>
          </div>
        </section>
        


    </div>
  )
}

export default Approach