import {Router,Route,Link,Redirect,useParams,Switch,} from "react-router-dom";
import Carousel from "./Carousel"
import {backEndUrl,useGetGoodByIdQuery} from "../App"
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";

const GoodPage = () => {
    const { _id } = useParams();
    
    const { isFetching, data } = useGetGoodByIdQuery({ _id }); // Неправильно: передаем объект с полем _id
    
    const images2 = [];
    // const imagesUrl = `${backEndUrl}/${data.images[0].url}`;
  
    const handleAddToCartGood = ()=>{
         // dispatch(actionCartAdd(good))
    }
    
  
    if (isFetching) {
      return <div>Loading...</div>;
    }

    
    
  const {
    GoodFindOne: { name, description, price, images,subCategories },
  } = data;
    /// Спросить 
  for(let elem of images){
    
    elem=`${backEndUrl}/${elem.url}`
    images2.push(elem)
    
  }
    // Далее вы можете отобразить информацию о товаре, используя данные из data
  
    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>цена: {price}</p>
        <button onClick={handleAddToCartGood}>Добавить в корзину</button>
        <Carousel3 images = {images2}/>

        
      </div>
    );
};

export default GoodPage