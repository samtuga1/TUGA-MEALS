import { Fragment } from 'react';
import mealsImage from '../../assets/mealsImage.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header} >
            <h1>ReactMeals</h1>
            <div className={classes['main-image']} >
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </header>
    </Fragment>
};

export default Header;