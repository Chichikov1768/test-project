import {Link} from "react-router-dom";
import logo from "../logo.svg";
const Header = () => (
    <header>
      <Link to='/'><img src={logo}></img></Link>
  
      <ul>
        <li>
          <Link to="/">Головна</Link>
        </li>
  
        <li>
          <Link to="/about">Контакти</Link>
        </li>
        <li>
          <Link to="/add/2/3">2 + 3</Link>
        </li>
        <li>
          <Link to="/add/-5/5">буде нуль</Link>
        </li>
        <li>
          <Link to="/post/22">пост 22</Link>
        </li>
        <li>
          <Link to="/post/55">пост 55</Link>
        </li>
        <li>
          <Link to="/loginform">Авторизация</Link>
        </li>
      </ul>
    </header>
  );

  export default Header 