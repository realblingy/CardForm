// React
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// Pages
import CardAuthenticator from './pages/CardAuthenticator';
import Home from './pages/Home';
// Components
import NavigationBar from './components/NavigationBar';

/**
 * Main application of the app that controls
 * the routing and navigation.
 */
function App() {
  return (
    <>
      <Router>
        {/** Navigation of the app */}
        <header>
          <NavigationBar/>
        </header>
        {/** Routes of the app */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/card" exact component={CardAuthenticator} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
