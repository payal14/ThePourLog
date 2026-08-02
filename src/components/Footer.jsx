import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-900 text-gray-300">

      {/* Top Section */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Nikita Mart
            </h2>

            <p className="mt-5 leading-7">

              Discover the best products with honest reviews,
              buying guides, and exclusive affiliate deals.
              Shop smarter and save more every day.

            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-sky-500 transition"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-red-600 transition"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-700 transition"
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="/" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/deals" className="hover:text-blue-400">
                  Deals
                </a>
              </li>

              {/* <li>
                <a href="/reviews" className="hover:text-blue-400">
                  Reviews
                </a>
              </li> */}

              <li>
                <a href="/blog" className="hover:text-blue-400">
                  Blog
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Categories
            </h3>

            <ul className="space-y-4">

              <li>Electronics</li>
              <li>Fashion</li>
              <li>Gaming</li>
              <li>Home & Kitchen</li>
              <li>Beauty</li>
              <li>Fitness</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <MapPin className="text-blue-400" />

                <span>Pune, Maharashtra, India</span>

              </div>

              {/* <div className="flex gap-3">

                <Phone className="text-green-400" />

                <span>+91 98765 43210</span>

              </div> */}

              <div className="flex gap-3">

                <Mail className="text-red-400" />

                <span>payalkale.kale@gmail.com</span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-slate-700"></div>

      {/* Bottom Section */}

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-center md:text-left">
          © {new Date().getFullYear()} NikitaMart. All Rights Reserved.
        </p>

        <div className="flex gap-6">

          <Link to="/privacy-policy" className="hover:text-blue-400">
            Privacy Policy
          </Link>

          <Link to="/terms" className="hover:text-blue-400">
            Terms & Conditions
          </Link>

          {/* <a href="#" className="hover:text-blue-400">
            Disclaimer
          </a> */}

        </div>

      </div>

      {/* Back to Top */}

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition"
      >
        <ArrowUp size={20} />
      </button>

    </footer>
  );
};

export default Footer;