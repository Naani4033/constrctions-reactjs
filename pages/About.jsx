export default function About() {
  return (
    <section id="about" className="py-16 text-center bg-gray-100 px-4">
      <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
      
      <p className="max-w-3xl mx-auto mt-4 text-gray-600">
        We are a leading construction company in India, committed to delivering 
        high-quality infrastructure and commercial projects with excellence and professionalism. 
.
      </p>

      <div className="max-w-4xl mx-auto mt-6 text-gray-700 space-y-4">
        <p>
          Our company is driven by innovation, sustainability, and modern engineering techniques. 
          
        </p>
        
        <p>
          Over the years, we have successfully delivered projects across **Mumbai, Delhi, Bangalore, 
          Chennai, and other major Indian cities**, contributing to India's rapid urban development.
        </p>
      </div>

      <img 
        src="/src/assets/About us.webp" 
        alt="Our Team" 
        className="mx-auto mt-6 w-[250px] md:w-[400px] rounded-lg shadow-lg"
      />

      <p className="mt-6 text-gray-700 font-semibold">
        **Building India's future, one project at a time.**  
      </p>
    </section>
  );
}