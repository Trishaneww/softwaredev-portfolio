import '../../styles/global.scss';

const DigitalWealth = () => {
  return (
    <div>
        <div className="projectPage">
            <p className="projectPage-title">Digital Wealth</p>
            <img src='/dw6.png' alt="preview image" />

            <section className="projectPage-gallery1">
                <img src='/dw3.png' alt="first image" />
                <img src='/dw4.png' alt="first image" />
            </section>

            <section className="projectPage-gallery2">
                <img src='/dw2.png' alt="login page" />
            </section>

            <footer className="projectPage-nextProject">
                <a href="/studyhive">StudyHive</a>
            </footer>
        </div>
    </div>
  )
}

export default DigitalWealth