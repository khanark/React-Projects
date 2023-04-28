import "./HeaderSection.css";

import { Link } from "react-scroll";
import headerImage from "../../assets/svg-header.svg";

const HeaderSection = () => {
  return (
    <section className="header-section">
      <div className="header">
        <img src={headerImage} alt="" className="header-img" />
        <div className="header-right--box">
          <h1 className="title">
            Task management app that helps you stay organized.
          </h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            cupiditate, quae, ratione ab maxime pariatur suscipit quam
            praesentium exercitationem commodi animi architecto voluptas harum
            fugiat distinctio, mollitia eligendi accusamus consequuntur.
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
