import React from 'react';
import Carousel from 'react-material-ui-carousel';
import banner1 from '../../images/banner/pexels-sam-kolder-2387873.jpg';
import banner2 from '../../images/banner/pexels-alfonso-escalante-2533092.jpg';
import banner3 from '../../images/banner/pexels-flo-maderebner-238622.jpg';
import Advenntures from '../Adventures/Advenntures';
import Footer from '../Footer/Footer';
import About from './About';
import SubScribe from './SubScribe';
import ImgGallery from './ImgGallery';
// import Adventures from '../Adventures/Adventures';


const Home = () => {
  return (
    <div>
      <Carousel indicators>
        <div>
          <img src={banner1} alt="" />
          <h1 style={{ position: 'absolute', top: '40%', left: '30%', color: 'white' }}>Welcome to Madventurers</h1>
        </div>
        <img src={banner2} alt="" />
        <img src={banner3} alt="" />
      </Carousel>
      {/* <h1 style={{position: 'absolute', top: '500px', left: '500px', color: 'white'}}>Welcome to Madventurers</h1> */}
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