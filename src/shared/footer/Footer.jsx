const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-200 p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src="https://i.ibb.co/LJhwDM5/logo.jpg" alt="Bhumi Logo" className="w-20 h-20 rounded-full" />
            <p>The home and elements needed to create beautiful products.</p>
            <p>📞 +624 423 26 72</p>
            <p>📧 support@bhumi.com</p>
          </div>

         
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Follow Us</h5>
            <div className="flex flex-col space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                Instagram
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                Pinterest
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Quick Links</h5>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">
                About
              </a>
              <a href="#" className="hover:text-gray-400">
                Blog
              </a>
              <a href="#" className="hover:text-gray-400">
                All Products
              </a>
              <a href="#" className="hover:text-gray-400">
                Location Map
              </a>
              <a href="#" className="hover:text-gray-400">
                Our FAQ
              </a>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Services</h5>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">
                Order Tracking
              </a>
              <a href="#" className="hover:text-gray-400">
                Wish List
              </a>
              <a href="#" className="hover:text-gray-400">
                Login
              </a>
              <a href="#" className="hover:text-gray-400">
                My Account
              </a>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-gray-400">
                Promotional Offers
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center md:text-left">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-lg font-semibold">Subscribe to our Newsletter</h5>
              <form className="flex mt-2">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="p-2 bg-gray-700 text-gray-200 w-full focus:outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 p-2 text-white ml-2">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="text-gray-400">
              <p>© 2024 Bhume. All images are for demo purposes.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
