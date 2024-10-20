import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are here to help! Fill out the form or use the contact details
              below.
            </p>
            <div className="space-y-4">
              <p className="flex items-center space-x-4">
                <span className="bg-primary text-white p-3 rounded-full">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span>+1 234 567 890</span>
              </p>
              <p className="flex items-center space-x-4">
                <span className="bg-primary text-white p-3 rounded-full">
                  <i className="fas fa-envelope"></i>
                </span>
                <span>info@example.com</span>
              </p>
              <p className="flex items-center space-x-4">
                <span className="bg-primary text-white p-3 rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>1234 Main Street, Anytown, USA</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label text-lg text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label text-lg text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label text-lg text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for choosing us. We all get back to you shortly.
            </p>
            <button onClick={closeModal} className="btn btn-primary w-full">
              Close
            </button>
          </div>
        </div>
      )}

      <div className="w-full mt-12">
        <iframe
          className="w-full h-64 lg:h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8690246884755!2d-122.4194160846849!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4b5c52b5%3A0x72a27ae4c3a0a60!2s1234%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1631507698721!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
