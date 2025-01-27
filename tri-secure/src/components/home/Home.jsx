import HeroImage from '../../assets/Images/HeroImage.jpg';
import Navbar from './../navbar/Navbar';
import Services from './../services/Services'
import './home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="image-overlay-wrapper">
      <img src={HeroImage} alt="Hero Section" className="image" />
      <div className="overlay"></div>
      <div className="text-container">
        <h1 className="headline">Empowering Businesses with Secure Software Solutions</h1>
        <p className="tagline">Future-Proof Your Business with TriSecure Solutions.</p>
      </div>
    </div>
      <Services />
    </>
  );
}

export default Home;