import Card from "../../components/Card/Card";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className={style.nav}>
        <Navbar />
      </div>
      <div className={style.content}>
        <Card>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            saepe iure maxime unde dolor exercitationem laboriosam earum itaque
            rem eum minima minus numquam corporis quos? Recusandae nesciunt
            tempora qui corporis.
          </p>
          <Link to="/dashboard" className={style.btn}>
            Go to Dashboard »
          </Link>
        </Card>
        <Card>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur natus quisquam repellendus, suscipit pariatur autem
            corrupti obcaecati ut placeat exercitationem adipisci sed repellat
            impedit nihil ipsam labore reprehenderit, facere nulla?
          </p>
          <Link to="/login" className={style.btn}>
            Sign In Now »
          </Link>
        </Card>
        <Card>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            molestias quia voluptates esse cum nostrum, voluptas nesciunt hic ut
            optio similique facilis aliquam? At dolorum quis, hic delectus ipsam
            animi?
          </p>
          <Link to="/signup" className={style.btn}>
            {" "}
            Resister Yourself »
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;
