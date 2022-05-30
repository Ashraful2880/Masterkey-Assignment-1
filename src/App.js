import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdFormate from './Component/AdFormate/AdFormate';
import Advertiser from './Component/Advertiser/Advertiser';
import Blog from './Component/Blog/Blog';
import ContactUs from './Component/ContactUs/ContactUs';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Home from './Component/Home/Home';
import Influencer from './Component/Influencer/Influencer';
import Login from './Component/Login/Login';
import Publisher from './Component/Publisher/Publisher';
import Footer from './Component/Shared/Footer/Footer';
import Header from './Component/Shared/Header/Header';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/*' element={<ErrorPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/advertisers' element={<Advertiser />} />
          <Route path='/publishers' element={<Publisher />} />
          <Route path='/influencers' element={<Influencer />} />
          <Route path='/formats' element={<AdFormate />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
