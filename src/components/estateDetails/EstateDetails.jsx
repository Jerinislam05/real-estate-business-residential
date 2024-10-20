import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EstateDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    fetch("/data/estates.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedEstate = data.find(
          (estate) => parseInt(estate.id) === parseInt(id)
        );
        if (selectedEstate) {
          setEstate(selectedEstate);
        } else {
          throw new Error("Estate not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching estate:", error);
        setError("Failed to load estate details");
      });
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!estate) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={estate.image}
            alt={estate.estate_title}
            className="rounded-lg object-cover h-full w-full"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800">
            {estate.estate_title}
          </h1>
          <p className="mt-4 text-gray-600">{estate.description}</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Property Details
            </h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>
                <strong>Price:</strong> ${estate.price}
              </li>
              <li>
                <strong>Location:</strong> {estate.location}
              </li>
              <li>
                <strong>Facilities:</strong> {estate.facilities}
              </li>
              <li>
                <strong>Square Footage:</strong> {estate.area} sqft
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <button
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all"
              onClick={handleContactClick}
            >
              Contact Agent
            </button>
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
              <div className="relative bg-teal-100 p-8 rounded-lg shadow-2xl w-full max-w-3xl mx-4 sm:mx-auto animate-fadeIn transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-teal-900">
                    Contact Agent
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-teal-900 hover:text-orange-500 transition-colors"
                  >
                    ✖
                  </button>
                </div>

                <div className="flex items-center mb-4">
                  <img
                    src={estate.agent.logo}
                    alt={estate.agent.name}
                    className="w-20 h-20 rounded-full mr-6 object-cover shadow-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-teal-900">
                      {estate.agent.name}
                    </h3>
                    <p className="text-teal-900">{estate.agent.role}</p>
                  </div>
                </div>

                <div className="text-teal-900">
                  <ul className="space-y-2">
                    <li>
                      <strong>Email:</strong> {estate.agent.email}
                    </li>
                    <li>
                      <strong>Phone:</strong> {estate.agent.phone}
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
