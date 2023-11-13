import "./AboutMe.css";
import photo from "../../images/avatar.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="main__heading">Студент</h2>
            <article className="about-me__info">
                <div className="about-me__info-text">
                    <h3 className="about-me__info-title">Щебетенко Роман</h3>
                    <p className="about-me__info-subtitle">
                        Фронтенд-разработчик, 32 года
                    </p>
                    <p className="about-me__info-paragraph">
                        Я родился в Санкт-Петербурге, но сейчас живу в Сербии.
                        Хочу устроиться разработчиком в интересный проект.
                    </p>
                    <a
                        href="https://github.com/romzes2f"
                        className="about-me__info-link app__link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
                <img src={photo} alt="Фото профиля" className="about-me__photo" />
            </article>
        </section>
    );
}

export default AboutMe;