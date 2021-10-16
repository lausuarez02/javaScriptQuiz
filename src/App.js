//vendors
import './App.css';
//router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
//screen
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path='/' component={HomeScreen}/>
        <Route exact path='/Quiz' component={QuizScreen}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
