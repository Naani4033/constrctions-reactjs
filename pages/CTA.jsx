import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="text-center py-10">
      <Link to="/contact">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-500">
          Get in Touch
        </button>
      </Link>
    </div>
  );
}
