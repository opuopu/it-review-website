import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Service from './components/service/Service';
import Notfound from './components/notfound/Notfound';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Switch>
     <Route exact path="/">
           <Home></Home>
       </Route>
       <Route path="/home">
           <Home></Home>
       </Route>
       <Route path="/services">
<Service></Service>
       </Route>
       

       <Route path="*">
         <Notfound></Notfound>

       </Route>
     </Switch>
     
     </BrowserRouter>
  
     
    </div>
  );
}

export default App;
