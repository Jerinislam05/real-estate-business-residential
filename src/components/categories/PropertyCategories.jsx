
const PropertyCategories = () => {
  const categories = [
    { type: "Villa", count: 15 },
    { type: "Bungalow", count: 28 },
    { type: "Apartments", count: 25 },
    { type: "Town Home", count: 30 },
    { type: "Reassort", count: 25 },
    { type: "City House", count: 11 },
    { type: "Mention", count: 9 },
    { type: "City House", count: 25 },
  ];

  return (
    <section className="property-categories text-center font-display text-4xl font-bold mt-6">
      <h2>Universe of Apartment Types</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="category-card p-4 border rounded shadow">
            <h3 className="text-lg font-semibold">{category.type}</h3>
            <p className="text-gray-500">{category.count} Property</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCategories;
