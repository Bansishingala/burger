import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import { Route, Switch } from 'react-router-dom';
import About from './Containers/About/About';
import Chef from './Containers/Chef/Chef';
import Feature from './Containers/Feature/Feature';
import Booking from './Containers/Booking/Booking';
import Menu from './Containers/Menu/Menu';
import Blogdetails from './Containers/Pages/Blogdetails';
import BlogGrid from './Containers/Pages/BlogGrid';
import Contact from './Containers/Contact/Contact';
import Login from './Containers/Login-Signin/Lform';


function App() {
  return (
    <div className="App">
      {/* <Slider/> */}
      <Header />
    <Switch> 
        <Route path={'/'} exact component={Home} />
        <Route path={'/About'} exact component={About} />
        <Route path={'/Chef'} exact component={Chef} />
        <Route path={'/Feature'} exact component={Feature} />
        <Route path={'/Booking'} exact component={Booking} />
        <Route path={'/Menu'} exact component={Menu} />
        <Route path={'/Contact'} exact component={Contact} />
        <Route path={'/BlogD'} exact component={Blogdetails} />
        <Route path={'/BlogG'} exact component={BlogGrid} />
        <Route path={'/Login'} exact component={Login} />

      </Switch> 
      
      <Footer />
    </div>
  );
}

export default App;
