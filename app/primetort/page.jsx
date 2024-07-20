import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems, tooltip } from '@/data';
import { FaArrowRightLong } from 'react-icons/fa6';
/* eslint-disable @next/next/no-img-element */

const PrimeTort = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">PrimeTort.</p>
            <img src='/primetort1.png' alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Overview</p>
                <p className="projectPage-description1-paragraph">PrimeTort Leads, the marketing arm of YA Solutions Inc, specializes in Mass Tort Case Acquisition. Through targeted digital marketing strategies across various channels, PrimeTort Leads excels at uncovering valuable leads, delivering significant marketing results, and achieving measurable KPIs. With a focus on precision and effectiveness, PrimeTort Leads is your trusted partner in finding the needle in the haystack.</p>
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
                    <a href="https://www.primetortleads.com/" className="flex justify-between items-center gap-2 sm:gap-1">View Live Site<FaArrowRightLong /></a>
                </div>
            </div>

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