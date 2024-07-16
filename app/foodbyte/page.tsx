import '../../styles/global.scss';

const Foodbyte = () => {
  return (
    <div>
        <div className="projectPage">
            <p className="projectPage-title">Foodbyte</p>
            <img src='/foodbyte7.png' alt="preview image" />

            <div className="projectPage-description1">
                <p className="projectPage-description1-title">Overview</p>
                <p className="projectPage-description1-paragraph">Our software offers a cost-effective, tablet-based kiosk ordering solution designed for fast food dining establishments. Perfect for small restaurants, this system allows customers to place orders directly from company-owned tablets via the internet, eliminating the need for expensive hardware kiosks. Customers can easily browse the menu and place orders using these tablets, enhancing their overall dining experience. Store managers benefit from a robust menu management system, enabling them to add or remove menu items and categories with ease. Additionally, the software features an analytics dashboard that provides valuable insights, such as estimated profit, total revenue, and highest-grossing products, allowing managers to make informed business decisions. This software not only streamlines operations but also helps small restaurants thrive by offering a modern, efficient ordering solution.</p>
            </div>

            <section className="projectPage-gallery1">
                <img src='/foodbyte3.png' alt="first image" />
                <img src='/foodbyte4.png' alt="first image" />
                <img src='/foodbyte5.png' alt="second image" />
                <img src='/foodbyte6.png' alt="third image" />
            </section>

            <div className="projectPage-description1">
                <p className="projectPage-description1-paragraph">Doodler is a chance for me to experiment with different features, learn new things, and test my technical capabilities. It's something that allows me to scratch that itch I have for understanding new technologies, and to create something that I can use myself.</p>
            </div>

            <section className="projectPage-gallery2">
                <img src='/foodbyte1.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/studyhive">StudyHive</a>
            </footer>
        </div>
    </div>
  )
}

export default Foodbyte