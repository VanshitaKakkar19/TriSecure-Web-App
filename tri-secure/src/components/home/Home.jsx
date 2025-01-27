import Navbar from './../navbar/Navbar';
import Services from './../services/Services'
import Contact from './../contact/Contact'
import Footer from './../footer/Footer'

import HeroImage from '../../assets/Images/HeroImage.jpg';
import './home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="image-overlay-wrapper">
        <img src={HeroImage} alt="Hero Section" className="Heroimage" />
        <div className="overlay"></div>
        <div className="wrapper__text">
          <h1 >Empowering Businesses with Secure Software Solutions</h1>
          <p >Future-Proof Your Business with <b>TriSecure Solutions.</b></p>
        </div>
      </div>
      {/* <Services /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default Home;