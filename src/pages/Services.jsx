

const services = [
  { title: 'Residential Construction', icon: '🏠' },
  { title: 'Commercial Buildings', icon: '🏢' },
  { title: 'Renovations & Remodeling', icon: '🔨' },
];

export default function Services() {
  return (
    <section className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 bg-gray-200 shadow-lg rounded-2xl flex flex-col items-center transform transition duration-300 hover:scale-105 "
          >
            <span className="text-6xl mb-4">{service.icon}</span>
            <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
