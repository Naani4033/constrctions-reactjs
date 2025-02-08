import img1 from "../assets/ab7791487d3b3396301f8fa0a7263db1.jpg";
import img2 from "../assets/giggi.jpeg";
import img3 from "../assets/th.jpeg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Luxury Apartment Complex",
      description: "A high-rise residential building with modern amenities.",
      image: img1, // ✅ Use imported images
    },
    {
      id: 2,
      name: "Corporate Office Tower",
      description: "A state-of-the-art commercial office building.",
      image: img2,
    },
    {
      id: 3,
      name: "Eco-Friendly Villa",
      description: "A sustainable and green villa project.",
      image: img3,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
