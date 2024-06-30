
import { Provider, useDispatch, useSelector } from "react-redux";
import {Router,Route,Link,Redirect,useParams,Switch,} from "react-router-dom";


import { backEndUrl } from "../App";



const GoodCard = ({ good }) => {
    const dispatch = useDispatch();
  
    const handleAddToCart = () => {
      // dispatch(actionCartAdd(good))
    };
    const imageUrl = `${backEndUrl}/${good.images[0].url}`;
    // console.log(`${backEndUrl}/${good.images[0].url}`)
    const goodUrl = `/good/${good._id}`
    return (

      <Link to={goodUrl}><div className="goodCard">
        <div className="goodImage">
          <img src={imageUrl} alt={good.name} />
        </div>
        <div className="goodDetails">
          <h2>{good.name}</h2>
          <p>{good.description}</p>
          <p>цена: {good.price}</p>
          <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
      </div>
      </Link>
    );
  };

export default GoodCard