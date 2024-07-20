import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems, tooltip } from '@/data';
import { FaArrowRightLong } from 'react-icons/fa6';


const Yasolutions = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">YaSolutions.</p>
            <img src='/yasolutions6.png' alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Lead Generation</p>
                <p className="projectPage-description1-paragraph">YaSolutionsInc is a lead generation company specializing in delivering high-quality leads across various industries. Our tailored strategies and cutting-edge technologies help businesses connect with potential customers, driving growth and increasing sales.</p>
                <div className="flex justify-between items-end mt-10">
                    <div className="flex items-center">
                        {tooltip[0].iconLists.map((icon, index) => (
                            <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-12 lg:h-12 w-8 h-8 flex justify-center items-center"
                            style={{
                                transform: `translateX(-${5 * index + 2}px)`,
                            }}
                            >
                            <img src={icon} alt="icon5" className="p-2" />
                            </div>
                        ))}
                    </div> 
                    <a href="https://www.yasolutionsinc.com/" className="flex justify-between items-center gap-2 sm:gap-1">View Live Site <FaArrowRightLong /></a>
                </div>
            </div>

            <section className="projectPage-gallery1">
                <img src='/yasolutions3.png' alt="first image" />
                <img src='/yasolutions4.png' alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src='/yasolutions2.png' alt="login page" />
            </section>

            <p className="projectPage-description1-title ">Designed for Mobile</p>

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