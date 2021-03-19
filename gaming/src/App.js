import './App.css';
import './assets/css/gaming.css'
import Home from './pages/home'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Social from './pages/social';
import Games from './pages/games'
import Merch from './pages/merch'


function App() {
  return (
<Router>
    <div className="App">
<Navbar/>
  <Switch>
  <Route exact path="/" component={Home} />
            <Route path='/games' component={Games} />
            <Route path='/merch' component={Merch} />
            <Route path='/social' component={Social} />
  </Switch>
            

    </div>
</Router>
  );
}

export default App;

