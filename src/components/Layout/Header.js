import {Fragment} from 'react';
import classes from './Header.module.css';
import cart from '../../assets/cart.jpg';
import ImageCarousel from './ImageCarousel';

const Header = props => {
    return <Fragment>            
                <header>
                    <div className={classes.header}>
                        <h1>Order Food</h1>                      
                        <h5>About us</h5> 
                        <img className={classes.img} src={cart} alt='cart' />  
                    </div>                                                                               
                </header>   
                <div>                 
                    <ImageCarousel />
                </div>                         
    </Fragment>
};

export default Header;