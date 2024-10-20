import { Link } from "react-router-dom";

const PropertyList = ({ estates }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {estates &&
        estates.map((estate) => (
          <div
            key={estate.id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={estate.image}
                alt={estate.estate_title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{estate.estate_title}</h2>
              <p>{estate.description}</p>
              <div className="card-actions justify-center">
                <Link to={`/estate/${estate.id}`}>
                  <button className="btn btn-primary">
                    {estate.view_property_button || "View Property"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PropertyList;
