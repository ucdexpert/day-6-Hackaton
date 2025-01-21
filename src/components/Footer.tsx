import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
const Footer: React.FC = () => {
    return (
      <footer className="bg-[#ffffff] py-10 pl-28 pr-28">
        <div className="container mx-auto flex flex-wrap justify-between gap-8 px-4">
          {/* Logo Section */}
          <div className="max-w-xs">
            <h2 className="text-xl font-bold flex items-center space-x-2">
              <span className="text-2xl">🛋</span>
              <span>Comforty</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
              <MdFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
              <FaTwitter />

              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
              <FaInstagram />
              </a>
              <a href="#" aria-label="Pinterest" className="text-gray-600 hover:text-gray-900">
              <FaPinterest />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-900">
              <FaYoutube />
              </a>
            </div>
          </div>
  
          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Category</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Sofa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Armchair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Wing Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Desk Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Wooden Chair</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Park Bench</a></li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help & Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help</a></li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold text-gray-800">Newsletter</h3>
            <form className="mt-4 flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
            <p className="text-sm text-gray-600">
              © 2021 - Blogy - Designed & Developed by Zakirsoft
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-600"><FaCcPaypal /></span>
              <span className="text-gray-600"><SiAmericanexpress /></span>
              <span className="text-gray-600"><FaCcVisa /></span>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;