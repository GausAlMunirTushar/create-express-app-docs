"use client";

import { FaHandHoldingHeart } from "react-icons/fa";
import Link from "next/link";

const Sponsor: React.FC = () => {
  return (
    <section className="text-black dark:text-white py-16 px-8 text-center">
      <h2 className="text-3xl font-semibold mb-6">Support the Project</h2>
      <p className="text-lg mb-6">
        Your sponsorship helps us maintain and improve the project. Become a part
        of our community by supporting us on Open Collective.
      </p>
      <Link
        href="https://opencollective.com/create-express-app" 
        target="_blank"
        className="inline-flex items-center justify-center bg-green-500 text-white font-semibold text-lg py-3 px-8 rounded-lg hover:bg-green-600 transition"
      >
        <FaHandHoldingHeart className="mr-2" />
        Become a Sponsor
      </Link>
    </section>
  );
};

export default Sponsor;
