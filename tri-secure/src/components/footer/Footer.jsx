import './Footer.css';
import Logo from '../../assets/Images/Logo.png';
const Footer = () => {
  return (
    <footer className="border-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="footer grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className='col-4 footer-image'>
               <img src={Logo} alt="Hero Section" className="Company Logo" />
          </div>
          <div className='col-4'>
            <ul className="space-y-2">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">Features</li>
              <li className="hover:underline">Pricing</li>
              <li className="hover:underline">FAQs</li>
              <li className="hover:underline">About</li>
            </ul>
          </div>
          <div className='col-4'>
            <ul className="space-y-2">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">Features</li>
              <li className="hover:underline">Pricing</li>
              <li className="hover:underline">FAQs</li>
              <li className="hover:underline">About</li>
            </ul>
          </div>
        </div>
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Monthly digest of what's new and exciting from us.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600">Copyright © 2025 TriSecure Slutions, LLC. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600">
            <span className="sr-only">Twitter</span>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-600">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-600">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
