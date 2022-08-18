import { Fragment } from 'react';
import mealsImage from '../../assets/mealsImage.jpg';

const Header = props => {
    return <Fragment>
        <header>
            <h1>ReactMeals</h1>
            <div>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </header>
    </Fragment>
};

export default Header;