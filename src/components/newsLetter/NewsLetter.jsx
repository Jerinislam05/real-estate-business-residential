import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <section
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url(https://i.ibb.co/q5DnFLj/cover.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="mb-6">
          At the heart of each of our investments is a strategy to build or buy
          a portfolio of real estate property buying.
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-l-md border border-white"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-400 text-white rounded-r-md hover:bg-orange-500"
          >
            Get Started
          </button>
        </form>
        <p className="mt-4 text-sm">
          By clicking Sign Up you are confirming that you agree with our Terms
          and Conditions.
        </p>
        <div className="mt-8">
          <h3 className="text-lg font-semibold">Apartments</h3>
          <p>From $56,000</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
