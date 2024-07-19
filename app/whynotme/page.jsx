import '../../styles/global.scss';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';


const WhyNotMe = () => {
  return (
    <div>
      <FloatingNav navItems={navItems} />
        <div className="projectPage">
            <p className="projectPage-title">WhyNotMe.</p>
            <img src='/whynotme1.png' alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Ecommerce</p>
                <p className="projectPage-description1-paragraph">WhyNotMe is an e-commerce website, built with React and powered by SQL for order management, that specializes in selling athlete Joe Fornasier's merchandise. The platform ensures a seamless shopping experience by using session storage to keep items in the user's cart upon refresh. Additionally, it includes a JavaScript-based subscription model enabling users to sign up for a newsletter to receive updates on the latest merchandise drops.</p>
            </div>

            <section className="projectPage-gallery2">
                <img src='/whynotme2.png' alt="login page" />
                <img src='/whynotme3.png' alt="login page" />
                <img src='/whynotme4.png' alt="login page" />

                <div className="projectPage-description1">
                  <p className="projectPage-description1-paragraph">Our e-commerce website integrates the Stripe API for secure and efficient payment processing. Using Stripe's JavaScript library, we collect and tokenize payment details on the client side, which are then securely sent to our server. The server uses Stripe's API to process the payment and manage transactions. This seamless integration ensures a smooth and secure checkout experience for our customers.
                  </p>
                </div>
                <img src='/whynotme5.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/foodbyte">Foodbyte</a>
            </footer>
        </div>
    </div>
  )
}

export default WhyNotMe