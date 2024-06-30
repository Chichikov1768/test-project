import GoodCard from "./GoodCard";
import {Router,Route,Link,Redirect,useParams,Switch,} from "react-router-dom";
import {useGetCategoryByIdQuery} from '../App'
const CatPage = () => {
  const { _id } = useParams(); //наприклад, беремо _id категорії із роутінгу
  //const {isLoading, data} = useGetCategoryByIdQuery({_id: '62c94b10b74e1f5f2ec1a0dd'})
  const { isFetching, data } = useGetCategoryByIdQuery({ _id });
  if (isFetching) return <div>Loading...</div>;

  const {
    CategoryFindOne: { name, goods, parent, subCategories },
  } = data;

  return (
    <div>
      <h1>{name}</h1>
      {parent && parent.name}
      {goods && goods.map((good) => <GoodCard good={good} key={good._id} />)}
    </div>
  );
};


export default CatPage