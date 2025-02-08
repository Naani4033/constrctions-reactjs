export default function Contact() {
  return (
    <section id="contact" className="bg-gray-300 py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">Get in Touch</h2>
      <form className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-md"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-md h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-500"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
