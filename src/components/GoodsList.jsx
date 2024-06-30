import { Grid, Typography } from "@mui/material";
import GoodCard from "./GoodCard";
import {Router,Route,Link,Redirect,useParams,Switch,} from "react-router-dom";
import {useGetCategoryByIdQuery} from '../App'
import GoodItem from './GoodItem'



const Goodslist = ()=>{

    const { _id } = useParams(); //наприклад, беремо _id категорії із роутінгу
    //const {isLoading, data} = useGetCategoryByIdQuery({_id: '62c94b10b74e1f5f2ec1a0dd'})
    const { isFetching, data } = useGetCategoryByIdQuery({ _id });
    if (isFetching) return <div>Loading...</div>;
  
    const {
      CategoryFindOne: { name, goods, parent, subCategories },
    } = data;
    
    console.log(goods,'!!!!!!!!!!!!!!!!!')
    console.log(name)
    // const {goods,setOrder}= props;

    return (
        <div>
      <Typography variant="h2">{name}</Typography>
      <Grid container spacing={8}>
       
        {goods && goods.map((good) => (
          <GoodItem key={good.id} good={good} />
        ))}
      </Grid>
    </div>
    )

}

export default Goodslist


