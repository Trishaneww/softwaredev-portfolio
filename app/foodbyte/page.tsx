import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';
import { AnimatedTooltip } from '@/components/ui/AnimatedTooltip';
import { tooltip } from '@/data';

const Foodbyte = () => {
  return (
    <div>
        <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">Foodbyte.</p>
            <img src='/foodbyte7.png' alt="preview image" />

            {/* <AnimatedTooltip items={tooltip}/> */}

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Streamlined Ordering System</p>
                <p className="projectPage-description1-paragraph">Our software offers a cost-effective, tablet-based kiosk ordering solution designed for fast food dining establishments. Perfect for small restaurants, this system allows customers to place orders directly from company-owned tablets via the internet, eliminating the need for expensive hardware kiosks. Customers can easily browse the menu and place orders using these tablets, enhancing their overall dining experience.</p>
                <p className="projectPage-description1-paragraph mt-6">Store managers benefit from a robust menu management system, enabling them to add or remove menu items and categories with ease. Additionally, the software features an analytics dashboard that provides valuable insights, such as estimated profit, total revenue, and highest-grossing products, allowing managers to make informed business decisions. This software not only streamlines operations but also helps small restaurants thrive by offering a modern, efficient ordering solution.</p>
            </div>

            <section className="projectPage-gallery1">
                <img src='/foodbyte3.png' alt="first image" />
                <img src='/foodbyte4.png' alt="first image" />
                <img src='/foodbyte5.png' alt="second image" />
                <img src='/foodbyte6.png' alt="third image" />
            </section>

            <div className="projectPage-description1">
                {/* <p className="projectPage-description1-paragraph">Doodler is a chance for me to experiment with different features, learn new things, and test my technical capabilities. It's something that allows me to scratch that itch I have for understanding new technologies, and to create something that I can use myself.</p> */}
            </div>

            <div className="projectPage-description2 mt-10 w-[60vw]">
                <p className="projectPage-description1-paragraph">I created a user model with fields for username, email, and a hashed password, ensuring structured data storage in the SQL database. For the signup process, I built a POST endpoint to handle user registration. This endpoint validates input, hashes the password with bcrypt, and saves the user data in the SQL database. For login, I designed a POST endpoint that verifies user credentials by checking the email against the database and comparing the hashed password using bcrypt. Upon successful authentication, the system generates a session or JWT token for the user. </p>

                {/* <div className="projectPage-description1-gallery">
                    <img src='/foodbyte9.png' alt="login page" />
                    <img src='/foodbyte10.png' alt="login page" />
                </div> */}
                <p className="projectPage-description1-paragraph mt-6">I implemented authentication middleware to protect sensitive routes by verifying the session or token. On the frontend, I designed forms for signup and login, connecting them to the backend routes. I also ensured thorough testing and incorporated security measures like input validation, error handling, and rate limiting. This approach created a secure and efficient login/signup system that securely stores user information in the SQL database and manages user sessions effectively. </p>
            </div>

            <section className="projectPage-gallery2">
                <img src='/foodbyte9.png' alt="login page" />
                <img src='/foodbyte10.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/studyhive">StudyHive</a>
            </footer>
        </div>
    </div>
  )
}

export default Foodbyte