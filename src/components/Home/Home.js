import React from 'react';
import './Home.css';
import Carousel from 'react-material-ui-carousel';
import banner1 from '../../images/banner/pexels-sam-kolder-2387873.jpg';
import banner2 from '../../images/banner/pexels-alfonso-escalante-2533092.jpg';
import banner3 from '../../images/banner/pexels-flo-maderebner-238622.jpg';
import Advenntures from '../Adventures/Advenntures';
import Footer from '../Footer/Footer';
import About from './About';
import SubScribe from './SubScribe';
import ImgGallery from './ImgGallery';
import { Link } from 'react-router-dom';
// import Adventures from '../Adventures/Adventures';


const Home = () => {
  return (
    <div>
      <Carousel indicators>
        <div>
          <img src={banner1} alt="" />
          <h1 className='banner-1'>Welcome to <span style={{ color: '#e75723e3' }}>MADventurers</span></h1>
        </div>
        <div>
          <img src={banner2} alt="" />
          <div className='banner-2'>
            <h2>Travel with us all around the world</h2>
            <Link className='button' to={'/adventures'}>Adventures</Link>
          </div>
        </div>
        <img src={banner3} alt="" />
      </Carousel>

      <br />
      <Advenntures></Advenntures>
      <About></About>
      <ImgGallery></ImgGallery>
      <SubScribe></SubScribe>
      <Footer></Footer>
    </div>
  );
};

export default Home;