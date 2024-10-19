import { useEffect, useState } from "react";
import PropertyList from "./PropertyList";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/public/data/estates.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProperties(data);
        console.log(properties);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      {properties.length > 0 ? (
        <PropertyList estates={properties} />
      ) : (
        <p>No properties found.</p>
      )}
    </div>
  );
};

export default Properties;
