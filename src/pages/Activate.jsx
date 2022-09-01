import Card from '../hocs/Card';
import style from '../assets/styles/Home.module.css';
import {Link} from 'react-router-dom';

const Activate = () => {
  return (
    <div>
      Activate Now
      <Card>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit doloribus enim incidunt, earum at, voluptas illo exercitationem voluptatem placeat repudiandae quibusdam perspiciatis accusantium, ratione nobis. Illum provident voluptas accusantium.</p>
        <Link to='/dashboard' className={style.btn}>Activate Your acccount!</Link>
      </Card>
    </div>
  )
}

export default Activate