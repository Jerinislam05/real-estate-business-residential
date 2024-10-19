import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EstateDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);
  const [error, setError] = useState(null);

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
                <strong>Bedrooms:</strong> {estate.bedrooms}
              </li>
              <li>
                <strong>Bathrooms:</strong> {estate.bathrooms}
              </li>
              <li>
                <strong>Square Footage:</strong> {estate.square_footage} sqft
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
