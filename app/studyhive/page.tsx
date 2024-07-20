"use client"
import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems, studyHiveFeatures, tooltip } from '@/data';
import { HoverEffect } from '@/components/ui/CardHoverEffect';
import { FaArrowRightLong } from "react-icons/fa6";
/* eslint-disable @next/next/no-img-element */

const Studyhive = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">StudyHive.</p>
            <img src='/studyhive11.png' alt="preview image" />


            {/* overview section */}
            <div className="projectPage-description1">
                <p className="projectPage-description1-title">OverView</p>
                <p className="projectPage-description1-paragraph">The software allows college students to create personalized flashcard study decks and use various quizzing methods to test their knowledge. In addition to creating their own decks, students can view and study from flashcard decks made by other users, enhancing collaborative learning. The platform also supports the creation of study servers dedicated to specific college courses. By joining these servers, students gain access to chat with other users and use all flashcard decks related to the course, fostering a community-based learning environment. Notably, WebSockets were used to develop the live chat feature within the study servers, ensuring real-time communication among users.</p>

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
                    <a href="https://github.com/Trishaneww/capstone-server" className="flex justify-between items-center sm:gap-1">View Github Repo <FaArrowRightLong /></a>
                </div>
            </div>




            <section className="projectPage-gallery2">
                <img src='/studyhive12.png' alt="login page" />
            </section>

            {/* This section describes the logic behind the various quzzing features of the software */}
            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Quizzing</p>
                <p className="projectPage-description1-paragraph mt-6">I developed a comprehensive quizzing system using JavaScript that enables users to quiz themselves in various ways and records their scores. The system is designed to enhance learning and self-assessment by providing immediate feedback and tracking user performance over time.</p>
            </div>
            <HoverEffect items={studyHiveFeatures} />
            <div className="projectPage-description1">
                <p className="projectPage-description1-paragraph">
                This quizzing system not only facilitates effective self-assessment but also supports continuous learning and improvement by providing a structured yet flexible platform for users to test and enhance their knowledge.</p>
            </div>



            {/* This section showcases the quizzing format via a gallery format */}
            <section className="projectPage-gallery1">
                <img src='/studyhive4.png' alt="first image" />
                <img src='/studyhive5.png' alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src='/studyhive7.png' alt="login page" />
            </section>

            <section className="projectPage-gallery1">
                <img src='/studyhive6.png' alt="first image" />
                <img src='/studyhive10.png' alt="first image" />
            </section>

            <div className="projectPage-description1 mt-12">
                <p className="projectPage-description1-paragraph">Our software empowers college students to create their own study servers for specific courses using JavaScript. Users fill out the required fields, and the information is stored in a SQL database, which is then used to generate the new study server. I designed a script to retrieve all relevant public study decks within the online database that match each study server, providing all students in these servers access to these resources. Additionally, students can join these servers to stay updated on course materials and communicate with peers in real-time via live chat powered by WebSockets.</p>
            </div> 

            <section className="projectPage-gallery2">
                <img src='/studyhive9.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/foodbyte">Foodbyte</a>
            </footer>
        </div>
    </div>
  )
}

export default Studyhive