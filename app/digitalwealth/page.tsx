import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems, tooltip } from '@/data';
import { FaArrowRightLong } from 'react-icons/fa6';
/* eslint-disable @next/next/no-img-element */

const DigitalWealth = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">Digital Wealth.</p>
            <img src='/dw6.png' alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Overview</p>
                <p className="projectPage-description1-paragraph">Digital Wealth is a comprehensive software application that provides real-time cryptocurrency market prices, allows users to search for specific cryptocurrencies, and keeps them informed with the latest news reports within the market and industry. The application features a live dashboard displaying up-to-date prices of various cryptocurrencies, utilizing the Coinranking API to ensure accurate and current market information. Users can easily search for their desired cryptocurrency through a robust search function, providing detailed information about each one. Additionally, the application integrates the Bing News Search API to fetch the most recent news reports, delivering relevant and timely updates directly within the application.</p>
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
                    <a href="https://github.com/Trishaneww/Digital-Wealth" className="flex justify-between items-center gap-2 sm:gap-1">View Github Repo <FaArrowRightLong /></a>
                </div>
            </div>

            <section className="projectPage-gallery1">
                <img src='/dw3.png' alt="first image" />
                <img src='/dw4.png' alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src='/dw2.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/yasolutions">YaSolutions</a>
            </footer>
        </div>
    </div>
  )
}

export default DigitalWealth