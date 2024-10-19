import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-8">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
