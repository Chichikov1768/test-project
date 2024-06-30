
import {AppBar, Typography,Toolbar, IconButton} from "@mui/material"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Search from "./Search";


function Header2 (){
    return (
        <AppBar position="static"> 
        {/* А нужно ли статик? */}
            <Toolbar>
                <Typography
                    variant='h6'
                    component='span'
                    sx={{ flexGrow: 1 }}
                > 
                    {/* Название */}
                    My Shop
                 </Typography>
                 <IconButton
                    color="inherit"
                    
                 >
                    {/* Кнопка */}
                    {/* Иконка корзины */}
                    <ShoppingBasketIcon/>
                 </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header2 