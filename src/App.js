import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';

import Notfound from './components/notfound/Notfound';
import Service from './components/service/Service';
import About from './components/about/About';
import Features from './components/features/Features';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Header></Header>
     <Switch>
     <Route exact path="/">
           <Home></Home>
       </Route>
       <Route exact path="/home">
           <Home></Home>
       </Route>
       <Route exact path="/services">
<Service></Service>
       </Route>
      
       <Route exact path ="/features">

         <Features></Features>
       </Route>
        
       <Route exact  path="/about">

         <About></About>
       </Route>

       <Route path="*">
         <Notfound></Notfound>

       </Route>
     </Switch>
     <Footer></Footer>
     
     </BrowserRouter>
  
     
    </div>
  );
}

export default App;
