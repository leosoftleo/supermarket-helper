import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import ProductTable from './components/ProductTable/ProductTable';
import Cart from './components/Cart/Cart';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/productTable' component={ProductTable} />
            <Route path='/cart' component={Cart} />
        </Switch>
    )
}

export default Routes;