import { CardMedia, Grid } from "@mui/material";
import { backEndUrl } from "../App";
import {  useDispatch } from "react-redux";
import {Link,} from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const GoodItem=({good})=>{

    const dispatch = useDispatch();
  
    const handleAddToCart = () => {
      // dispatch(actionCartAdd(good))
    };
    const imageUrl = `${backEndUrl}/${good.images[0].url}`;
    const goodUrl = `/good/${good._id}`


    

    return(
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} mt={3} ml={3} mr={3}>
            <Card >
            {/* <Card sx={{ maxWidth: 345 }}> */}
                <CardActionArea>
                    <Link
                    // underline="none" 
                    to={goodUrl}
                    >
                    <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={good.name}
                title={good.name}
                >

                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" maxHeight='40px' mb={4}>
                            {good&&good.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" minHeight='50px'>
                           {good&&good.discription}
                        </Typography>
                    </CardContent>
                </Link>    
                </CardActionArea>  
                <CardActions>
                    
                    <Typography gutterBottom variant="h5" component="div">
                        Цена : {good.price} грн
                    </Typography>
                    <Button size="small" color="primary" onClick={handleAddToCart}>
                                Добавить в корзину
                    </Button>
                </CardActions>  
            </Card>
           
            {/* важно указать что это Grid item */}
        </Grid>
    )
}





  export default GoodItem