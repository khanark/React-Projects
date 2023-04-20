import "./HeaderSection.css";

import { Link } from "react-scroll";
import headerImage from "../../assets/svg-header.svg";

const HeaderSection = () => {
  return (
    <section className="header__section">
      <h1 className="title">TaskMate</h1>
      <div className="section__header">
        <img src={headerImage} alt="" className="section-header__image" />
        <div className="section__header-right">
          <p className="desc">
            TaskMate is an intuitive and user-friendly task management app that
            helps you stay organized and on top of your daily tasks.
          </p>
          <p className="desc">
            You can choose from different themes and colors to personalize the
            app, and you can even set up recurring tasks for things you need to
            do on a regular basis.
          </p>
          <Link
            to="todo-section"
            className="btn btn-primary"
            smooth={true}
            duration={500}
          >
            Let's get you started!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
