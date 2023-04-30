import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Home } from './Pages/Home';
import { Cancer } from './Pages/Cancer';
import { Autism } from './Pages/Autism';
import { PTSD } from './Pages/PTSD';
import { Dementia } from './Pages/Dementia';
function App() {
  return (
    <div >
       
        <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/cancer' component={Cancer}/>
        <Route path='/autism' component={Autism}/>
        <Route path='/PTSD' component={PTSD}/>
        <Route path='/dementia' component={Dementia}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
